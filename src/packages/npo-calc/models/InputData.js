import {
  CalculationTypes,
  FrequencyСontributions,
  NonStatePensionPaymentsPeriodicity,
} from "../constants/index";
import PensionRetirement from "./PensionRetirement";



/**
 * Входные параметры калькулятора
 * @description Калькулятор_НПО_ПС_№1_НПФ_ЛГ_для_долевой_КПП_v5_открытый
 */
export default class InputData {

  _birthday;
  _pensionAge;

  /**
   * Входные параметры калькулятора
   * @param { { id: string; title: string; } } gender Пол
   * @param { Date } birthday Дата рождения
   * @param { number } pensionAge Возраст выхода на пенсию
   * @param { number } salary Размер заработной платы
   * @param { number } percentFromSalary Процент от заработной платы направляемый на пенсионные взносы
   * @param { { id: string; title: string; } } nonStatePensionPaymentPeriod Период выплаты Негосударственной пенсии
   */
  constructor(gender, birthday, pensionAge, salary, percentFromSalary, nonStatePensionPaymentPeriod) {
    /** Пол */
    this.gender = gender;    
    /** Дата рождения */
    this._birthday = new Date(birthday);
    /** Размер заработной платы */
    this.salary = salary;
    /** Процент от заработной платы направляемый на пенсионные взносы */
    this.percentFromSalary = percentFromSalary;
    /** Период выплаты Негосударственной пенсии */
    this.nonStatePensionPaymentPeriod =  nonStatePensionPaymentPeriod;
    /** Периодичность внесения взносов */
    this.frequencyСontributions = FrequencyСontributions.EveryMonth;
    /** Периодичность выплат негосударственной пенсии */
    this.nonStatePensionPaymentsPeriodicity = NonStatePensionPaymentsPeriodicity.EveryMonth;
    /** Текущая сумма пенсионных резервов */
    this.currentAmountPensionReserves = 0;
    /** Тип расчета */
    this.calculationType = CalculationTypes.ContributionAmount;
    /** Возраст выхода на пенсию */
    this._pensionAge = pensionAge;
    /** Доходность ПР */
    this.prProfitability = 0.06;
    /** АНД работника за расчетный год */
    this.employeeBillingYearAND = 0.04;
    /** АНД работодателя за расчетный год */
    this.employerBillingYearAND = 0.06;
    /** Данные о количестве времени до выхода на пенсию */
    this.pensionRetirement = new PensionRetirement(birthday, pensionAge);
    /** Размер пенсии */
    this.pensionSize = 1000;
    /** НДФЛ */
    this.ndflTax = 0.13;
    /** Налоговый вычет */
    this.taxDeduction = 120000;
  }

  /** Дата рождения */
  get birthday() {
    return this._birthday;
  }

  /**
   * Дата рождения
   * @param { Date } value дата рождения
   */
  set birthday(value) {
    this._birthday = value;
    this.pensionRetirement.updateBirthday(value);
  }

  /** Возраст выхода на пенсию  */
  get pensionAge() {
    return this._pensionAge;
  }

  /**
   * Возраст выхода на пенсию
   * @param { number } value возраст
   */
  set pensionAge(value) {
    this._pensionAge = value;
    this.pensionRetirement.updatePensionAge(value);
  }
  
}