// eslint-disable-next-line no-unused-vars
import dayjs from "dayjs";
import { addDate, getLastDayOfMonth, isDateBeforeToday, splitDate, today } from "../utils/Date";

/**
 * Модель содержащая данные о количестве времени
 * до выхода на пенсию и дату рождения
 */
export default class PensionRetirement {
  _birthday;
  _pensionAge;
  _retirementDate;
  _today = splitDate(today());

  /**
   * @param { Date } birthday дата рождения
   * @param { number } pensionAge Возраст выхода на пенсию
   */
  constructor(birthday, pensionAge) {
    /** Дата рождения */
    this._birthday = new Date(birthday);
    /** Возраст выхода на пенсию */
    this._pensionAge = pensionAge;
    this.updateRetirementDate();
  }

  /** Текущая дата */
  get today() {
    return this._today;
  }

  /**
   * Дата выхода на пенсию
   * [Калькулятор для маркетинга] С8
   */
  get retirementDate() {
    return this._retirementDate;
  }

  updateBirthday(value) {
    this._birthday = value;
    this.updateRetirementDate();
  }
  
  updatePensionAge(value) {
    this._pensionAge = value;
    this.updateRetirementDate();
  }

  updateRetirementDate() {
    this._retirementDate = PensionRetirement.getRetirementDate(this._birthday, this._pensionAge);
  }

  /** Клиент уже является пенсионером */
  get alreadyRetired() {
    return isDateBeforeToday(this._retirementDate.date);
  }

  /**
   * Получение даты выхода на пенсию
   * @param { Date } birthday дата рождения
   * @param { number } pensionAge возраст выхода на пенсию
   * @returns { dayjs.Dayjs } дата выхода на пенсию
   */
  static getRetirementDate(birthday, pensionAge) {
    const value = addDate(birthday, pensionAge, 'year');
    return splitDate(value);
  }

  /**
   * Кол-во полных лет до выхода на пенсию
   * [Калькулятор для маркетинга] С9
   * =ЕСЛИ(МЕСЯЦ(C8)>МЕСЯЦ(C7);ГОД(C8)-ГОД(C7);ЕСЛИ(МЕСЯЦ(C8)=МЕСЯЦ(C7);ЕСЛИ(ДЕНЬ(C8)>=ДЕНЬ(C7);ГОД(C8)-ГОД(C7);ГОД(C8)-ГОД(C7)-1);ГОД(C8)-ГОД(C7)-1))
   */
  get retirementFullYears() {
    const { day, month, year } = this.today;
    if (this.retirementDate.month > month) {
      return this.retirementDate.year - year;
    } else if (this.retirementDate.month === month) {
      if (this.retirementDate.day >= day) {
        return this.retirementDate.year - year;
      } else {
        return this.retirementDate.year - year - 1;
      }
    } else {
      return this.retirementDate.year - year - 1;
    }
  }

  /**
   * Кол-во полных месяцев до выхода на пенсию
   * [Калькулятор для маркетинга] С10
   * =ЕСЛИ(МЕСЯЦ(C8)>МЕСЯЦ(C7);ЕСЛИ(ДЕНЬ(C8)>=ДЕНЬ(C7);МЕСЯЦ(C8)-МЕСЯЦ(C7);МЕСЯЦ(C8)-МЕСЯЦ(C7)-1);ЕСЛИ(МЕСЯЦ(C8)=МЕСЯЦ(C7);ЕСЛИ(ДЕНЬ(C8)>=ДЕНЬ(C7);0;11);ЕСЛИ(ДЕНЬ(C8)>=ДЕНЬ(C7);МЕСЯЦ(C8)+12-МЕСЯЦ(C7);МЕСЯЦ(C8)+12-МЕСЯЦ(C7)-1)))
   */
  get retirementFullMonths() {
    const { day, month } = this.today;
    if (this.retirementDate.month > month) {
      if (this.retirementDate.day >= day) {
        return this.retirementDate.month - month;
      } else {
        return this.retirementDate.month - month - 1;
      }
    } else if (this.retirementDate.month === month) {
      return this.retirementDate.day >= day ? 0 : 11;
    } else if (this.retirementDate.day >= day) {
      return this.retirementDate.month + 12 - month;
    } else {
      return this.retirementDate.month + 12 - month - 1;
    }
  }

  /**
   * Кол-во неполных месяцев до выхода на пенсию
   * [Калькулятор для маркетинга] С11
   * =ЕСЛИ(ЕСЛИ(ДЕНЬ(C8)>=ДЕНЬ(C7);ДЕНЬ(C8)-ДЕНЬ(C7);ДЕНЬ(КОНМЕСЯЦА(C7;0))-ДЕНЬ(C7)+ДЕНЬ(C8))>0;1;0)
   */
  get retirementIncompleteMonths() {
    const { day, month } = this.today;
    if (this.retirementDate.day >= day) {
        if (this.retirementDate.day - day > 0) {
          return 1;
        } else {
          return 0;
        }
    } else if (getLastDayOfMonth(month) - day + this.retirementDate.day > 0) {
      return 1;
    } else {
      return 0;
    }
  }

  /**
   * Кол-во месячных периодов взносов до выхода на пенсию 
   * [Калькулятор для маркетинга] С12
   * =C9*12+C10+C11
   */
  get retirementMonthlyContributionPeriods() {
    return (this.retirementFullYears * 12) + this.retirementFullMonths + this.retirementIncompleteMonths;
  }
}