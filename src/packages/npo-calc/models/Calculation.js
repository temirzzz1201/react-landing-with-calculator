import Сontributions from "./Сontributions";
import LifeTime from './LifeTime';
import Payouts from './Payouts';
// eslint-disable-next-line no-unused-vars
import InputData from './InputData';
import AccumulationPeriod from "./AccumulationPeriod";
import PayoutPeriod from "./PayoutPeriod";
import { CalculationTypes, FrequencyСontributions, NonStatePensionPaymentPeriods } from "../constants/index";


const initGeneralCalculationResult = () => ({
  /** от взноса */
  fromContribution: 0,
  /** от выплат */
  fromPayments: 0,
});

/**
 * Расчеты
 * [Расчеты - формулы]
 */
export default class Calculation {
  contributions;

  /**
   * 
   * @param { InputData } inputData входные параметры
   */
  constructor(inputData) {
    if (!inputData) {
      throw new Error('Отсутствуют входные параметры. Дальнейший расчет невозможен.');
    }
    this.inputData = inputData;
    Сontributions.prototype.inputDataDI = inputData;
    LifeTime.prototype.inputDataDI = inputData;
    Payouts.prototype.inputDataDI = inputData;
    /** Взносы */
    this.contributions = new Сontributions();
    /** Срок дожития */
    this.life = new LifeTime();
    /** Выплаты */
    Payouts.prototype.inputDataDI = inputData;
    Payouts.prototype.lifeTimeDI = this.life;
    this.payouts = new Payouts(inputData.nonStatePensionPaymentsPeriodicity, inputData.nonStatePensionPaymentPeriod, this.life);
    /** Период накопления */
    AccumulationPeriod.prototype.inputDataDI = inputData;
    AccumulationPeriod.prototype.contributionsDI = this.contributions;
    this.accumulationPeriod = new AccumulationPeriod();
    /** Период выплат */
    PayoutPeriod.prototype.payoutsDI = this.payouts;
    this.payoutPeriod = new PayoutPeriod();
  }

  updateDeaths() {
    this.life.updateDeaths();
  }

  /** Тип расчета = "от размера взноса" */
  get isContributionAmount() {
    return this.inputData.calculationType.id === CalculationTypes.ContributionAmount.id;
  }

  get isOneTime() {
    return this.inputData.frequencyСontributions.id === FrequencyСontributions.OneTime.id;
  }

  get isAllTime() {
    return this.inputData.nonStatePensionPaymentPeriod.id === NonStatePensionPaymentPeriods.AllTime.id;
  }

  /**
   * Размер взноса
   * [Калькулятор для маркетинга] C20
   */
  get contributionAmount() {
    return this.contributions.contributionAmount;
  }

  /**
   * Размер пенсии
   * [Расчеты - формулы] B22
   * =ЕСЛИ(B2="от размера взноса";"";'Калькулятор для маркетинга'!C23)
   */
  get pensionSize() {
    if (this.isContributionAmount) {
      return 0;
    }
    return this.inputData.pensionSize;
  }

  /**
   * Приращение первоначального взноса
   * [Расчеты - формулы] H32:I32
   * H32 =ЕСЛИ('Калькулятор для маркетинга'!C94="Единовременно";B7*((1+B3)^(B9/12));B7*((1+B3)^(B10/B8)))
   * I32 =B7*((1+B3)^(B10/B8))
   */
  get downPaymentIncrement() {
    const result = initGeneralCalculationResult();
    if (this.isOneTime) {
      result.fromContribution = this.contributions.firstPayContribution * Math.pow(1 + this.inputData.prProfitability, this.inputData.pensionRetirement.retirementMonthlyContributionPeriods / 12);
    } else {
      result.fromContribution = this.contributions.firstPayContribution * Math.pow(1 + this.inputData.prProfitability, this.contributions.countContibutionPeriod / this.contributions.contributionsPerYear);
    }
    result.fromPayments = this.contributions.firstPayContribution * Math.pow(1 + this.inputData.prProfitability, this.contributions.countContibutionPeriod / this.contributions.contributionsPerYear);
    return result;
  }

  /**
   * Приращение периодических взносов
   * [Расчеты - формулы] H33:I33
   * H33 =ЕСЛИ('Калькулятор для маркетинга'!C94="Единовременно";B11*((1+B3)^(B9/12));B11*B17)
   * I33 =I35-I32
   */
  get periodicContributionsIncrement() {
    const result = initGeneralCalculationResult();
    if (this.isOneTime) {
      result.fromContribution = this.contributionAmount * Math.pow(1 + this.inputData.prProfitability, this.inputData.pensionRetirement.retirementMonthlyContributionPeriods / 12);
    } else {
      result.fromContribution = this.contributionAmount * this.accumulationPeriod.Sn;
    }
    if (this.isContributionAmount) {
      result.fromPayments = 0;
    } else {
      result.fromPayments = this.savingsRetirementAmountPayment - this.downPaymentIncrement.fromPayments;
    }
    return result;
  }

  /**
   * Пенсионная выплата работника
   * [Расчеты - формулы] H39:I39
   * H39 =ЕСЛИ('Калькулятор для маркетинга'!$C$25="Пожизненно";(H32+H33)/(B20*'Срок дожития'!B11);(H32+H33)/B29)
   * I39 =B22
   */
  get employeePensionPayment() {
    const result = initGeneralCalculationResult();
    if (this.isAllTime) {
      result.fromContribution = (this.downPaymentIncrement.fromContribution + this.periodicContributionsIncrement.fromContribution) / (this.contributions.contributionsPerYear * this.life.employeeLifeTimePeriod.value);
    } else {
      result.fromContribution = (this.downPaymentIncrement.fromContribution + this.periodicContributionsIncrement.fromContribution) / this.payoutPeriod.SnSub1Add1.employee;
    }
    result.fromPayments = this.pensionSize;
    return result;
  }

