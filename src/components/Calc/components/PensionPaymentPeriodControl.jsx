import { NonStatePensionPaymentPeriods } from '../../../packages/npo-calc/constants/index';
import { StyledDiv, StyledPar } from '../../../styled-components';
import Input from '../../../UI/Input/Input';

const periodsList = [
    NonStatePensionPaymentPeriods.AllTime,
    NonStatePensionPaymentPeriods.Five,
];

function PensionPaymentPeriodControl({ onChanged, value  }) {
    return (
        <StyledDiv>
            <StyledPar
                fsz="16px"
                fontMediaLap="14px"
                mMargMediaBig="0 0 8px 0"
                lh="24px"
                marg="0 0 18px 0"
                col="#85aeb6"
                ff="Graphik"
            >
                Период выплаты пенсии
            </StyledPar>
            <StyledDiv disp="flex" flexDirectionTab="column">
                {periodsList.map((period) => <StyledDiv
                    key={period.id}
                    disp="flex"
                    align="center"
                    marg="0 10px 0 0"
                    mMargMediaTab="0 0 20px 0"
                >
                <Input
                    type="radio"
                    className="calculator__radio-button"
                    checked={value.id === period.id}
                    value={period}
                    id={period.id}
                    onChange={() => { onChanged(period) }}
                />
                <StyledPar
                    wid="176px"
                    widMediaLap="154px"
                    fsz="14px"
                    lh="24px"
                    col="#fff"
                    marg="0 0 0 10px"
                    ff="Graphik"
                >
                    <label className="radio-label" htmlFor={period.id}>{ period.title }</label>
                </StyledPar>
            </StyledDiv>)}
        </StyledDiv>
    </StyledDiv>
    );
}

export default PensionPaymentPeriodControl;