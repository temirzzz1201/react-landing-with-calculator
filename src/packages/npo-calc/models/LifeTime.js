import { splitDate, today } from "../utils/Date";
import MortalityTable from './MortalityTable';
// eslint-disable-next-line no-unused-vars
import InputData from "./InputData";

/**
 * Срок дожития
 */
export default class LifeTime {

  maxOrder = 1200;

  calculationLifeTime = {};

  /**
   * @param { InputData } inputDataDI Входные параметры
   */
  constructor() {
    MortalityTable.prototype.inputDataDI = this.inputDataDI;
    /** Таблица смертности */
    this.deaths = new MortalityTable();
    this.calculationLifeTime = this.getCalculationLifeTime();
  }

  updateDeaths() {
    this.deaths = new MortalityTable();
    this.calculationLifeTime = this.getCalculationLifeTime();
  }

  /** Пол */
  get gender() {
    return this.inputDataDI.gender;
  }

  /** Дата рождения */
  get birthday() {
    return splitDate(this.inputDataDI.birthday);
  }

  /** Периодичность выплат негосударственной пенсии */
  get nonStatePensionPayments() {
    return this.inputDataDI.nonStatePensionPaymentsPeriodicity;
  }

  /** Дата выхода на пенсию */
  get retirementDate() {
    return this.inputDataDI.pensionRetirement.retirementDate;
  }

  /** Возраст выхода на пенсию */
  get pensionAge() {
    return this.inputDataDI.pensionAge;
  }

  /** АНД работника за расчетный год */
  get employeeBillingYearAND() {
    return this.inputDataDI.employeeBillingYearAND;
  }

  /** АНД работодателя за расчетный год */
  get employerBillingYearAND() {
    return this.inputDataDI.employerBillingYearAND;
  }

  /**
   * Текущая дата 
   * [Срок дожития] B3
   */
  get today() {
    return splitDate(today());
  }

  /**
   * Значение из таблицы смертности
   * [Срок дожития] B6
   */
  get deathValue() {
    return this.deaths.getDeathsByMonthAndAge(this.pensionAge, 0, this.gender);
  }

  /**
   * Кол-во периодов выплат 
   * [Срок дожития] B8
   */
  get nonStatePensionPaymentsCount() {
    return this.nonStatePensionPayments.value;
  }

  /**
   * Периодов выплат до 100 лет 
   * [Срок дожития] B9
   * =100*B8-B7*B8
   */
  get payoutPeriodsPer100Years() {
    return 100 * this.nonStatePensionPaymentsCount - this.pensionAge * this.nonStatePensionPaymentsCount;
  }

  /**
   * 1/(lx*m)
   * [Срок дожития] B10
   * =1/(B6*B8)
   */
  get deathContributions() {
    return 1 / (this.deathValue * this.nonStatePensionPaymentsCount);
  }

  /**
   * Срок дожития
   * [Срок дожития] B11 : B14
   * =ЕСЛИ(A19=B19;$B$10*СУММ($G$19:$G$1219);0)
   */
  get employeeLifeTimePeriod() {
    const { order, payoutPeriod } = this.calculationLifeTime.values[0];
    /** Срок дожития [Срок дожития] B11 */
    let value = 0;
    /** Лет [Срок дожития] B12 */
    let years = 0;
    /** Месяцев [Срок дожития] B13 */
    let months = 0;
    /** Кол-во месяцев на пенсии [Срок дожития] B14 */
    let monthsInRetirement = 0;
    if (order === payoutPeriod) {
      value = this.deathContributions * this.calculationLifeTime.summary.employeeFactoredDeathSum;
      years = Math.floor(value);
      months = Math.ceil((value - years) * 12);
      monthsInRetirement = years * 12 + months;
    }
    return {
      value,
      years,
      months,
      monthsInRetirement,
    }
  }
  
