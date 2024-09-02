import { useState } from 'react';
import { StyledButton, StyledDiv, StyledPar } from '../../styled-components';
import './Tabs.scss';

function Tabs({ getTabIndex, value, list }) {
  /* eslint-disable react/jsx-props-no-spreading */
  const items = list || [
    { title: 'Мужчина', id: 1 },
    { title: 'Женщина', id: 2 },
  ];

  const selectedIndex = value ? items.findIndex((el) => el.id === value.id) : 0;

  const [active, setActive] = useState(selectedIndex);

  return (
    <StyledDiv
      className="tabs"
      maxWidth="448px"
      mWidMediaBig="408px"
      mWidMediaTab="348px"
    >
      <StyledPar
        fsz="16px"
        fontMediaLap="14px"
        lh="24px"
        marg="0 0 28px 0"
        mMargMediaBig="0 0 16px 0"
        col="#85AEB6"
      >
        Укажите пол
      </StyledPar>
      <StyledDiv className="tabs__wrapper">
        {items.map((item, index) => (
          <StyledButton
            className={`tabs__tablinks ${index === active ? 'active' : ''}`}
            onClick={(e) => [
              getTabIndex(item),
              setActive(+e.target.dataset.index),
            ]}
            data-index={index}
            key={item.id}
            bb="1px solid #85aeb6"
            fontMediaBig="14px"
            lhMediaBig="24px"
            pad="0 0 4px 0"
          >
            {item.title}
          </StyledButton>
        ))}
      </StyledDiv>
      <StyledDiv>
        {' '}
        {items[active] && <StyledDiv {...items[active]} />}
      </StyledDiv>
    </StyledDiv>
  );
}

export default Tabs;
