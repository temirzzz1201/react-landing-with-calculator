import { StyledDiv } from '../../../styled-components';
import InfoBlock from '../../InfoBlock/InfoBlock';

function CalcResult({ contributionAmount, totalContributions, totalAccumulatedFundsAmount, pension }) {
    return (
        <StyledDiv
            disp="flex"
            bacgr="#fff"
            maxWidth="1120px"
            wid="100%"
            marg="0 0 32px 0"
            mMargMediaBig="0 0 24px 0"
            flexDirectionLap="column"
            pad="32px 37px"
            mPadMediaBig="20px"
            heig="176px"
            heigMediaBig="152px"
            heigMediaLap="264px"
            heigMediaTab="470px"
        >
            <StyledDiv
                disp="flex"
                flexDirectionTab="column"
                mMargMediaLap="0 0 32px 0"
                mMargMediaTab="0 0 24px 0"
            >
                <StyledDiv
                    disp="flex"
                    direct="column"
                    just="space-between"
                    mMargMediaTab="0 0 24px 0"
                >
                    <InfoBlock
                        classname=" info-block _with_oil _first"
                        title="Ваш ежеменячный взнос"
                    />
                    <p
                        className="everymonth calculator__output-block"
                    >{contributionAmount}<span>₽</span></p>
                </StyledDiv>
                <StyledDiv disp="flex" direct="column" just="space-between">
                    <InfoBlock
                        classname="info-block _with_oil _second"
                        title="Сумма Ваших взносов"
                    />
                    <p
                        className="totalAmountContributions calculator__output-block"
                    >{totalContributions}<span>₽</span></p>
                </StyledDiv>
            </StyledDiv>
            <StyledDiv disp="flex" flexDirectionTab="column">
                <StyledDiv
                    disp="flex"
                    direct="column"
                    just="space-between"
                    mMargMediaTab="0 0 24px 0"
                >
                    <InfoBlock
                        classname="info-block _with_oil _third"
                        title="Ваши накопления с учетом доплаты от работодателя и инвестиционного дохода Фонда"
                    />
                    <p
                        className="volumeSavedMeans calculator__output-block"
                    >{totalAccumulatedFundsAmount}<span>₽</span></p>
                </StyledDiv>
                <StyledDiv disp="flex" direct="column" just="space-between">
                    <InfoBlock
                        classname="info-block _with_oil _fourth"
                        title="Ваша ежемесячная корпоративная пенсия "
                    />
                    <p
                        className="yourCorporatePension calculator__output-block"
                    >{pension}<span>₽</span></p>
                </StyledDiv>
            </StyledDiv>
        </StyledDiv>
    );
}

export default CalcResult;