  /**
   * Срок дожития
   * [Срок дожития] L11 : l15
   * =ЕСЛИ(A19=B19;$B$10*СУММ($K$19:$K$1219);0)+M18
   */
  get posthumousLifeTimePeriod() {
    const { order, payoutPeriod } = this.calculationLifeTime.values[0];
    const { summary } = this.calculationLifeTime;
    /** Срок дожития [Срок дожития] L11 */
    let value = 0;
    /** Лет [Срок дожития] L12 */
    let years = 0;
    /** Месяцев [Срок дожития] L13 */
    let months = 0;
    /** Кол-во месяцев на пенсии [Срок дожития] L14 */
    let monthsInRetirement = 0;
    if (order === payoutPeriod) {
      value = this.deathContributions * summary.employerFactoredDeathSum + summary.posthumousFactorTotal;
      years = Math.floor(value);
      months = Math.ceil((value - years) * 12);
      monthsInRetirement = years * 12 + months;
    }
    return {
      value,
      years,
      months,
      monthsInRetirement,
      /** j max [Срок дожития] L15 */
      jMax: 100 * 12 - (this.pensionAge * 12 + 1),
    }
  }

  /**
   * Возраст
   * Количество лет - =ЕСЛИ(МЕСЯЦ(B3)>МЕСЯЦ(B2);ГОД(B3)-ГОД(B2);ЕСЛИ(МЕСЯЦ(B3)=МЕСЯЦ(B2);ЕСЛИ(ДЕНЬ(B3)>=ДЕНЬ(B2);ГОД(B3)-ГОД(B2);ГОД(B3)-ГОД(B2)-1);ГОД(B3)-ГОД(B2)-1))
   * Количество месяцев - =ЕСЛИ(МЕСЯЦ(B3)>МЕСЯЦ(B2);ЕСЛИ(ДЕНЬ(B3)>=ДЕНЬ(B2);МЕСЯЦ(B3)-МЕСЯЦ(B2);МЕСЯЦ(B3)-МЕСЯЦ(B2)-1);ЕСЛИ(МЕСЯЦ(B3)=МЕСЯЦ(B2);ЕСЛИ(ДЕНЬ(B3)>=ДЕНЬ(B2);0;11);МЕСЯЦ(B3)+12-МЕСЯЦ(B2)))
   */
  get age() {
    return {
      /** Лет (С4) */
      years: this.getAgeYears(),
      /** Месяцев (D4) */
      months: this.getAgeMonths(),
    }
  }

  /**
   * Получение количества полных лет
   * @returns { number } количество полных лет
   */
  getAgeYears() {
    if (this.today.month > this.birthday.month) {
      return this.today.year - this.birthday.year;
    } else if (this.today.month === this.birthday.month) {
      if (this.today.day >= this.birthday.day) {
        return this.today.year - this.birthday.year;
      } else {
        return this.today.year - this.birthday.year - 1;
      }
    } else {
      return this.today.year - this.birthday.year - 1;
    }
  }

  /**
   * Получение количества месяцев возраста
   * @returns { number } количество месяцев возраста
   */
  getAgeMonths() {
    if (this.today.month > this.birthday.month) {
      if (this.today.day >= this.birthday.day) {
        return this.today.month - this.birthday.month;
      } else {
        return this.today.month - this.birthday.month - 1;
      }
    } else if (this.today.month === this.birthday.month) {
      if (this.today.day >= this.birthday.day) {
        return 0;
      } else {
        return 11;
      }
    } else {
      return this.today.month + 12 - this.birthday.month;
    }
  }

