import CalculationTypes from "../constants/CalculationTypes";
import FrequencyСontributions from "../constants/FrequencyСontributions";

export default class Сontributions {

  /** Периодичность внесения взносов */
  get frequencyСontributions() {
    return this.inputDataDI.frequencyСontributions;
  }

  /** Кол-во месячных периодов взносов до выхода на пенсию */
  get retirementMonthlyContributionPeriods() {
    return this.inputDataDI.pensionRetirement.retirementMonthlyContributionPeriods;
  }

  /** Сумма первоначального взноса */
  get firstPayContribution() {
    return this.inputDataDI.currentAmountPensionReserves;
  }

  /** Тип расчета */
  get calculationType() {
      return this.inputDataDI.calculationType;
  }

  /**
   * Расчет взноса
   * @param { number } salary Размер заработной платы
   * @param { number } percentFromSalary Процент от заработной платы направляемый на пенсионные взносы
   * @returns { number } Размер взнос
   */
  static getContributionBySalary(salary, percentFromSalary) {
    return (salary / 100) * percentFromSalary;
  }

  /** Размер взноса */
  get contributionAmount() {
    if (this.calculationType === CalculationTypes.ContributionAmount) {
      return Сontributions.getContributionBySalary(this.inputDataDI.salary, this.inputDataDI.percentFromSalary);
    }
    return 0;
  }

  /**
   * Кол-во взносов в год
   * [Расчеты-формулы] B8
   * =ВПР('Калькулятор для маркетинга'!C94;'Для списков'!$B$3:$C$7;2;0)
   */
  get contributionsPerYear() {
    return this.frequencyСontributions.value;
  }

  /**
   * Количество периодов взносов
   * [Расчеты-формулы] B10
   * =ВПР('Калькулятор для маркетинга'!C94;'Расчеты - формулы'!$G$7:$H$11;2;0)
   */
  get countContibutionPeriod() {
    let result = 0;
    Object.values(this.countContibutionPeriodsList).forEach((item) => {
      if (item.id === this.inputDataDI.frequencyСontributions.id) {
        result = item.value;
      }
    })
    return result;
  }

  /**
   * Список периодов взносов
   * [Расчеты-формулы] G7 : H11
   */
  get countContibutionPeriodsList() {
    return {
      /** Единовременно */
      OneTime: {
        id: FrequencyСontributions.OneTime.id,
        value: 1,
      },
      /** Ежемесячно */
      EveryMonth: {
        id: FrequencyСontributions.EveryMonth.id,
        value: this.retirementMonthlyContributionPeriods,
      },
      /** Ежеквартально */
      Quarterly: {
        id: FrequencyСontributions.Quarterly.id,
        value: this.getPeriodsCount(3),
      },
      /** Раз в полгода */
      HalfYear: {
        id: FrequencyСontributions.HalfYear.id,
        value: this.getPeriodsCount(6),
      },
      /** Ежегодно */
      EveryYear: {
        id: FrequencyСontributions.EveryYear.id,
        value: this.getPeriodsCount(12),
      }
    }
  }

  /**
   * Расчет количества периодов взносов
   * @param { number } period 
   * @returns { number } количество периодов взносов
   */
  getPeriodsCount(period) {
    if (this.retirementMonthlyContributionPeriods % period > 0) {
      return Math.floor(this.retirementMonthlyContributionPeriods / period) + 1;
    } 
    return Math.floor(this.retirementMonthlyContributionPeriods / period);
  }
}