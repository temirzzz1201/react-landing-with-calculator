import { StyledDiv, StyledPar } from '../../../styled-components';
import Input from '../../../UI/Input/Input';
import { PensionAgesList, Gender } from '../../../packages/npo-calc/constants/index';

function PensionAgeControl({ onChanged, value, gender }) {
    const onAgeChanged = (newValue) => {
        if (onChanged) {
            onChanged(newValue);
        }
    }
    return (
        <StyledDiv
            maxWidth="448px"
            wid="100%"
            mWidMediaBig="408px"
            mWidMediaLap="348px"
            mWidMediaTab="288px"
            marg="23px 0 0 0"
            mMargMediaBig="28px 0 0 0"
            mMargMediaTab="32px 0 0 0"
        >
            <StyledPar
                fsz="16px"
                fontMediaLap="14px"
                lh="24px"
                marg="0 0 16px 0"
                mMargMediaBig="0 0 8px 0"
                col="#85aeb6"
                ff="Graphik"
            >
                Возраст выхода на пенсию
            </StyledPar>
            <StyledDiv disp="flex" flexDirectionTab="column">
                {PensionAgesList.map((el) => <StyledDiv
                    key={el.id}
                    disp="flex"
                    align="center"
                    marg="0 16px 0 0"
                    mMargMediaLap="0"
                    mMargMediaTab="0 0 20px 0"
                >
                    <Input
                        type="radio"
                        id={el.id}
                        className="calculator__radio-button"
                        value={el}
                        name="pensionAge"
                        checked={ el.id === value.id }
                        onChange={() => { onAgeChanged(el) }}
                        disabled={
                            (gender === Gender.Man && el.value === 55) 
                            || (gender === Gender.Woman && el.value === 65) 
                        }
                    />
                    <StyledPar
                        wid="98px"
                        fsz="14px"
                        lh="24px"
                        col="#fff"
                        marg="0 0 0 10px"
                        ff="Graphik"
                    >
                        <label className="radio-label" htmlFor={el.id}>{ el.title }</label>
                    </StyledPar>
                </StyledDiv>)}
            </StyledDiv>
        </StyledDiv>
    )
}

export default PensionAgeControl;