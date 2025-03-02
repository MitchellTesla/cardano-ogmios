import { CustomError } from 'ts-custom-error'
import {
  AddressAttributesTooLarge,
  AlreadyDelegating,
  BadInputs,
  CollateralHasNonAdaAssets,
  CollateralIsScript,
  CollateralTooSmall,
  CollectErrors,
  DatumsMismatch,
  DelegateNotRegistered,
  DuplicateGenesisVrf,
  ExecutionUnitsTooLarge,
  ExpiredUtxo,
  ExtraDataMismatch,
  FeeTooSmall,
  InsufficientFundsForMir,
  InsufficientGenesisSignatures,
  InvalidMetadata,
  InvalidWitnesses,
  MirNegativeTransferNotCurrentlyAllowed,
  MirProducesNegativeUpdate,
  MirTransferNotCurrentlyAllowed,
  MissingAtLeastOneInputUtxo,
  MissingCollateralInputs,
  MissingDatumHashesForInputs,
  MissingRequiredSignatures,
  MissingScriptWitnesses,
  MissingTxMetadata,
  MissingTxMetadataHash,
  MissingVkWitnesses,
  NetworkMismatch,
  NonGenesisVoters,
  OutputTooSmall,
  OutsideForecast,
  OutsideOfValidityInterval,
  PoolCostTooSmall,
  ProtocolVersionCannotFollow,
  RewardAccountNotEmpty,
  RewardAccountNotExisting,
  ScriptWitnessNotValidating,
  StakeKeyAlreadyRegistered,
  StakeKeyNotRegistered,
  StakePoolNotRegistered,
  SubmitFail,
  TooLateForMir,
  TooManyAssetsInOutput,
  TooManyCollateralInputs,
  TriesToForgeAda,
  TxMetadataHashMismatch,
  TxTooLarge,
  TxValidationError,
  UnknownGenesisKey,
  UnknownOrIncompleteWithdrawals,
  UnredeemableScripts,
  UpdateWrongEpoch,
  UtxoValidationError,
  ValidationTagMismatch,
  ValueNotConserved,
  WrongCertificateType,
  WrongPoolCertificate,
  WrongRetirementEpoch
} from '@cardano-ogmios/schema'

type SubmitTxErrorShelley =
  InvalidWitnesses
  | MissingVkWitnesses
  | MissingScriptWitnesses
  | ScriptWitnessNotValidating
  | InsufficientGenesisSignatures
  | MissingTxMetadata
  | MissingTxMetadataHash
  | TxMetadataHashMismatch
  | BadInputs
  | ExpiredUtxo
  | TxTooLarge
  | MissingAtLeastOneInputUtxo
  | InvalidMetadata
  | FeeTooSmall
  | ValueNotConserved
  | NetworkMismatch
  | OutputTooSmall
  | AddressAttributesTooLarge
  | DelegateNotRegistered
  | UnknownOrIncompleteWithdrawals
  | StakePoolNotRegistered
  | WrongRetirementEpoch
  | WrongPoolCertificate
  | StakeKeyAlreadyRegistered
  | PoolCostTooSmall
  | StakeKeyNotRegistered
  | RewardAccountNotExisting
  | RewardAccountNotEmpty
  | WrongCertificateType
  | UnknownGenesisKey
  | AlreadyDelegating
  | InsufficientFundsForMir
  | TooLateForMir
  | MirTransferNotCurrentlyAllowed
  | MirNegativeTransferNotCurrentlyAllowed
  | MirProducesNegativeUpdate
  | DuplicateGenesisVrf
  | NonGenesisVoters
  | UpdateWrongEpoch
  | ProtocolVersionCannotFollow
  | OutsideOfValidityInterval
  | TriesToForgeAda
  | TooManyAssetsInOutput
  | UnredeemableScripts
  | DatumsMismatch
  | ExtraDataMismatch
  | MissingRequiredSignatures
  | MissingDatumHashesForInputs
  | MissingCollateralInputs
  | CollateralTooSmall
  | CollateralIsScript
  | CollateralHasNonAdaAssets
  | TooManyCollateralInputs
  | ExecutionUnitsTooLarge
  | OutsideForecast
  | ValidationTagMismatch
  | CollectErrors