  /**
   * Формирование таблицы срока дожития
   */
  getCalculationLifeTime() {
    const result = {
      values: [],
      summary: {
        /** [Срок дожития] M18 */
        posthumousFactorTotal: 0,
        /** [Срок дожития] Столбец G Сумма */
        employeeFactoredDeathSum: 0,
        /** [Срок дожития] Столбец K Сумма */
        employerFactoredDeathSum: 0,
      },
    }
    let lastMonth = 0;
    for (let order = 0; order <= this.maxOrder; order++) {
      if (order > 0) {
        lastMonth = this.getMonthTS(lastMonth);
      }
      const payoutPeriod = order <= this.payoutPeriodsPer100Years ? order : 0;
      const yearTS = order === payoutPeriod ? Math.floor(this.pensionAge + (payoutPeriod / this.nonStatePensionPaymentsCount)) : 0;
      const deathValue = order <= this.payoutPeriodsPer100Years ? this.deaths.getDeathsByMonthAndAge(yearTS, lastMonth, this.gender) : 0;
      const employeeFactor = order === payoutPeriod ? (1 / Math.pow((1 + this.employeeBillingYearAND), (payoutPeriod / this.nonStatePensionPaymentsCount))) : 0;
      const employerFactor = order === payoutPeriod ? (1 / Math.pow((1 + this.employerBillingYearAND), (payoutPeriod / this.nonStatePensionPaymentsCount))) : 0;
      const nextDeathValue = order < this.payoutPeriodsPer100Years ? this.deaths.getDeathsByMonthAndAge(lastMonth > this.getMonthTS(lastMonth) ? yearTS + 1 : yearTS, this.getMonthTS(lastMonth), this.gender) : 0;
      const posthumousFactor1 = 1 / Math.pow(Math.pow(1 + this.employerBillingYearAND, 1 / 12), order + 1);
      const posthumousFactor2 = (deathValue - nextDeathValue) / this.deathValue;
      const posthumousFactorMultiply = order <= nextDeathValue ? posthumousFactor1 * posthumousFactor2 : 0;
      const emploeyeeFactoredDeathValue = order === payoutPeriod ? Math.round(deathValue * employeeFactor) : 0;
      const emploeyerFactoredDeathValue = order === payoutPeriod ? Math.round(deathValue * employerFactor) : 0;
      result.values.push({
        /** Порядок [Срок дожития] Столбец А */
        order,
        /** (mw-mx) [Срок дожития] Столбец B */
        payoutPeriod,
        /** Год ТС [Срок дожития] Столбец C */
        yearTS,
        /** Месяц ТС [Срок дожития] Столбец D */
        monthTS: lastMonth,
        /** l(x+(j/m)) [Срок дожития] Столбец E */
        deathValue,
        /** l(x+(j/m)+1) [Срок дожития] Столбец L */
        nextDeathValue,
        employee: {
          /** 1/(1+i)^(j/m) [Срок дожития] Столбец F */
          factor: employeeFactor,
          /** l(x+(j/m)*(1/(1+i)^(j/m)) [Срок дожития] Столбец G */
          factoredDeathValue: emploeyeeFactoredDeathValue,
        },
        employer: {
          /** 1/(1+i)^(j/m) [Срок дожития] Столбец J */
          factor: employerFactor,
          /** l(x+(j/m)*(1/(1+i)^(j/m)) [Срок дожития] Столбец K */
          factoredDeathValue: emploeyerFactoredDeathValue,
          /** [Срок дожития] Столбец N */
          posthumousPaymentFactor1: posthumousFactor1,
          /** [Срок дожития] Столбец O */
          posthumousPaymentFactor2: posthumousFactor2,
          /** [Срок дожития] Столбец M */
          posthumousPaymentFactorMultiply: posthumousFactorMultiply,
        },
      })
      result.summary.posthumousFactorTotal += posthumousFactorMultiply;
      result.summary.employeeFactoredDeathSum += emploeyeeFactoredDeathValue;
      result.summary.employerFactoredDeathSum += emploeyerFactoredDeathValue;
    }
    return result;
  }
  
  getMonthTS(prevMonth) {
    if (prevMonth === 12 - 12 / this.nonStatePensionPaymentsCount) {
      return 0;
    } else {
      return 12 / this.nonStatePensionPaymentsCount + prevMonth;
    }
  }
}