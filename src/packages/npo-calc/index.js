import {
  Gender,
  NonStatePensionPaymentPeriods,
  PensionAgesList,
} from "./constants/index";
import {
  InputData,
  Calculation,
} from "./models/index";
import { formatNumber, isNumber } from "./utils/index";
import { isValidDate } from "./utils/Date";

const resultElementCreator = (result) => ({
  value: result,
  valueRounded: Math.round(result),
  valueFormated: formatNumber(Math.round(result)),
})

/**
 * Калькулятор
 * @description Калькулятор_НПО_ПС_№1_НПФ_ЛГ_для_долевой_КПП_v5_открытый
 * @copyright AicRobotics 2022
 * @version 5.0.0
 */
export default class NpoCalc {
  inputData;

  /**
   * @param { { id: string; title: string; } } gender Пол
   * @param { Date } birthday Дата рождения
   * @param { number } pensionAge Возраст выхода на пенсию
   * @param { number } salary Размер заработной платы
   * @param { number } percentFromSalary Процент от заработной платы направляемый на пенсионные взносы
   * @param { { id: string; title: string; } } nonStatePensionPaymentPeriod Период выплаты Негосударственной пенсии
   */
  constructor(gender = Gender.Man, birthday = '1971-01-17T00:00:00.000Z', pensionAge = PensionAgesList[0].value, salary = 30000, percentFromSalary = 1, nonStatePensionPaymentPeriod = NonStatePensionPaymentPeriods.AllTime) {
    /** Входные данные */
    this.inputData = new InputData(gender, birthday, pensionAge, salary, percentFromSalary, nonStatePensionPaymentPeriod);
    /** Расчеты */
    this.calculation = new Calculation(this.inputData);
  }

  /** Пол */
  get gender() {
    return this.inputData.gender;
  }

  /**
   * Пол
   * @param { { id: string; title: string; } } value пол
   */
  set gender(value) {
    this.inputData.gender = value;
  }

  /** Дата рождения */
  get birthday() {
    return this.inputData.birthday;
  }

  /**
   * Дата рождения
   * @param { Date } value дата рождения
   */
  set birthday(value) {
    if (!isValidDate(value)) {
      throw new Error('Указана некорректная дата рождения');
    }
    this.inputData.birthday = value;
  }

  /** Возраст выхода на пенсию  */
  get pensionAge() {
    return this.inputData.pensionAge;
  }

  /**
   * Возраст выхода на пенсию
   * @param { number } value возраст
   */
  set pensionAge(value) {
    if (!isNumber(value)) {
      throw new Error('Указан некорректный возраст выхода на пенсию');
    }
    this.inputData.pensionAge = value;
  }

  /** Размер заработной платы */
  get salary() {
    return this.inputData.salary;
  }

  /**
   * Размер заработной платы
   * @param { number } value размер заработной платы
   */
  set salary(value) {
    if (!isNumber(value)) {
      throw new Error('Указан некорректный размер заработной платы');
    }
    this.inputData.salary = value;
  }

  /** Процент от заработной платы направляемый на пенсионные взносы */
  get percentFromSalary() {
    return this.inputData.percentFromSalary;
  }

  /**
   * Процент от заработной платы направляемый на пенсионные взносы
   * @param { number } value процент
   */
  set percentFromSalary(value) {
    if (!isNumber(value)) {
      throw new Error('Указан некорректный процент от заработной платы направляемый на пенсионные взносы');
    }
    this.inputData.percentFromSalary = value;
  }

  /**
   * Период выплаты пенсии
   */
  get nonStatePensionPaymentPeriod() {
    return this.inputData.nonStatePensionPaymentPeriod;
  }

  /**
   * Период выплаты пенсии
   * @param { { id: string; title: string; value?: number }} value
   */
  set nonStatePensionPaymentPeriod(value) {
    this.inputData.nonStatePensionPaymentPeriod = value;
  }

  /**
   * Результаты расчета
   */
  get calculationResults() {
    const { 
      contributionAmount,
      totalContributions,
      totalAccumulatedFundsAmount,
      monthlyCorporatePension,
    } = this.calculation;
    const { alreadyRetired } = this.inputData.pensionRetirement;

    const createRsult = (value) => !alreadyRetired 
        ? resultElementCreator(value)
        : resultElementCreator(0);

    return {
      /** Клиент уже является пенсионером */
      alreadyRetired,
      /** Размер взноса */
      contributionAmount: createRsult(contributionAmount),
      /** Общая сумма взносов */
      totalContributions: createRsult(totalContributions),
      /** Объем накопленных средств */
      totalAccumulatedFundsAmount: createRsult(totalAccumulatedFundsAmount),
      /** Ежемесячная корпоративная пенсия */
      pension: createRsult(monthlyCorporatePension),
    }
  }

}