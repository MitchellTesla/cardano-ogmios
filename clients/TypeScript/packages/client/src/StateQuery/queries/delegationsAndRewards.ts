import {
  DelegationsAndRewardsByAccounts,
  DelegationsAndRewards,
  EraMismatch,
  Hash16,
  Ogmios
} from '@cardano-ogmios/schema'
import { EraMismatchError, QueryUnavailableInCurrentEraError, UnknownResultError } from '../../errors'
import { InteractionContext } from '../../Connection'
import { Query } from '../Query'

const isEraMismatch = (result: Ogmios['QueryResponse[delegationsAndRewards]']['result']): result is EraMismatch =>
  (result as EraMismatch).eraMismatch !== undefined

const isDelegationsAndRewardsByAccounts = (result: Ogmios['QueryResponse[delegationsAndRewards]']['result']): result is DelegationsAndRewardsByAccounts => {
  const sample = Object.entries(result as DelegationsAndRewards)[0]
  return typeof sample[0] === 'string' && (sample[1].delegate !== undefined || sample[1].rewards !== undefined)
}

export const delegationsAndRewards = (stakeKeyHashes: Hash16[], context?: InteractionContext): Promise<DelegationsAndRewardsByAccounts> =>
  Query<
    Ogmios['Query'],
    Ogmios['QueryResponse[delegationsAndRewards]'],
    DelegationsAndRewardsByAccounts
  >({
    methodName: 'Query',
    args: {
      query: { delegationsAndRewards: stakeKeyHashes }
    }
  }, {
    handler: (response, resolve, reject) => {
      if (response.result === 'QueryUnavailableInCurrentEra') {
        return reject(new QueryUnavailableInCurrentEraError('delegationsAndRewards'))
      } else if (isEraMismatch(response.result)) {
        const { eraMismatch } = response.result
        const { ledgerEra, queryEra } = eraMismatch
        return reject(new EraMismatchError(queryEra, ledgerEra))
      } else if (isDelegationsAndRewardsByAccounts(response.result)) {
        return resolve(response.result)
      } else {
        return reject(new UnknownResultError(response.result))
      }
    }
  }, context)
