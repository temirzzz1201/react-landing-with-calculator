import FrequencyСontributions from './FrequencyСontributions';
/**
 * Периодичность выплат негосударственной пенсии
 */
const NonStatePensionPaymentsPeriodicity = {
  /** Ежемесячно */
  EveryMonth: FrequencyСontributions.EveryMonth,
  /** Ежеквартально */
  Quarterly: FrequencyСontributions.Quarterly,
  /** Раз в пол года */
  HalfYear: FrequencyСontributions.HalfYear,
  /** Ежегодно */
  EveryYear: FrequencyСontributions.EveryYear,
};

export default Object.freeze(NonStatePensionPaymentsPeriodicity);