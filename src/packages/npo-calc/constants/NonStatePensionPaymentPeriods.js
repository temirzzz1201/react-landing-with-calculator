/**
 * Список периодов выплаты Негосударственной пенсии
 */
const NonStatePensionPaymentPeriods = {
  /** 5 лет */
  Five: Object.freeze({
    id: '2a109a8d-3156-43c2-9938-b31b7e553a08',
    title: 'В течение 5 лет',
    value: 5,
  }),
  /** 10 Лет */
  Ten: Object.freeze({
    id: '1e04f128-7c61-4fd2-926a-3e4952f8e5e8',
    title: 'В течение 10 лет',
    value: 10,
  }),
  /** Пожизненно */
  AllTime: Object.freeze({
    id: '7e180897-10d4-4656-afa6-b0263b97858c',
    title: 'Пожизненно',
  }),
}

export default Object.freeze(NonStatePensionPaymentPeriods);