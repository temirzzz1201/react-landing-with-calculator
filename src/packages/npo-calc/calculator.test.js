import dayjs from 'dayjs';
import NpoCalc from './calculator';
import testDatas from './testDatas';

const testData = testDatas[1];

const { gender, birthday, pensionAge, salary, percentFromSalary, nonStatePensionPaymentPeriod } = testData.input;
const calc = new NpoCalc(gender, birthday, pensionAge, salary, percentFromSalary, nonStatePensionPaymentPeriod);

describe('Проверка входных данных', () => {
  it(`Пол ${testData.input.gender.title}`, () => {
    expect(calc.inputData.gender.id).toBe(testData.input.gender.id);
  });
  it(`Дата рождения ${dayjs(testData.input.birthday).format('DD.MM.YYYY')}`, () => {
    expect(dayjs(calc.inputData.birthday).format('DD.MM.YYYY')).toBe(dayjs(testData.input.birthday).format('DD.MM.YYYY'));
  });
  it(`Возраст выхода на пенсию ${testData.input.pensionAge}`, () => {
    expect(calc.inputData.pensionAge).toBe(testData.input.pensionAge);
  });
  it(`Размер заработной платы ${testData.input.salary}`, () => {
    expect(calc.inputData.salary).toBe(testData.input.salary);
  });
  it(`% от З/П направляемый на пенсионные взносы ${testData.input.percentFromSalary}`, () => {
    expect(calc.inputData.percentFromSalary).toBe(testData.input.percentFromSalary);
  });
  it(`Период выплаты Негосударственной пенсии ${testData.input.nonStatePensionPaymentPeriod.title}`, () => {
    expect(calc.inputData.nonStatePensionPaymentPeriod.id).toBe(testData.input.nonStatePensionPaymentPeriod.id);
  });
});

describe('Проверка результата расчетов', () => {
  Object.keys(testData.output).forEach((key) => {
    it(`${testData.output[key].title} ${testData.output[key].value}`, () => {
      if (key === 'alreadyRetired') {
        expect(calc.calculationResults[key]).toBe(testData.output[key].value);
      } else {
        expect(calc.calculationResults[key].valueRounded).toBe(testData.output[key].value);
      }
    });
  });
});