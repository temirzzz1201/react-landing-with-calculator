import { useEffect, useRef, useState } from 'react';
import ru from 'date-fns/locale/ru';
// import dayjs from 'dayjs';
import DatePicker, { registerLocale } from 'react-datepicker';
import Image from '../../UI/Image/Image';
import { StyledButton, StyledDiv, StyledPar } from '../../styled-components';
import CalcImg from '../../assests/images/ui/calendar.png';
import './Calendar.scss';
import 'react-datepicker/dist/react-datepicker.css';

registerLocale('ru', ru);

function CalcCalendar({ value, getCalendarDate }) {
  const [dateState, setDateState] = useState(value);
  const calendarRef = useRef(null);
  const [startOpen, setStartOpen] = useState(false);

  useEffect(() => {
    getCalendarDate(dateState);
  }, [dateState]);

  const changeDate = (e) => {
    setDateState(e);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setStartOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <StyledDiv
      className="calendar"
      wid="448px"
      mWidMediaBig="408px"
      mWidMediaLap="348px"
      mWidMediaTab="288px"
    >
      <StyledPar
        fsz="16px"
        lh="24px"
        fontMediaLap="14px"
        marg="0 0 20px 0"
        mMargMediaBig="0 0 8px 0"
        col="#85aeb6"
      >
        Укажите дату Вашего рождения
      </StyledPar>
      <StyledDiv
        bBottom="1px solid #fff"
        disp="flex"
        just="space-between"
        className="calendar__wrapper"
        ref={calendarRef}
      >
        <DatePicker
          className="calendar__block"
          locale="ru"
          selected={dateState}
          onChange={(date) => changeDate(date)}
          dateFormat="dd.MM.yyyy"
          preventOpenOnFocus={true}
          open={startOpen}
          showMonthDropdown
          showYearDropdown
        />
        <StyledButton
          className="calendar__btn"
          bord="none"
          onClick={() => setStartOpen(!startOpen)}
        >
          <Image src={CalcImg} alt="button-icon" />
        </StyledButton>
      </StyledDiv>
    </StyledDiv>
  );
}

export default CalcCalendar;
