/**
 * Период накопления (кроме Единовременных!!!)
 * Расчет прогресии
 * [Расчеты - формулы] A13 : B17
 */
export default class AccumulationPeriod {

  /** Доходность ПР */
  get prProfitability() {
    return this.inputDataDI.prProfitability;
  }

  /** Кол-во взносов в год */
  get contributionsPerYear() {
    return this.contributionsDI.contributionsPerYear;
  }
  
  /** Кол-во периодов взносов */
  get countContibutionPeriod() {
    return this.contributionsDI.countContibutionPeriod;
  }

  /**
   * n
   * [Расчеты - формулы] B14
   * =((1+B3)^((B10)/B8))
   */
  get n() {
    return Math.pow(1 + this.prProfitability, this.countContibutionPeriod / this.contributionsPerYear)
  }

  /**
   * n+1
   * [Расчеты - формулы] B15
   * =((1+B3)^((B10+1)/B8))
   */
  get n1() {
    return Math.pow(1 + this.prProfitability, (this.countContibutionPeriod + 1) / this.contributionsPerYear)
  }

  /**
   * q
   * [Расчеты - формулы] B16
   * =B15/B14
   */
  get q() {
    return this.n1 / this.n;
  }

  /**
   * Sn
   * [Расчеты - формулы] B17
   * =ЕСЛИ(B3=0;B10;(((1+B3)^(1/B8))*(1-B16^(B10)))/(1-B16))
   */
  get Sn() {
    if (this.prProfitability === 0) {
      return this.countContibutionPeriod;
    }
    const a = Math.pow(1 + this.prProfitability, 1 / this.contributionsPerYear);
    const b = Math.pow(this.q, this.countContibutionPeriod)
    return ((a * (1 - b)) / (1 - this.q));
  }
}