  /**
   * Общая сумма взносов
   * [Расчеты - формулы] B35
   * =J38*B10+B7
   */
  get totalContributions() {
    return this.periodicContribution.summary * this.contributions.countContibutionPeriod + this.contributions.firstPayContribution;
  }

  /**
   * Периодический взнос
   * [Расчеты - формулы] H38:J38
   * H38 =B11
   * I38 =ЕСЛИ('Калькулятор для маркетинга'!C94="Единовременно";I33/B17^(B9/12);I33/B17)
   * J38 =ЕСЛИ($B$2="от размера взноса";H38;I38)
   */
  get periodicContribution() {
    const result = initGeneralCalculationResult();
    result.fromContribution = this.contributions.contributionAmount;
    if (this.isAllTime) {
      result.fromPayments = this.periodicContributionsIncrement.fromContribution / Math.pow(this.accumulationPeriod.Sn, this.inputData.pensionRetirement.retirementMonthlyContributionPeriods / 12);
    } else {
      result.fromPayments = this.periodicContributionsIncrement.fromContribution / this.accumulationPeriod.Sn;
    }
    result.summary = this.isContributionAmount ? result.fromContribution : result.fromPayments;    
    return result;
  }

  /**
   * Доплата работодателя
   * [Расчеты - формулы] H34
   * =B35
   */
  get employerSurcharge() {
    return this.totalContributions;
  }

  /**
   * Сумма накоплений к выходу на пенсию от взноса
   * [Расчеты - формулы] H35
   * H35 =СУММ(H32:H34)
   */
  get savingsRetirementAmountContribution() {
    return this.downPaymentIncrement.fromContribution + this.periodicContributionsIncrement.fromContribution + this.employerSurcharge;
  }
  
  /**
   * Сумма накоплений к выходу на пенсию от выплаты
   * [Расчеты - формулы] I35
   * I35 =ЕСЛИ('Калькулятор для маркетинга'!C25="Пожизненно";I39*(12*'Срок дожития'!B11);(B22*(1-B27^B21))/(1-B27))
   */
  get savingsRetirementAmountPayment() {
    if (this.isAllTime) {
      return this.employeePensionPayment.fromPayments * (12 * this.life.employeeLifeTimePeriod.value);
    } 
    return (this.pensionSize * (1 - Math.pow(this.payoutPeriod.q, this.payouts.employeePayoutsPeriods)) / (1 / this.payoutPeriod.q));
  }

  /**
   * Пенсионная выплата работодателя
   * [Расчеты - формулы] H40
   * =(H34*(1-H3))/(C20*'Срок дожития'!L11)
   */
  get employerPensionPayment() {
    return (this.employerSurcharge * (1 - this.inputData.ndflTax) / (this.payouts.employerPayoutsPerYear * this.life.posthumousLifeTimePeriod.value));
  }

  /**
   * Посмертная выплата
   * [Расчеты - формулы] H41
   * =H40*12
   */
  get posthumousPayment() {
    return this.employerPensionPayment * 12;
  }

  /**
   * Общий объем выплаченных средств
   * [Расчеты - формулы] B33
   * =ЕСЛИ(B2="от размера взноса";H39*B21+H40*C21+H41;I39*B21+I40*C21+I41)
   */
  get totalAmountFundsPaid() {
    if (this.isContributionAmount) {
      return this.employeePensionPayment.fromContribution * this.payouts.employeePayoutsPeriods + this.employerPensionPayment * this.payouts.employerPayoutsPeriods + this.posthumousPayment;
    }
    // I40*C21 + I41 = 0 т.к. в I40 b I41 нет никаких значений. следовательно убираем это выражение их формулы
    return this.employeePensionPayment.fromPayments * this.payouts.employeePayoutsPeriods + this.employerPensionPayment * this.payouts.employerPayoutsPeriods;
  }

  /**
   * Объем накопленных средств
   * [Расчеты - формулы] B34
   * =ЕСЛИ($B$2="от размера взноса";H35;I35)
   */
  get totalAccumulatedFundsAmount() {
    if (this.isContributionAmount) {
      return this.savingsRetirementAmountContribution;
    }
    return this.savingsRetirementAmountPayments;
  }

  /**
   * Налоговый вычет
   * [Расчеты - формулы] B36
   * =СУММ('Для графиков - года'!$G$2:$G$65)
   */
  get taxDeduction() {
    return 0;
  }

  /**
   * Чистая выгода
   * [Расчеты - формулы] B37
   * =B34-B35+B36
   */
  get netBenefit() {
    return 0;
  }

  /**
   * Инвестиционный доход
   * [Расчеты - формулы] B39
   * =B34-B35-H34
   */
  get investmentRevenue() {
    return this.totalAccumulatedFundsAmount - this.totalContributions - this.employerSurcharge;
  }

  /**
   * Ежемесячная корпоративная пенсия
   * pPW + pPE
   * --------------
   * pPW - Пенсионная выплата работника
   * ppE - Пенсионная выплата работодателя
   * 
   * Расчет взят из предыдущей версии калькулятора, т.к.
   * в текущей нет такого параметра
   */
  get monthlyCorporatePension() {
    if (this.isContributionAmount) {
      return this.employeePensionPayment.fromContribution + this.employerPensionPayment;
    }
    return this.employeePensionPayment.fromPayments + this.employerPensionPayment;
  }
}