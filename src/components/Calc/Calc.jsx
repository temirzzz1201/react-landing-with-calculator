import { useState, useEffect } from 'react';
import { StyledDiv } from '../../styled-components';
import './Calc.scss';
import CalcForm from './components/CalcForm';
import CalcResult from './components/CalcResult';
import CalcNote from './components/CalcNote';
import {
  Gender,
  PensionAgesList,
  NonStatePensionPaymentPeriods,
  PercentSalaryList,
} from '../../packages/npo-calc/constants';
import NpoCalc from '../../packages/npo-calc/index';

/** Начальные параметры калькулятора */
const initialCalcParams = {
  gender: Gender.Man,
  birthday: new Date('1990-08-25T00:00:00.000Z'),
  salary: 40000,
  pensionAge: PensionAgesList[1],
  period: NonStatePensionPaymentPeriods.AllTime,
  percent: PercentSalaryList[2],
}

const calcInstance = new NpoCalc(
  initialCalcParams.gender,
  initialCalcParams.birthday,
  initialCalcParams.pensionAge.value,
  initialCalcParams.salary,
  initialCalcParams.percent.value,
  initialCalcParams.period,
);

function Calc() {
  const [ model, setModel ] = useState(initialCalcParams);
  const [ contributionAmount, setContributionAmount ] = useState({});
  const [ totalContributions, setTotalContributions ] = useState({});
  const [ totalAccumulatedFundsAmount, setTotalAccumulatedFundsAmount ] = useState({});
  const [ pension, setPension ] = useState({});

  // TODO: Подумать как можно оптимально автоматически пересчитывать таблицу "Срок дожития"
  useEffect(() => {
    const { birthday, pensionAge } = model;
    calcInstance.birthday = birthday;
    calcInstance.pensionAge = pensionAge.value;
    calcInstance.calculation.updateDeaths();
  }, [model.birthday, model.pensionAge]);

  useEffect(() => {
    const { gender, salary, pensionAge, period, percent } = model;
    calcInstance.gender = gender;
    calcInstance.pensionAge = pensionAge.value;
    calcInstance.salary = salary;
    calcInstance.percentFromSalary = percent.value;
    calcInstance.nonStatePensionPaymentPeriod = period;
    setContributionAmount(calcInstance.calculationResults.contributionAmount);
    setTotalContributions(calcInstance.calculationResults.totalContributions);
    setTotalAccumulatedFundsAmount(calcInstance.calculationResults.totalAccumulatedFundsAmount);
    setPension(calcInstance.calculationResults.pension);
  }, [model]);

  const onFormChange = (value) => {
    setModel(value);
  };


  return (
    <StyledDiv
      className="calculator"
      ff="Graphik"
      maxWidth="1120px"
      mWidMediaBig="840px"
    >
      <CalcForm value={model} onChanged={onFormChange} />
      <CalcResult 
        contributionAmount={contributionAmount && contributionAmount.valueFormated}
        totalContributions={totalContributions && totalContributions.valueFormated}
        totalAccumulatedFundsAmount={totalAccumulatedFundsAmount && totalAccumulatedFundsAmount.valueFormated}
        pension={pension && pension.valueFormated}
      />
      <CalcNote />
    </StyledDiv>
  );
}

export default Calc;
