import {
  Address,
  EraMismatch,
  Ogmios,
  TxIn,
  TxOut,
  Utxo
} from '@cardano-ogmios/schema'
import { EraMismatchError, QueryUnavailableInCurrentEraError, UnknownResultError } from '../../errors'
import { InteractionContext } from '../../Connection'
import { Query } from '../Query'

const isEraMismatch = (result: Ogmios['QueryResponse[utxo]']['result']): result is EraMismatch =>
  (result as EraMismatch).eraMismatch !== undefined

const isArrayOfUtxo = (result: Ogmios['QueryResponse[utxo]']['result']): result is Utxo => {
  if (!Array.isArray(result)) {
    return false
  } else if (Array.isArray(result) && result.length === 0) {
    return true
  }
  const item = result[0] as [TxIn, TxOut]
  return 'index' in item[0] || typeof item[1].value.coins === 'number'
}

export const utxo = (addresses: Address[], context?: InteractionContext): Promise<Utxo> =>
  Query<
    Ogmios['Query'],
    Ogmios['QueryResponse[utxo]'],
    Utxo
  >({
    methodName: 'Query',
    args: {
      query: Array.isArray(addresses) && addresses.length > 0 && addresses[0] !== null
        ? { utxo: addresses }
        : 'utxo'
    }
  }, {
    handler: (response, resolve, reject) => {
      if (response.result === 'QueryUnavailableInCurrentEra') {
        return reject(new QueryUnavailableInCurrentEraError('utxo'))
      } else if (isEraMismatch(response.result)) {
        const { eraMismatch } = response.result
        const { ledgerEra, queryEra } = eraMismatch
        return reject(new EraMismatchError(queryEra, ledgerEra))
      } else if (isArrayOfUtxo(response.result)) {
        return resolve(response.result)
      } else {
        return reject(new UnknownResultError(response.result))
      }
    }
  }, context)
