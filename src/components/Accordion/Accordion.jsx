import { useState, useRef } from 'react';
import { StyledDiv, StyledPar } from '../../styled-components';
import Image from '../../UI/Image/Image';
import Arrow from '../../assests/images/arrow_down.png';
import './Accordion.scss';

function Accordion({ title, body }) {
  const [isOpen, setIsOpen] = useState(false);
  const iconRef = useRef();

  const showAccordionItem = (e) => {
    e.stopPropagation();
    const icon = iconRef.current.nextSibling;
    setIsOpen((value) => !value);
    icon.classList.toggle('accordion_rotate-icon');
  };

  return (
    <StyledDiv
      disp="flex"
      just="space-between"
      bacgr="#fff"
      pad="16px"
      curs="pointer"
      direct="column"
      wid="100%"
      maxWidth="1120px"
      className="accordion"
      onClick={showAccordionItem}
    >
      <StyledDiv disp="flex" just="space-between">
        <StyledPar
          fsz="16px"
          lh="24px"
          fontMediaLap="14px"
          col="#0A5C6D"
          ref={iconRef}
          fw="500"
        >
          {title}
        </StyledPar>
        <Image wid="24px" heig="24px" src={Arrow} alt="arrow-icon" />
      </StyledDiv>
      {isOpen ? (
        <StyledDiv
          bacgr="#fff"
          wid="100%"
          maxWidth="1120px"
          className="accordion__item"
        >
          <StyledPar fsz="16px" lh="24px" fontMediaLap="14px" col="#343944">
            {body}
          </StyledPar>
        </StyledDiv>
      ) : (
        ''
      )}
    </StyledDiv>
  );
}

export default Accordion;
