import { useState, useEffect } from 'react';
import { StyledDiv } from '../../../styled-components';
import Tabs from '../../Tabs/Tabs';
import CalcCalendar from '../../Calendar/CalcCalendar';
import InputSlider from '../../InputSlider/InputSlider';
import PensionAgeControl from './PensionAgeControl';
import PensionPaymentPeriodControl from './PensionPaymentPeriodControl';
import PercentSalaryControl from './PercentSalaryControl';
import { Gender, PensionAgesList } from '../../../packages/npo-calc/constants/index';

const genderList = [
    Gender.Man,
    Gender.Woman,
]

const maxSalaryValue = 500000;

function CalcForm({ value, onChanged }) {
    const [gender, setGender] = useState(value.gender);
    const [birthday, setBirthday] = useState(value.birthday);
    const [salary, setSalary] = useState(value.salary);
    const [pensionAge, setPensionAge] = useState(value.pensionAge);
    const [period, setPeriod] = useState(value.period);
    const [percent, setPercent] = useState(value.percent);

    const onValueChanged = () => {
        if (onChanged) {
            onChanged({
                gender,
                birthday,
                salary,
                pensionAge,
                period,
                percent,
            });
        }
    }

    const getCalendarDate = (date) => {
        setBirthday(date);
    }

    const getSalary = (salaryValue) => {
        setSalary(salaryValue > maxSalaryValue ? maxSalaryValue : salaryValue);
    }

    const updateGender = (item) => {
        setGender(item);
    }

    const updatePendionAge = (newValue) => {
        setPensionAge(newValue);
    }

    const updatePeriod = (newValue) => {
        setPeriod(newValue);
    }
    
    const updatePersent = (newValue) => {
        setPercent(newValue);
    }

    useEffect(() => {
        onValueChanged();
    }, [ gender, birthday, salary, pensionAge, period, percent ])

    useEffect(() => {
        if (gender.id === Gender.Man.id) {
            setPensionAge(PensionAgesList[1]);
        } else {
            setPensionAge(PensionAgesList[0]);
        }
    }, [ gender ]);

    return (
        <StyledDiv
            className="calculator-form"
        >
            <StyledDiv
                disp="flex"
                just="space-between"
                marg="0 0 32px 0"
                mMargMediaLap="0 0 36px  0"
                mMargMediaTab="0 0 32px  0"
                flexDirectionTab="column"
            >
                <Tabs value={gender} list={genderList} getTabIndex={updateGender} />
                <CalcCalendar getCalendarDate={getCalendarDate} value={birthday} />
            </StyledDiv>
            <StyledDiv
                disp="flex"
                just="space-between"
                marg="0 0 37px 0"
                mMargMediaLap="0 0 30px 0"
                mMargMediaTab="0 0 34px 0"
                flexDirectionTab="column"
            >
                <InputSlider getSalary={getSalary} salary={salary} maxValue={maxSalaryValue} minValue={10000} />
                <PensionAgeControl onChanged={updatePendionAge} value={pensionAge} gender={gender}/>
            </StyledDiv>
            <StyledDiv
                maxWidth="448px"
                wid="100%"
                marg="0 0 54px 0"
                mWidMediaBig="348px"
                mMargMediaBig="0 0 50px 0"
                mMargMediaLap="0 0 48px 0"
                mMargMediaTab="0 0 38px 0"
            >
                <PensionPaymentPeriodControl onChanged={updatePeriod} value={period} />
            </StyledDiv>
            <PercentSalaryControl onChanged={updatePersent} value={percent}/>
        </StyledDiv>
    );
}


export default CalcForm;