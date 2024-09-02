export default class Payouts {

  get nonStatePensionPaymentsPeriodicity() {
    return this.inputDataDI.nonStatePensionPaymentsPeriodicity;
  }
  
  get nonStatePensionPaymentPeriod() {
    return this.inputDataDI.nonStatePensionPaymentPeriod;
  }

  /**
   * Кол-во выплат в год работника
   * [Расчеты - формулы] B20
   * =ВПР('Калькулятор для маркетинга'!C96;$G$8:$J$11;4;0)
   */
  get employeePayoutsPerYear() {
    return this.nonStatePensionPaymentsPeriodicity.value;
  }
  
  /**
   * Кол-во выплат в год работодателя
   * [Расчеты - формулы] C20
   * =ВПР('Калькулятор для маркетинга'!C96;$G$8:$J$11;4;0)
   */
  get employerPayoutsPerYear() {
    return this.nonStatePensionPaymentsPeriodicity.value;
  }

  /**
   * Кол-во периодов выплат работника
   * [Расчеты - формулы] B21
   * =ВПР('Калькулятор для маркетинга'!C25;$G$18:$I$20;3;0)
   */
  get employeePayoutsPeriods() {
    return this.getPeriodPayoutsCount();
  }
  
  /**
   * Кол-во периодов выплат работодателя
   * [Расчеты - формулы] C21
   * ='Срок дожития'!L14
   */
  get employerPayoutsPeriods() {
    return this.lifeTimeDI.posthumousLifeTimePeriod.monthsInRetirement;
  }

  getPeriodPayoutsCount() {
    if (this.nonStatePensionPaymentPeriod.value) {
      return this.employeePayoutsPerYear * this.nonStatePensionPaymentPeriod.value;
    }
    return this.lifeTimeDI.employeeLifeTimePeriod.monthsInRetirement;
  }

}