export const errors = {
  byron: {
    UtxoValidation: {
      assert: (item: SubmitFail['SubmitFail']): item is UtxoValidationError =>
        (item as UtxoValidationError).utxoValidationError !== undefined,
      Error: class UtxoValidationErrorClass extends CustomError {
        public constructor (rawError: UtxoValidationError) {
          super()
          this.message = JSON.stringify(rawError.utxoValidationError, null, 2)
        }
      }
    },
    TxValidation: {
      assert: (item: SubmitFail['SubmitFail']): item is TxValidationError =>
        (item as TxValidationError).txValidationError !== undefined,
      Error: class TxValidationErrorClass extends CustomError {
        public constructor (rawError: TxValidationError) {
          super()
          this.message = JSON.stringify(rawError.txValidationError, null, 2)
        }
      }
    }
  },
  shelley: {
    InvalidWitnesses: {
      assert: (item: SubmitTxErrorShelley): item is InvalidWitnesses =>
        (item as InvalidWitnesses).invalidWitnesses !== undefined,
      Error: class InvalidWitnessesError extends CustomError {
        public constructor (rawError: InvalidWitnesses) {
          super()
          this.message = JSON.stringify(rawError.invalidWitnesses, null, 2)
        }
      }
    },
    MissingVkWitnesses: {
      assert: (item: SubmitTxErrorShelley): item is MissingVkWitnesses =>
        (item as MissingVkWitnesses).missingVkWitnesses !== undefined,
      Error: class MissingVkWitnessesError extends CustomError {
        public constructor (rawError: MissingVkWitnesses) {
          super()
          this.message = JSON.stringify(rawError.missingVkWitnesses, null, 2)
        }
      }
    },
    MissingScriptWitnesses: {
      assert: (item: SubmitTxErrorShelley): item is MissingScriptWitnesses =>
        (item as MissingScriptWitnesses).missingScriptWitnesses !== undefined,
      Error: class MissingScriptWitnessesError extends CustomError {
        public constructor (rawError: MissingScriptWitnesses) {
          super()
          this.message = JSON.stringify(rawError.missingScriptWitnesses, null, 2)
        }
      }
    },
    ScriptWitnessNotValidating: {
      assert: (item: SubmitTxErrorShelley): item is ScriptWitnessNotValidating =>
        (item as ScriptWitnessNotValidating).scriptWitnessNotValidating !== undefined,
      Error: class ScriptWitnessNotValidatingError extends CustomError {
        public constructor (rawError: ScriptWitnessNotValidating) {
          super()
          this.message = JSON.stringify(rawError.scriptWitnessNotValidating, null, 2)
        }
      }
    },
    InsufficientGenesisSignatures: {
      assert: (item: SubmitTxErrorShelley): item is InsufficientGenesisSignatures =>
        (item as InsufficientGenesisSignatures).insufficientGenesisSignatures !== undefined,
      Error: class InsufficientGenesisSignaturesError extends CustomError {
        public constructor (rawError: InsufficientGenesisSignatures) {
          super()
          this.message = JSON.stringify(rawError.insufficientGenesisSignatures, null, 2)
        }
      }
    },
    MissingTxMetadata: {
      assert: (item: SubmitTxErrorShelley): item is MissingTxMetadata =>
        (item as MissingTxMetadata).missingTxMetadata !== undefined,
      Error: class MissingTxMetadataError extends CustomError {
        public constructor (rawError: MissingTxMetadata) {
          super()
          this.message = JSON.stringify(rawError.missingTxMetadata, null, 2)
        }
      }
    },
    MissingTxMetadataHash: {
      assert: (item: SubmitTxErrorShelley): item is MissingTxMetadataHash =>
        (item as MissingTxMetadataHash).missingTxMetadataHash !== undefined,
      Error: class MissingTxMetadataHashError extends CustomError {
        public constructor (rawError: MissingTxMetadataHash) {
          super()
          this.message = JSON.stringify(rawError.missingTxMetadataHash, null, 2)
        }
      }
    },
    TxMetadataHashMismatch: {
      assert: (item: SubmitTxErrorShelley): item is TxMetadataHashMismatch =>
        (item as TxMetadataHashMismatch).txMetadataHashMismatch !== undefined,
      Error: class TxMetadataHashMismatchError extends CustomError {
        public constructor (rawError: TxMetadataHashMismatch) {
          super()
          this.message = JSON.stringify(rawError.txMetadataHashMismatch, null, 2)
        }
      }
    },
    BadInputs: {
      assert: (item: SubmitTxErrorShelley): item is BadInputs =>
        (item as BadInputs).badInputs !== undefined,
      Error: class BadInputsError extends CustomError {
        public constructor (rawError: BadInputs) {
          super()
          this.message = JSON.stringify(rawError.badInputs, null, 2)
        }
      }
    },
    ExpiredUtxo: {
      assert: (item: SubmitTxErrorShelley): item is ExpiredUtxo =>
        (item as ExpiredUtxo).expiredUtxo !== undefined,
      Error: class ExpiredUtxoError extends CustomError {
        public constructor (rawError: ExpiredUtxo) {
          super()
          this.message = JSON.stringify(rawError.expiredUtxo, null, 2)
        }
      }
    },
    TxTooLarge: {
      assert: (item: SubmitTxErrorShelley): item is TxTooLarge =>
        (item as TxTooLarge).txTooLarge !== undefined,
      Error: class TxTooLargeError extends CustomError {
        public constructor (rawError: TxTooLarge) {
          super()
          this.message = JSON.stringify(rawError.txTooLarge, null, 2)
        }
      }
    },
    MissingAtLeastOneInputUtxo: {
      assert: (item: SubmitTxErrorShelley): item is MissingAtLeastOneInputUtxo =>
        (item as MissingAtLeastOneInputUtxo) === 'missingAtLeastOneInputUtxo',
      Error: class MissingAtLeastOneInputUtxoError extends CustomError {
        public constructor (rawError: MissingAtLeastOneInputUtxo) {
          super()
          this.message = JSON.stringify(rawError, null, 2)
        }
      }
    },
    InvalidMetadata: {
      assert: (item: SubmitTxErrorShelley): item is InvalidMetadata =>
        (item as InvalidMetadata) === 'invalidMetadata',
      Error: class InvalidMetadataError extends CustomError {
        public constructor (rawError: InvalidMetadata) {
          super()
          this.message = JSON.stringify(rawError, null, 2)
        }
      }
    },
    FeeTooSmall: {
      assert: (item: SubmitTxErrorShelley): item is FeeTooSmall =>
        (item as FeeTooSmall).feeTooSmall !== undefined,
      Error: class FeeTooSmallError extends CustomError {
        public constructor (rawError: FeeTooSmall) {
          super()
          this.message = JSON.stringify(rawError.feeTooSmall, null, 2)
        }
      }
    },
    ValueNotConserved: {
      assert: (item: SubmitTxErrorShelley): item is ValueNotConserved =>
        (item as ValueNotConserved).valueNotConserved !== undefined,
      Error: class ValueNotConservedError extends CustomError {
        public constructor (rawError: ValueNotConserved) {
          super()
          this.message = JSON.stringify(rawError.valueNotConserved, null, 2)
        }
      }
    },
    NetworkMismatch: {
      assert: (item: SubmitTxErrorShelley): item is NetworkMismatch =>
        (item as NetworkMismatch).networkMismatch !== undefined,
      Error: class NetworkMismatchError extends CustomError {
        public constructor (rawError: NetworkMismatch) {
          super()
          this.message = JSON.stringify(rawError.networkMismatch, null, 2)
        }
      }
    },
    OutputTooSmall: {
      assert: (item: SubmitTxErrorShelley): item is OutputTooSmall =>
        (item as OutputTooSmall).outputTooSmall !== undefined,
      Error: class OutputTooSmallError extends CustomError {
        public constructor (rawError: OutputTooSmall) {
          super()
          this.message = JSON.stringify(rawError.outputTooSmall, null, 2)
        }
      }
    },
    AddressAttributesTooLarge: {
      assert: (item: SubmitTxErrorShelley): item is AddressAttributesTooLarge =>
        (item as AddressAttributesTooLarge).addressAttributesTooLarge !== undefined,
      Error: class AddressAttributesTooLargeError extends CustomError {
        public constructor (rawError: AddressAttributesTooLarge) {
          super()
          this.message = JSON.stringify(rawError.addressAttributesTooLarge, null, 2)
        }
      }
    },
    DelegateNotRegistered: {
      assert: (item: SubmitTxErrorShelley): item is DelegateNotRegistered =>
        (item as DelegateNotRegistered).delegateNotRegistered !== undefined,
      Error: class DelegateNotRegisteredError extends CustomError {
        public constructor (rawError: DelegateNotRegistered) {
          super()
          this.message = JSON.stringify(rawError.delegateNotRegistered, null, 2)
        }
      }
    },
    UnknownOrIncompleteWithdrawals: {
      assert: (item: SubmitTxErrorShelley): item is UnknownOrIncompleteWithdrawals =>
        (item as UnknownOrIncompleteWithdrawals).unknownOrIncompleteWithdrawals !== undefined,
      Error: class UnknownOrIncompleteWithdrawalsError extends CustomError {
        public constructor (rawError: UnknownOrIncompleteWithdrawals) {
          super()
          this.message = JSON.stringify(rawError.unknownOrIncompleteWithdrawals, null, 2)
        }
      }
    },
    StakePoolNotRegistered: {
      assert: (item: SubmitTxErrorShelley): item is StakePoolNotRegistered =>
        (item as StakePoolNotRegistered).stakePoolNotRegistered !== undefined,
      Error: class StakePoolNotRegisteredError extends CustomError {
        public constructor (rawError: StakePoolNotRegistered) {
          super()
          this.message = JSON.stringify(rawError.stakePoolNotRegistered, null, 2)
        }
      }
    },
    WrongRetirementEpoch: {
      assert: (item: SubmitTxErrorShelley): item is WrongRetirementEpoch =>
        (item as WrongRetirementEpoch).wrongRetirementEpoch !== undefined,
      Error: class WrongRetirementEpochError extends CustomError {
        public constructor (rawError: WrongRetirementEpoch) {
          super()
          this.message = JSON.stringify(rawError.wrongRetirementEpoch, null, 2)
        }
      }
    },
    WrongPoolCertificate: {
      assert: (item: SubmitTxErrorShelley): item is WrongPoolCertificate =>
        (item as WrongPoolCertificate).wrongPoolCertificate !== undefined,
      Error: class WrongPoolCertificateError extends CustomError {
        public constructor (rawError: WrongPoolCertificate) {
          super()
          this.message = JSON.stringify(rawError.wrongPoolCertificate, null, 2)
        }
      }
    },
    StakeKeyAlreadyRegistered: {
      assert: (item: SubmitTxErrorShelley): item is StakeKeyAlreadyRegistered =>
        (item as StakeKeyAlreadyRegistered).stakeKeyAlreadyRegistered !== undefined,
      Error: class StakeKeyAlreadyRegisteredError extends CustomError {
        public constructor (rawError: StakeKeyAlreadyRegistered) {
          super()
          this.message = JSON.stringify(rawError.stakeKeyAlreadyRegistered, null, 2)
        }
      }
    },
    PoolCostTooSmall: {
      assert: (item: SubmitTxErrorShelley): item is PoolCostTooSmall =>
        (item as PoolCostTooSmall).poolCostTooSmall !== undefined,
      Error: class PoolCostTooSmallError extends CustomError {
        public constructor (rawError: PoolCostTooSmall) {
          super()
          this.message = JSON.stringify(rawError.poolCostTooSmall, null, 2)
        }
      }
    },
    StakeKeyNotRegistered: {
      assert: (item: SubmitTxErrorShelley): item is StakeKeyNotRegistered =>
        (item as StakeKeyNotRegistered).stakeKeyNotRegistered !== undefined,
      Error: class StakeKeyNotRegisteredError extends CustomError {
        public constructor (rawError: StakeKeyNotRegistered) {
          super()
          this.message = JSON.stringify(rawError.stakeKeyNotRegistered, null, 2)
        }
      }
    },
    RewardAccountNotExisting: {
      assert: (item: SubmitTxErrorShelley): item is RewardAccountNotExisting =>
        (item as RewardAccountNotExisting) === 'rewardAccountNotExisting',
      Error: class RewardAccountNotExistingError extends CustomError {
        public constructor (rawError: RewardAccountNotExisting) {
          super()
          this.message = JSON.stringify(rawError, null, 2)
        }
      }
    },
    RewardAccountNotEmpty: {
      assert: (item: SubmitTxErrorShelley): item is RewardAccountNotEmpty =>
        (item as RewardAccountNotEmpty).rewardAccountNotEmpty !== undefined,
      Error: class RewardAccountNotEmptyError extends CustomError {
        public constructor (rawError: RewardAccountNotEmpty) {
          super()
          this.message = JSON.stringify(rawError.rewardAccountNotEmpty, null, 2)
        }
      }
    },
    WrongCertificateType: {
      assert: (item: SubmitTxErrorShelley): item is WrongCertificateType =>
        (item as WrongCertificateType) === 'wrongCertificateType',
      Error: class WrongCertificateTypeError extends CustomError {
        public constructor (rawError: WrongCertificateType) {
          super()
          this.message = JSON.stringify(rawError, null, 2)
        }
      }
    },
    UnknownGenesisKey: {
      assert: (item: SubmitTxErrorShelley): item is UnknownGenesisKey =>
        (item as UnknownGenesisKey).unknownGenesisKey !== undefined,
      Error: class UnknownGenesisKeyError extends CustomError {
        public constructor (rawError: UnknownGenesisKey) {
          super()
          this.message = JSON.stringify(rawError.unknownGenesisKey, null, 2)
        }
      }
    },
    AlreadyDelegating: {
      assert: (item: SubmitTxErrorShelley): item is AlreadyDelegating =>
        (item as AlreadyDelegating).alreadyDelegating !== undefined,
      Error: class AlreadyDelegatingError extends CustomError {
        public constructor (rawError: AlreadyDelegating) {
          super()
          this.message = JSON.stringify(rawError.alreadyDelegating, null, 2)
        }
      }
    },
    InsufficientFundsForMir: {
      assert: (item: SubmitTxErrorShelley): item is InsufficientFundsForMir =>
        (item as InsufficientFundsForMir).insufficientFundsForMir !== undefined,
      Error: class InsufficientFundsForMirError extends CustomError {
        public constructor (rawError: InsufficientFundsForMir) {
          super()
          this.message = JSON.stringify(rawError.insufficientFundsForMir, null, 2)
        }
      }
    },
    TooLateForMir: {
      assert: (item: SubmitTxErrorShelley): item is TooLateForMir =>
        (item as TooLateForMir).tooLateForMir !== undefined,
      Error: class TooLateForMirError extends CustomError {
        public constructor (rawError: TooLateForMir) {
          super()
          this.message = JSON.stringify(rawError.tooLateForMir, null, 2)
        }
      }
    },
    MirTransferNotCurrentlyAllowed: {
      assert: (item: SubmitTxErrorShelley): item is MirTransferNotCurrentlyAllowed =>
        (item as MirTransferNotCurrentlyAllowed) === 'mirTransferNotCurrentlyAllowed',
      Error: class MirTransferNotCurrentlyAllowedError extends CustomError {
        public constructor (rawError: MirTransferNotCurrentlyAllowed) {
          super()
          this.message = JSON.stringify(rawError, null, 2)
        }
      }
    },
    MirNegativeTransferNotCurrentlyAllowed: {
      assert: (item: SubmitTxErrorShelley): item is MirNegativeTransferNotCurrentlyAllowed =>
        (item as MirNegativeTransferNotCurrentlyAllowed) === 'mirNegativeTransferNotCurrentlyAllowed',
      Error: class MirNegativeTransferNotCurrentlyAllowedError extends CustomError {
        public constructor (rawError: MirNegativeTransferNotCurrentlyAllowed) {
          super()
          this.message = JSON.stringify(rawError, null, 2)
        }
      }
    },
    MirProducesNegativeUpdate: {
      assert: (item: SubmitTxErrorShelley): item is MirProducesNegativeUpdate =>
        (item as MirProducesNegativeUpdate) === 'mirProducesNegativeUpdate',
      Error: class MirProducesNegativeUpdateError extends CustomError {
        public constructor (rawError: MirProducesNegativeUpdate) {
          super()
          this.message = JSON.stringify(rawError, null, 2)
        }
      }
    },
    DuplicateGenesisVrf: {
      assert: (item: SubmitTxErrorShelley): item is DuplicateGenesisVrf =>
        (item as DuplicateGenesisVrf).duplicateGenesisVrf !== undefined,
      Error: class DuplicateGenesisVrfError extends CustomError {
        public constructor (rawError: DuplicateGenesisVrf) {
          super()
          this.message = JSON.stringify(rawError.duplicateGenesisVrf, null, 2)
        }
      }
    },
    NonGenesisVoters: {
      assert: (item: SubmitTxErrorShelley): item is NonGenesisVoters =>
        (item as NonGenesisVoters).nonGenesisVoters !== undefined,
      Error: class NonGenesisVotersError extends CustomError {
        public constructor (rawError: NonGenesisVoters) {
          super()
          this.message = JSON.stringify(rawError.nonGenesisVoters, null, 2)
        }
      }
    },
    UpdateWrongEpoch: {
      assert: (item: SubmitTxErrorShelley): item is UpdateWrongEpoch =>
        (item as UpdateWrongEpoch).updateWrongEpoch !== undefined,
      Error: class UpdateWrongEpochError extends CustomError {
        public constructor (rawError: UpdateWrongEpoch) {
          super()
          this.message = JSON.stringify(rawError.updateWrongEpoch, null, 2)
        }
      }
    },
    ProtocolVersionCannotFollow: {
      assert: (item: SubmitTxErrorShelley): item is ProtocolVersionCannotFollow =>
        (item as ProtocolVersionCannotFollow).protocolVersionCannotFollow !== undefined,
      Error: class ProtocolVersionCannotFollowError extends CustomError {
        public constructor (rawError: ProtocolVersionCannotFollow) {
          super()
          this.message = JSON.stringify(rawError.protocolVersionCannotFollow, null, 2)
        }
      }
    },
    OutsideOfValidityInterval: {
      assert: (item: SubmitTxErrorShelley): item is OutsideOfValidityInterval =>
        (item as OutsideOfValidityInterval).outsideOfValidityInterval !== undefined,
      Error: class OutsideOfValidityIntervalError extends CustomError {
        public constructor (rawError: OutsideOfValidityInterval) {
          super()
          this.message = JSON.stringify(rawError.outsideOfValidityInterval, null, 2)
        }
      }
    },
    TriesToForgeAda: {
      assert: (item: SubmitTxErrorShelley): item is TriesToForgeAda =>
        (item as TriesToForgeAda) === 'triesToForgeAda',
      Error: class TriesToForgeAdaError extends CustomError {
        public constructor (rawError: TriesToForgeAda) {
          super()
          this.message = JSON.stringify(rawError, null, 2)
        }
      }
    },
    TooManyAssetsInOutput: {
      assert: (item: SubmitTxErrorShelley): item is TooManyAssetsInOutput =>
        (item as TooManyAssetsInOutput).tooManyAssetsInOutput !== undefined,
      Error: class TooManyAssetsInOutputError extends CustomError {
        public constructor (rawError: TooManyAssetsInOutput) {
          super()
          this.message = JSON.stringify(rawError.tooManyAssetsInOutput, null, 2)
        }
      }
    },
    UnredeemableScripts: {
      assert: (item: SubmitTxErrorShelley): item is UnredeemableScripts =>
        (item as UnredeemableScripts).unredeemableScripts !== undefined,
      Error: class UnredeemableScriptsError extends CustomError {
        public constructor (rawError: UnredeemableScripts) {
          super()
          this.message = JSON.stringify(rawError.unredeemableScripts, null, 2)
        }
      }
    },
    DatumsMismatch: {
      assert: (item: SubmitTxErrorShelley): item is DatumsMismatch =>
        (item as DatumsMismatch).datumsMismatch !== undefined,
      Error: class DatumsMismatchError extends CustomError {
        public constructor (rawError: DatumsMismatch) {
          super()
          this.message = JSON.stringify(rawError.datumsMismatch, null, 2)
        }
      }
    },
    ExtraDataMismatch: {
      assert: (item: SubmitTxErrorShelley): item is ExtraDataMismatch =>
        (item as ExtraDataMismatch).extraDataMismatch !== undefined,
      Error: class ExtraDataMismatchError extends CustomError {
        public constructor (rawError: ExtraDataMismatch) {
          super()
          this.message = JSON.stringify(rawError.extraDataMismatch, null, 2)
        }
      }
    },
    MissingRequiredSignatures: {
      assert: (item: SubmitTxErrorShelley): item is MissingRequiredSignatures =>
        (item as MissingRequiredSignatures).missingRequiredSignatures !== undefined,
      Error: class MissingRequiredSignaturesError extends CustomError {
        public constructor (rawError: MissingRequiredSignatures) {
          super()
          this.message = JSON.stringify(rawError.missingRequiredSignatures, null, 2)
        }
      }
    },
    MissingDatumHashesForInputs: {
      assert: (item: SubmitTxErrorShelley): item is MissingDatumHashesForInputs =>
        (item as MissingDatumHashesForInputs).missingDatumHashesForInputs !== undefined,
      Error: class MissingDatumHashesForInputsError extends CustomError {
        public constructor (rawError: MissingDatumHashesForInputs) {
          super()
          this.message = JSON.stringify(rawError.missingDatumHashesForInputs, null, 2)
        }
      }
    },
    MissingCollateralInputs: {
      assert: (item: SubmitTxErrorShelley): item is MissingCollateralInputs =>
        (item as MissingCollateralInputs) === 'missingCollateralInputs',
      Error: class MissingCollateralInputsError extends CustomError {
        public constructor (rawError: MissingCollateralInputs) {
          super()
          this.message = JSON.stringify(rawError, null, 2)
        }
      }
    },
    CollateralTooSmall: {
      assert: (item: SubmitTxErrorShelley): item is CollateralTooSmall =>
        (item as CollateralTooSmall).collateralTooSmall !== undefined,
      Error: class CollateralTooSmallError extends CustomError {
        public constructor (rawError: CollateralTooSmall) {
          super()
          this.message = JSON.stringify(rawError.collateralTooSmall, null, 2)
        }
      }
    },
    CollateralIsScript: {
      assert: (item: SubmitTxErrorShelley): item is CollateralIsScript =>
        (item as CollateralIsScript).collateralIsScript !== undefined,
      Error: class CollateralIsScriptError extends CustomError {
        public constructor (rawError: CollateralIsScript) {
          super()
          this.message = JSON.stringify(rawError.collateralIsScript, null, 2)
        }
      }
    },
    CollateralHasNonAdaAssets: {
      assert: (item: SubmitTxErrorShelley): item is CollateralHasNonAdaAssets =>
        (item as CollateralHasNonAdaAssets).collateralHasNonAdaAssets !== undefined,
      Error: class CollateralHasNonAdaAssetsError extends CustomError {
        public constructor (rawError: CollateralHasNonAdaAssets) {
          super()
          this.message = JSON.stringify(rawError.collateralHasNonAdaAssets, null, 2)
        }
      }
    },
    TooManyCollateralInputs: {
      assert: (item: SubmitTxErrorShelley): item is TooManyCollateralInputs =>
        (item as TooManyCollateralInputs).tooManyCollateralInputs !== undefined,
      Error: class TooManyCollateralInputsError extends CustomError {
        public constructor (rawError: TooManyCollateralInputs) {
          super()
          this.message = JSON.stringify(rawError.tooManyCollateralInputs, null, 2)
        }
      }
    },
    ExecutionUnitsTooLarge: {
      assert: (item: SubmitTxErrorShelley): item is ExecutionUnitsTooLarge =>
        (item as ExecutionUnitsTooLarge).executionUnitsTooLarge !== undefined,
      Error: class ExecutionUnitsTooLargeError extends CustomError {
        public constructor (rawError: ExecutionUnitsTooLarge) {
          super()
          this.message = JSON.stringify(rawError.executionUnitsTooLarge, null, 2)
        }
      }
    },
    OutsideForecast: {
      assert: (item: SubmitTxErrorShelley): item is OutsideForecast =>
        (item as OutsideForecast).outsideForecast !== undefined,
      Error: class OutsideForecastError extends CustomError {
        public constructor (rawError: OutsideForecast) {
          super()
          this.message = JSON.stringify(rawError.outsideForecast, null, 2)
        }
      }
    },
    ValidationTagMismatch: {
      assert: (item: SubmitTxErrorShelley): item is ValidationTagMismatch =>
        (item as ValidationTagMismatch) === 'validationTagMismatch',
      Error: class ValidationTagMismatchError extends CustomError {
        public constructor (rawError: ValidationTagMismatch) {
          super()
          this.message = JSON.stringify(rawError, null, 2)
        }
      }
    },
    CollectErrors: {
      assert: (item: SubmitTxErrorShelley): item is CollectErrors =>
        (item as CollectErrors).collectErrors !== undefined,
      Error: class CollectErrorsError extends CustomError {
        public constructor (rawError: CollectErrors) {
          super()
          this.message = JSON.stringify(rawError.collectErrors, null, 2)
        }
      }
    }
  }
}
