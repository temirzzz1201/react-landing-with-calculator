import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useRef } from 'react';
import { StyledDiv, StyledPar } from '../../styled-components';
import './InputSlider.scss';

function InputSlider({ salary, getSalary, maxValue, minValue }) { 
  const ghostDiv = useRef(null);
  const inputWidth = ghostDiv.current ? window.getComputedStyle(ghostDiv.current).width : 0;
  const onInputHandler = (e) => {
    const value = +e.target.value;
    getSalary(value);
  }
  return (
    <StyledDiv
      className="input-slider"
      disp="flex"
      direct="column"
      wid="448px"
      widMediaBig="408px"
      widMediaLap="348px"
      mWidMediaTab="288px"
    >
      <StyledPar
        className="input-slider__title"
        fsz="16px"
        fontMediaLap="14px"
        lh="24px"
        col="#85AEB6"
        marg="0 0 16px 0"
        mMargMediaBig="0 0 8px 0"
      >
        Заработная плата в месяц
      </StyledPar>
      <StyledDiv fsz="24px" lh="32px" col="#fff" marg="0 0 8px 0">
        <input style={{width: inputWidth}} type="number" min="0" max={maxValue}  value={salary} onInput={onInputHandler} />
        <span>₽</span>
        <div style={{display: 'inline-block', visibility: 'hidden'}} ref={ghostDiv}>{salary}</div>
      </StyledDiv>
      <Slider
        className="input-slider__slider"
        value={salary}
        onChange={(val) => {getSalary(val)}}
        handleStyle={{
          borderColor: '#E1E2E3',
          height: 12,
          width: 12,
          marginLeft: 3,
          marginTop: -4,
          backgroundColor: '#fff',
        }}
        defaultValue={30000}
        min={minValue}
        max={maxValue}
        step={500}
        trackStyle={{ color: '#fff', height: '2px' }}
        railStyle={{ color: '#fff', height: '1px' }}
      />
    </StyledDiv>
  );
}

export default InputSlider;
