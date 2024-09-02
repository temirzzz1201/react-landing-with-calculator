/**
 * Период выплат
 * [Расчеты - формулы] A24 : C29
 */
export default class PayoutPeriod {

  /**
   * АНД работника за расчетный год
   * [Расчеты - формулы] B4
   */
  get employeeBillingYearAND() {
    return this.payoutsDI.inputDataDI.employeeBillingYearAND;
  }
  
  /**
   * АНД работодателя за расчетный год
   * [Расчеты - формулы] B5
   */
  get employerBillingYearAND() {
    return this.payoutsDI.inputDataDI.employerBillingYearAND;
  }
  
  /**
   * Кол-во выплат в год работника
   * [Расчеты - формулы] B20
   */
  get employeePayoutsPerYear() {
    return this.payoutsDI.employeePayoutsPerYear;
  }

  /**
   * Кол-во выплат в год работодателя
   * [Расчеты - формулы] C20
   */
  get employerPayoutsPerYear() {
    return this.payoutsDI.employerPayoutsPerYear;
  }
  
  /**
   * Кол-во периодов выплат работника
   * [Расчеты - формулы] B21
   */
  get employeePayoutsPeriods() {
    return this.payoutsDI.employeePayoutsPeriods;
  }
  
  /**
   * Кол-во периодов выплат работодателя
   * [Расчеты - формулы] C21
   */
  get employerPayoutsPeriods() {
    return this.payoutsDI.employerPayoutsPeriods;
  }

  /**
   * n
   * [Расчеты - формулы] B25;C25
   * B25 =1/((1+$B$4)^(B21/B20))
   * C25 =1/((1+$B$5)^(C21/C20))
   */
  get n() {
    return {
      /** Расчет прогресии работника */
      employee: 1 / Math.pow(1 + this.employeeBillingYearAND, this.employeePayoutsPeriods / this.employeePayoutsPerYear),
      /** Расчет прогресии работодателя */
      employer: 1 / Math.pow(1 + this.employerBillingYearAND, this.employerPayoutsPeriods / this.employerPayoutsPerYear),
    }
  }

  /**
   * n+1
   * [Расчеты - формулы] B26;C26
   * B26 =1/((1+$B$4)^((B21+1)/B20))
   * C26 =1/((1+$B$5)^((C21+1)/C20))
   */
  get n1() {
    return {
      /** Расчет прогресии работника */
      employee: 1 / Math.pow(1 + this.employeeBillingYearAND, (this.employeePayoutsPeriods + 1) / this.employeePayoutsPerYear),
      /** Расчет прогресии работодателя */
      employer: 1 / Math.pow(1 + this.employerBillingYearAND, (this.employerPayoutsPeriods + 1) / this.employerPayoutsPerYear),
    }
  }

  /**
   * q
   * [Расчеты - формулы] B27;C27
   * B27 =B26/B25
   * C27 =C26/C25
   */
  get q() {
    return {
      /** Расчет прогресии работника */
      employee: this.n1.employee / this.n.employee,
      /** Расчет прогресии работодателя */
      employer: this.n1.employer / this.n.employer,
    }
  }

  /**
   * S(n-1)
   * [Расчеты - формулы] B28;C28
   * B28 =((1/((1+$B$4)^(1/B20)))*(1-B27^(B21-1)))/(1-B27)
   * C28 =((1/((1+$B$5)^(1/C20)))*(1-C27^(C21-1)))/(1-C27)
   */
  get SnSub1() {
    return {
      /** Расчет прогресии работника */
      employee: this.calculateSnSub1(this.employeeBillingYearAND, this.employeePayoutsPerYear, this.q.employee, this.employeePayoutsPeriods),
      /** Расчет прогресии работодателя */
      employer: this.calculateSnSub1(this.employerBillingYearAND, this.employerPayoutsPerYear, this.q.employer, this.employerPayoutsPeriods),
    }
  }
  
  /**
   * S(n-1)+1
   * [Расчеты - формулы] B29;C29
   * B29 =B28+1
   * C29 =C28+1
   */
  get SnSub1Add1() {
    return {
      /** Расчет прогресии работника */
      employee: this.SnSub1.employee + 1,
      /** Расчет прогресии работодателя */
      employer: this.SnSub1.employer + 1,
    }
  }

  /**
   * Формула расчета S(n-1)
   * @param { number } billingYearAND АНД за расчетный год
   * @param { number } payoutsPerYear Кол-во выплат в год
   * @param { number } q Расчет прогресии работника/работодателя
   * @param { number } payoutsPeriods Кол-во периодов выплат
   * @returns { number } результат расчета
   */
  calculateSnSub1(billingYearAND, payoutsPerYear, q, payoutsPeriods) {
    const a = 1 / Math.pow(1 + billingYearAND, 1 / payoutsPerYear);
    const b = 1 - Math.pow(q, payoutsPeriods - 1);
    return (a * b) / (1 - q);
  }
}