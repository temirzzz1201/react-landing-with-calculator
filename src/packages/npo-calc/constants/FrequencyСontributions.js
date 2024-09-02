/**
 * Периодичность внесения взносов
 */
const FrequencyСontributions = {
  /** Единовременно */
  OneTime: Object.freeze({
    id: '33d26e55-526d-4c13-8e36-11a2f2d5d93f',
    title: 'Единовременно',
    value: 1,
  }),
  /** Ежемесячно */
  EveryMonth: Object.freeze({
    id: '37378347-fde5-4fd5-ad1d-70724a397f90',
    title: 'Ежемесячно',
    value: 12,
  }),
  /** Ежеквартально */
  Quarterly: Object.freeze({
    id: '8fa66853-bb65-41ae-a6fe-e4b16f5cd288',
    title: 'Ежеквартально',
    value: 4,
  }),
  /** Раз в пол года */
  HalfYear: Object.freeze({
    id: '2a61b457-14a9-4ab3-a5b6-11d1537e0545',
    title: 'Раз в пол года',
    value: 2,
  }),
  /** Ежегодно */
  EveryYear: Object.freeze({
    id: '90090e6c-ac90-43f9-8e80-971ba0e85927',
    title: 'Ежегодно',
    value: 1,
  }),
};

export default Object.freeze(FrequencyСontributions);