import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import { StyledDiv, StyledPar, StyledSpan } from '../../styled-components';
import './InfoBlock.scss';

function InfoBlock({
  title,
  itemFirst,
  itemSecond,
  isSpan,
  props,
  classname,
  tippyValue,
  tippyContent,
  tippyPosition,
  tippyArrom,
  curancy,
}) {
  return (
    /* eslint-disable react/jsx-props-no-spreading */

    <StyledDiv className={classname} {...props}>
      <StyledDiv className="info-block__title-wrapper">
        <StyledPar className="first-paragraph">{title}</StyledPar>

        {tippyValue === true ? (
          <Tooltip
            position={tippyPosition}
            arrow={tippyArrom}
            title={tippyContent}
            className="info-block__tippy-message"
          >
            {' '}
          </Tooltip>
        ) : (
          ''
        )}
      </StyledDiv>
      {isSpan ? (
        <StyledPar className="second-paragraph">
          <StyledSpan>{isSpan}</StyledSpan>

          {itemFirst}
        </StyledPar>
      ) : (
        <StyledDiv>
          <StyledPar className="second-paragraph">
            {itemFirst}{' '}
            {curancy ? (
              <StyledSpan
                fsz="20px"
                lh="28px"
                pos="relative"
                bottom="25px"
                fw="500"
              >
                {curancy}
              </StyledSpan>
            ) : (
              ''
            )}
          </StyledPar>
          <StyledPar className="third-paragraph">{itemSecond}</StyledPar>
        </StyledDiv>
      )}
    </StyledDiv>
  );
}

export default InfoBlock;
