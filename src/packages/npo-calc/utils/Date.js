import dayjs from 'dayjs';

const isValidDate = (d) => d instanceof Date && !Number.isNaN(d);

/**
 * Текущая дата
 * @returns { dayjs.Dayjs }
 */
const today = () => dayjs();

const addDate = (currentValue, count, type) => dayjs(currentValue).add(count, type);


const subtractDate = (currentValue, count, type) => dayjs(currentValue).subtract(count, type)

const isDateBeforeToday = (currentValue) => dayjs(currentValue).isBefore(today());

const getMonthOfDate = (date) => dayjs(date).month() + 1;

const getLastDayOfMonth = (month) => {
  const year = new Date().getFullYear();
  return new Date(year, month, 0).getDate();
}

const splitDate = (value) => {
  const date = dayjs(value);
  return {
    date,
    day: date.date(),
    month: getMonthOfDate(value),
    year: date.year(),
  };
}

export {
  isValidDate,
  today,
  addDate,
  subtractDate,
  getMonthOfDate,
  getLastDayOfMonth,
  splitDate,
  isDateBeforeToday,
}