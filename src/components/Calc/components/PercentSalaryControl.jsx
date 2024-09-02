import classNames from 'classnames';
import { StyledDiv, StyledSpan } from '../../../styled-components';
import { ReactComponent as OilPump } from '../../../assests/images/tower-source.svg';
import { PercentSalaryList } from '../../../packages/npo-calc/constants/index';

function PercentSalaryControl({ onChanged, value }) {
  return (
    <StyledDiv
      disp="flex"
      just="space-between"
      align="flex-end"
      marg="0 0 44px 0"
      mMargMediaBig="0 0 33px 0"
      mMargMediaLap="0 0 30px 0"
    >
      {PercentSalaryList.map((item) => (
        <StyledDiv disp="flex" direct="column" align="center" key={item.id}>
          <StyledSpan
            fsz="16px"
            lh="24px"
            ff="Graphik"
            fontMediaTab="14px"
            // col="#fff"
            className={classNames('calculator__title', {
              active: item.id === value.id,
            })}
          >
            {item.title}
          </StyledSpan>
          <StyledDiv
            className={classNames('calculator__tower', {
              active: item.id === value.id,
            })}
          >
            <OilPump
              cursor="pointer"
              alt="oil-pump"
              className={`tap st0 calculator__image calculator__image_${String(
                item.value - 1,
              )}`}
              data-oil-pump={item.value}
              onClick={() => onChanged(item)}
            />
          </StyledDiv>
        </StyledDiv>
      ))}
    </StyledDiv>
  );
}

export default PercentSalaryControl;
