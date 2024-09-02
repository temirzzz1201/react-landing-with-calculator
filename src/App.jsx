/* eslint-disable */

import {
  StyledDiv,
  StyledFooter,
  StyledPar,
  StyledSpan,
} from './styled-components';
import Header from './components/Header/Header';
import InfoBlock from './components/InfoBlock/InfoBlock';
import LinesBlock from './components/LinesBlock/LinesBlock';
import Сurve from './components/Сurve/Сurve';
import Image from './UI/Image/Image';
import Video from './UI/Video/Video';
import VideoPoster from './assests/images/video-cover.jpg';
import PlayButton from './assests/images/ui/play-button.svg';
import VideoSource from './assests/images/corporate.mp4';
import Workers from './assests/images/workers.jpg';
import TriangleFirst from './assests/images/tri-first.svg';
import TriangleSecond from './assests/images/tri-second.svg';
import BodyTry from './assests/images/ui/body-triangle.svg';
import Workers2 from './assests/images/workers2.jpg';
import TriSmallFirst from './assests/images/tri-small-first.svg';
import TriSmallSec from './assests/images/tri-small-sec.svg';
import Cup from './assests/images/cup.svg';
import Cop from './assests/images/cop.svg';
import Factory from './assests/images/factory.jpg';
import Button from './UI/Button/Button';
import Calc from './components/Calc/Calc';
import DottedLine from './components/DottedLine/DottedLine';
import Link from './UI/Link/Link';

function App() {
  return (
    <StyledDiv disp="flex" direct="column" align="center" className="App">
      <Header />
      <StyledDiv mPadMediaLap="0 24px" mPadMediaTab="0 16px">
        <StyledDiv
          disp="flex"
          wid="100%"
          maxWidth="1120px"
          bacgr="#fff"
          marg="0 auto 56px"
          mMargMediaLap="0 auto 32px"
          justyfyLap="flex-start"
          flexDirectionLap="column"
          mWidMediaBig="840px"
        >
          <StyledPar
            fsz="28px"
            lh="32px"
            marg="0 32px 0 0"
            col=" #9A9CA2"
            tt="uppercase"
            maxWidth="448px"
            mWidMediaBig="336px"
            fontMediaBig="20px"
            lhMediaBig="28px"
            mWidMediaLap="475px"
            mMargMediaLap="0 0 16px 0"
            ff="Graphik"
          >
            <StyledSpan
              lh="32px"
              col="#DA2A35"
              fsz="28px"
              tt="uppercase"
              fontMediaBig="20px"
              lineHeightBig="28px"
              ff="Graphik"
            >
              Группа компаний «Компания»
            </StyledSpan>{' '}
            позаботилась о будущей пенсии своих работников
          </StyledPar>
          <StyledPar
            maxWidth="640px"
            mWidMediaBig="480px"
            fsz="24px"
            lh="32px"
            col="#343944"
            fontMediaBig="20px"
            lhMediaBig="28px"
            fontMediaLap="16px"
            lhMediaLap="24px"
            mWidMediaLap="100%"
            ff="Graphik"
          >
            С 2004 года на предприятиях Группы действует единая система
            негосударственного пенсионного обеспечения, основанная на принципе
            долевого участия, при котором работник и работодатель совместно
            участвуют в накоплении средств негосударственной пенсии
          </StyledPar>
        </StyledDiv>

        <StyledDiv
          wid="100%"
          disp="flex"
          just="flex-end"
          maxWidth="1120px"
          mWidMediaBig="840px"
          marg="0 auto 56px"
          mMargMediaLap="0 0 48px 0"
          mMargMediaMob="0 0 32px 0"
          justyfyLap="center"
        >
          <Image
            src={Workers}
            alt="workers"
            wid="736px"
            heig="356px"
            heigMediaBig="266px"
            mWidMediaBig="552px"
            heigMediaLap="auto"
            mWidMediaLap="100%"
            mWidMediaMob="100%"
            heigMediaMob="190px"
          />
        </StyledDiv>

        <StyledDiv
          pos="relative"
          wid="100%"
          disp="flex"
          maxWidth="1120px"
          just="center"
          marg="0 auto 48px"
          minHeig="188px"
          bBottom="0.5px solid #91B1B6"
          mWidMediaBig="840px"
          maxHeightMediaBig="174px"
          mMargMediaBig="0 auto 32px"
        >
          <Image
            src={TriangleFirst}
            pos="absolute"
            bottom="56px"
            right="0"
            wid="28px"
            heig="28px"
            alt="arrow"
            mBottomMediaTab="32px"
          />
          <StyledPar
            maxWidth="1065px"
            marg="20px 0 0 0"
            tAlign="center"
            fsz="28px"
            lh="32px"
            col=" #9A9CA2"
            fontMediaBig="20px"
            lhMediaBig="28px"
            mWidMediaBig="785px"
            mWidMediaLap="673px"
            mWidMediaMob="280px"
            pad="0 0 32px 0"
            mPadMediaMob="0 0 48px 0"
            tt="uppercase"
            ff="Graphik"
          >
            Долевая пенсионная программа позволяет сформировать
            негосударственную пенсию для комфортного выхода на заслуженный отдых
          </StyledPar>
          <Image
            src={TriangleSecond}
            pos="absolute"
            top="0"
            left="0"
            wid="28px"
            heig="28px"
            alt="arrow"
          />
        </StyledDiv>

        <StyledDiv
          maxWidth="1120px"
          disp="flex"
          marg="0 auto 114px"
          mMargMediaLap="0 0 56px 0"
          mMargMediaTab="0 0 32px 0"
          mWidMediaBig="840px"
          just="space-between"
          flexDirectionTab="column"
        >
          <InfoBlock
            classname="info-block _in-info-block"
            title="43 000"
            itemFirst="РАБОТНИКОВ"
            itemSecond="уже участвуют в долевой пенсионной программе"
            tippyValue
            tippyContent="По внутренним данным
            Фонда на 31.03.2022"
            tippyPosition="bottom"
            tippyArrom
          />
          <InfoBlock
            classname="info-block _in-info-block"
            title="46 000"
            itemFirst="РАБОТНИКОВ"
            itemSecond="получают негосударственную пенсию в НПФ «Компания»"
            tippyValue
            tippyContent="По внутренним данным
            Фонда на 31.03.2022"
            tippyPosition="bottom"
            tippyArrom
          />
          <InfoBlock
            classname="info-block _in-info-block"
            title="19 МЛРД  ₽"
            itemFirst="негосударственных пенсий "
            itemSecond="выплачено Фондом работникам ГК «Компания»"
            tippyValue
            tippyContent="По внутренним данным
            Фонда на 31.03.2022"
            tippyPosition="bottom"
            tippyArrom
          />
        </StyledDiv>
      </StyledDiv>

      <StyledDiv
        disp="flex"
        just="center"
        justifyTab="flex-start"
        wid="100%"
        bacgr="#F4F4F4"
        mPadMediaLap="0 24px"
        mPadMediaTab="0 16px"
      >
        <StyledDiv disp="flex" align="space-between">
          <StyledDiv
            maxWidth="1120px"
            wid="100%"
            bacgr="#F4F4F4"
            pos="relative"
            marg="126px 24px 0 24px"
            mWidMediaBig="840px"
            mMargMediaLap="56px 0 0 0"
            mMargMediaTab="32px 0 0 0"
          >
            <StyledPar
              ff="Druk"
              fsz="48px"
              lh="48px"
              fw="500"
              col="#0A5C6D"
              marg="0 0 48px 0"
              mMargMediaLap="0 0 32px 0"
              fontMediaBig="44px"
              lhMediaBig="44px"
              fontMediaLap="32px"
              lhMediaLap="32px"
            >
              КАК РАБОТАЕТ ПРОГРАММА
            </StyledPar>
            <StyledDiv
              disp="flex"
              marg="0 0 128px 0"
              mMargMediaBig="0 0 80px 0"
              mMargMediaLap="0 0 56px 0"
              flexWrapLap="wrap"
              flexDirectionTab="column"
            >
              <StyledDiv
                disp="flex"
                flexDirectionTab="column"
                marg="0 32px 0 0"
                mMargMediaBig="0 24px 0 0"
                mMargMediaLap="0 0 32px 0"
              >
                <InfoBlock
                  classname="info-block _left-lined"
                  title="01"
                  itemSecond="Вы заключаете договор НПФ  «Компания»"
                />
                <InfoBlock
                  classname="info-block _left-lined"
                  title="02"
                  itemSecond="ВЫ Перечисляете взносы в размере 1 — 4% от заработной платы на свой пенсионный счет"
                />
              </StyledDiv>

              <StyledDiv disp="flex" flexDirectionTab="column">
                <InfoBlock
                  classname="info-block _left-lined"
                  title="03"
                  itemSecond="Группа компаний «Лукойл» удваивает Ваши взносы"
                />
                <StyledDiv
                  wid="256px"
                  heig="225px"
                  bLeft="1px solid #0A5C6D"
                  pad="0 0 0 12px"
                  disp="flex"
                  direct="column"
                  just="space-between"
                  pos="relative"
                  widMediaBig="192px"
                  widMediaLap="286px"
                  widMediaTab="100%"
                  mHeigMediaLap="175px"
                >
                  <StyledPar
                    fsz="80px"
                    lh="80px"
                    fw="500"
                    ff="Druk"
                    col="#0A5C6D"
                    fontMediaBig="64px"
                    lhMediaBig="64px"
                  >
                    04
                  </StyledPar>

                  <InfoBlock
                    classname="info-block _align"
                    tippyValue
                    tippyContent="В случае положительного результата
                      размещения пенсионных резервов.
                      Возможно увеличение
                      или уменьшение дохода"
                    tippyPosition="bottom"
                    tippyArrom
                    title="НПФ «Компания» начисляет инвестиционный доход"
                  />
                </StyledDiv>
              </StyledDiv>
            </StyledDiv>

            <StyledDiv
              wid="100%"
              pos="relative"
              marg="0 0 80px 0"
              disp="flex"
              just="center"
              align="center"
              maxWidth="1120px"
              mWidMediaBig="840px"
              flexDirectionLap="column"
              alignLap="flex-start"
              mMargMediaLap="0 0 56px 0"
              mMargMediaTab="0 0 52px 50%"
              mMargMediaMob="0 0 52px 0%"
              transfXTab="-50%"
              transfXmob="0"
              mWidMediaTab="260px"
            >
              <Сurve />
              <InfoBlock
                classname="info-block _with-plusses"
                title="Ваш взнос"
                itemSecond="1 — 4% от заработной платы "
              />
              <StyledDiv
                fsz="41px"
                fontMediaTab="24px"
                fw="500"
                col="#0A5C6D"
                marg="0 5px"
                mMargMediaLap="0 0 0 156px"
                mMargMediaTab="0 0 0 119px"
              >
                +
              </StyledDiv>
              <InfoBlock
                classname="info-block _with-plusses"
                title="Взнос компании"
                itemSecond="х2 Ваши взносы"
              />
              <StyledDiv
                fsz="41px"
                fw="500"
                fontMediaTab="24px"
                col="#0A5C6D"
                marg="0 5px"
                mMargMediaLap="0 0 0 156px"
                mMargMediaTab="0 0 0 119px"
              >
                +
              </StyledDiv>
              <InfoBlock
                classname="info-block _with-plusses"
                title="Инвестиционный доход от НПФ «Компания»"
              />

              <LinesBlock
                isFork
                pos="absolute"
                left="50%"
                transfX="-50%"
                top="174px"
                mTopMediaBig="137px"
                mWidMediaBig="576px"
                rotateLap="-90deg"
                mWidMediaLap="312px"
                mHeigMediaLap="46px"
                mTopMediaLap="200px"
                mLeftMediaLap="213px"
              />
            </StyledDiv>
            <StyledDiv
              marg="0 0 120px 0"
              disp="flex"
              just="center"
              align="center"
              positionLap="absolute"
              mBottomMediaLap="253px"
              mLeftMediaLap="433px"
              positionTab="static"
              justifyTab="center"
              justifyMob="center"
              mMargMediaBig="0 0 80px 0"
              mMargMediaLap="0 0 56px 0"
            >
              <InfoBlock
                classname="info-block _bordered"
                title="Ваша негосударственная пенсия"
              />
            </StyledDiv>
            <StyledPar
              maxWidth="630px"
              marg="0 0 80px 0"
              ff="Druk"
              fsz="48px"
              lh="48px"
              fw="500"
              col="#0A5C6D"
              fontMediaLap="32px"
              lhMediaLap="32px"
              mWidMediaLap="511px"
              mMargMediaBig="0 0 32px 0"
              mMargMediaTab="0 0 24px 0"
            >
              ПОСМОТРИТЕ РОЛИК О ДОЛЕВОЙ ПЕНСИОННОЙ ПРОГРАММЕ
            </StyledPar>
            <Image
              pos="absolute"
              bottom="-90px"
              zInd="98"
              src={BodyTry}
              alt="body-img"
              mBottomMediaBig="-55px"
              widMediaBig="80px"
              heigMediaBig="80px"
            />
          </StyledDiv>
        </StyledDiv>
      </StyledDiv>
      <Video
        withBtn
        buttonProp={PlayButton}
        poster={VideoPoster}
        muted
        controls={false}
        videoSourse={VideoSource}
        type="video/mp4;"
      />

      <StyledDiv mPadMediaLap="0 24px" mPadMediaTab="0 16px" wid="100%">
        <StyledDiv
          pos="relative"
          maxWidth="1120px"
          wid="100%"
          disp="flex"
          direct="column"
          marg="0 auto 120px"
          mMargMediaBig="0 auto 80px "
          mMargMediaLap="0 auto 56px "
          mMargMediaTab="0 auto 32px "
          mWidMediaBig="840px"
        >
          <LinesBlock
            wid="790px"
            pos="absolute"
            top="734px"
            mTopMediaBig="593px"
            mTopMediaLap="531px"
            widMediaBig="685px"
            widMediaLap="564px"
            displayMediaTab="none"
          />
          <StyledDiv
            marg="0 0 80px 0"
            disp="flex"
            just="space-between"
            mMargMediaBig="0 0 56px 0"
            mMargMediaLap="0 0 84px 0"
            mMargMediaTab="0 0 32px 0"
            flexDirectionTab="column"
          >
            <StyledPar
              fsz="64px"
              lh="64px"
              col="#0A5C6D"
              ff="Druk"
              fw="500"
              maxWidth="375px"
              fontMediaBig="48px"
              lhMediaBig="48px"
              fontMediaLap="32px"
              lhMediaLap="32px"
              mMargMediaTab="0 0 24px 0"
              widMediaTab="100%"
              marg="0 15px 0 0"
            >
              ПРЕИМУЩЕСТВА ДОЛЕВОЙ ПЕНСИОННОЙ ПРОГРАММЫ
            </StyledPar>
            <Image
              src={Workers2}
              alt="Workers"
              maxWidth="640px"
              heig="256px"
              heigMediaBig="192px"
              widMediaBig="480px"
              heigMediaLap="164px"
              widMediaLap="410px"
              heigMediaTab="auto"
              widMediaTab="1005x"
              mWidMediaTab="288px"
            />
          </StyledDiv>
          <StyledDiv
            disp="flex"
            just="space-between"
            flexWrapTab="wrap"
            marg="0 0 76px 0"
            mMargMediaBig="0 0 48px 0"
            mMargMediaTab="0 0 32px 0"
            ff="Graphik"
          >
            <StyledPar
              fsz="36px"
              lh="36px"
              col="#0A5C6D"
              ff="Druk"
              fw="500"
              wid="100%"
              mWid="347px"
              fontMediaBig="28px"
              lhMediaBig="28px"
              widMediaTab="100%"
              tt="uppercase"
            >
              Инвестиционная
              <br /> привлекательность
            </StyledPar>
            <DottedLine />

            <StyledDiv
              fsz="24px"
              lh="32px"
              ff="Graphik"
              col="#343944"
              maxWidth="640px"
              mWidMediaBig="410px"
              mWidMediaTab="100%"
              fontMediaBig="20px"
              lhMediaBig="28px"
              fontMediaLap="16px"
              lhMediaLap="24px"
            >
              Ваши пенсионные взносы удваиваются за счет взносов работодателя и
              увеличиваются за счет инвестиционного дохода от Фонда.{' '}
              <InfoBlock
                classname="info-block _simple _first"
                tippyValue
                tippyContent="В случае положительного результата
                размещения пенсионных резервов.
                Возможно увеличение
                или уменьшение дохода"
                tippyPosition="bottom"
                tippyArrom
              />
              Вы можете получить социальный налоговый вычет от суммы личных
              взносов
              <InfoBlock
                classname="info-block _simple _second"
                tippyValue
                tippyContent="Вы вправе получить социальный налоговый вычет в размере 13% от суммы уплаченных Вами пенсионных взносов, не превышающих 120 000 рублей в год, в соответствии с пп.4 п.1 и п.2  ст.219 Налогового кодекса РФ"
                tippyPosition="bottom"
                tippyArrom
              />
            </StyledDiv>
          </StyledDiv>
          <StyledDiv
            disp="flex"
            just="space-between"
            flexWrapTab="wrap"
            marg="0 0 72px 0"
            mMargMediaBig="0 0 48px 0"
            mMargMediaTab="0 0 32px 0"
            ff="Graphik"
          >
            <StyledPar
              fsz="36px"
              lh="36px"
              col="#0A5C6D"
              ff="Druk"
              fw="500"
              fontMediaBig="28px"
              lhMediaBig="28px"
              widMediaTab="100%"
              tt="uppercase"
            >
              Доступность
            </StyledPar>
            <DottedLine />

            <StyledPar
              fsz="24px"
              lh="32px"
              ff="Graphik"
              col="#343944"
              maxWidth="640px"
              mWidMediaBig="410px"
              mWidMediaTab="100%"
              fontMediaBig="20px"
              lhMediaBig="28px"
              fontMediaLap="16px"
              lhMediaLap="24px"
            >
              Участие в программе не требует больших вложений: минимальный взнос
              – всего 1% от заработной платы
            </StyledPar>
          </StyledDiv>

          <StyledDiv
            disp="flex"
            just="space-between"
            flexWrapTab="wrap"
            marg="0 0 72px 0"
            mMargMediaBig="0 0 48px 0"
            mMargMediaLap="0 0 60px 0"
            mMargMediaTab="0 0 32px 0"
            ff="Graphik"
          >
            <StyledPar
              fsz="36px"
              lh="36px"
              col="#0A5C6D"
              ff="Druk"
              fw="500"
              fontMediaBig="28px"
              lhMediaBig="28px"
              widMediaTab="100%"
              tt="uppercase"
            >
              Удобство
            </StyledPar>
            <DottedLine />

            <StyledPar
              fsz="24px"
              lh="32px"
              ff="Graphik"
              col="#343944"
              maxWidth="640px"
              mWidMediaBig="410px"
              mWidMediaTab="100%"
              fontMediaBig="20px"
              lhMediaBig="28px"
              fontMediaLap="16px"
              lhMediaLap="24px"
            >
              Перечисление взносов и получение налогового вычета может
              производиться через бухгалтерию Вашего работодателя
            </StyledPar>
          </StyledDiv>

          <StyledDiv
            disp="flex"
            just="space-between"
            flexWrapTab="wrap"
            marg="0 0 72px 0"
            mMargMediaBig="0 0 40px 0"
            mMargMediaLap="0 0 56px 0"
            mMargMediaTab="0 0 32px 0"
            ff="Graphik"
          >
            <StyledPar
              fsz="36px"
              lh="36px"
              col="#0A5C6D"
              ff="Druk"
              fw="500"
              fontMediaBig="28px"
              lhMediaBig="28px"
              widMediaTab="100%"
              tt="uppercase"
            >
              Прозрачность
            </StyledPar>
            <DottedLine />

            <StyledPar
              fsz="24px"
              lh="32px"
              ff="Graphik"
              col="#343944"
              maxWidth="640px"
              mWidMediaBig="410px"
              mWidMediaTab="100%"
              fontMediaBig="20px"
              lhMediaBig="28px"
              fontMediaLap="16px"
              lhMediaLap="24px"
            >
              Вы всегда можете проверить состояние своего пенсионного счета в
              Личном кабинете клиента на сайте НПФ «Компания»
            </StyledPar>
          </StyledDiv>

          <StyledDiv
            disp="flex"
            just="space-between"
            flexWrapTab="wrap"
            ff="Graphik"
          >
            <StyledPar
              fsz="36px"
              lh="36px"
              col="#0A5C6D"
              ff="Druk"
              fw="500"
              fontMediaBig="28px"
              lhMediaBig="28px"
              widMediaTab="100%"
              tt="uppercase"
            >
              Уверенность
            </StyledPar>
            <DottedLine />
            <StyledDiv
              fsz="24px"
              lh="32px"
              ff="Graphik"
              col="#343944"
              maxWidth="640px"
              mWidMediaBig="410px"
              mWidMediaTab="100%"
              fontMediaBig="20px"
              lhMediaBig="28px"
              fontMediaLap="16px"
              lhMediaLap="24px"
            >
              Ваши накопленные средства могут быть унаследованы родными и
              близкими{' '}
              <InfoBlock
                classname="info-block _simple _with-dots"
                tippyValue
                tippyContent="В соответствии с Пенсионными
              правилами Фонда и условиями
              договора негосударственного
              пенсионного обеспечения."
                tippyPosition="bottom"
                tippyArrom
              />
            </StyledDiv>
          </StyledDiv>
        </StyledDiv>
      </StyledDiv>

      <StyledDiv
        wid="100%"
        bacgr="#0A5C6D"
        marg="0 0 120px 0"
        mMargMediaBig="0 0 80px 0"
        mMargMediaLap="0 0 56px 0"
        mMargMediaTab="0 0 32px 0"
        mPadMediaLap="0 24px"
        mPadMediaTab="0 16px"
      >
        <StyledDiv
          wid="100%"
          maxWidth="1120px"
          marg="0 auto 120px"
          mMargMediaBig="0 auto 80px"
          mMargMediaLap="0 auto 56px"
          mMargMediaTab="0 auto 32px"
          mWidMediaBig="840px"
        >
          <StyledPar
            col="#fff"
            ff="Druk"
            fsz="64px"
            lh="64px"
            marg="120px 0 10px 0"
            mMargMediaBig="80px 0 16px 0"
            mMargMediaLap="56px 0 16px 0"
            mMargMediaTab="32px 0 16px 0"
            fontMediaBig="44px"
            lhMediaBig="44px"
            fontMediaLap="32px"
            lhMediaLap="32px"
          >
            РАСCЧИТАТЬ МОЮ ПЕНСИЮ
          </StyledPar>
          <StyledPar
            col="#fff"
            fsz="20px"
            lh="28px"
            fontMediaBig="16px"
            lhMediaBig="24px"
            marg="0 0 32px 0"
            mMargMediaBig="0 0 48px 0"
            mMargMediaLap="0 0 32px 0"
            ff="Graphik"
          >
            Выберите, какой размер дополнительной пенсии Вы хотите получать
          </StyledPar>
          <Calc />
        </StyledDiv>
      </StyledDiv>

      <StyledDiv mPadMediaLap="0 24px" mPadMediaTab="0 16px" wid="100%">
        <StyledDiv
          wid="100%"
          maxWidth="1120px"
          mWidMediaBig="840px"
          marg="0 auto"
        >
          <StyledPar
            marg="0 0 40px 0"
            ff="Druk"
            fsz="64px"
            lh="64px"
            col="#0A5C6D"
            tAlign="left"
            fontMediaBig="44px"
            lhMediaBig="44px"
            fontMediaTab="32px"
            lhMediaTab="32px"
            mMargMediaBig="0 0 32px 0"
          >
            <StyledSpan
              ff="Druk"
              fsz="64px"
              lh="64px"
              fontMediaBig="44px"
              lhMediaBig="44px"
              fontMediaTab="32px"
              lineHeightTab="32px"
              col="#343944"
            >
              ВАША ПЕНСИЯ{' '}
            </StyledSpan>
            В НАДЕЖНОМ ФОНДЕ
          </StyledPar>

          <StyledDiv
            disp="flex"
            marg="0 0 48px 0"
            mMargMediaBig="0 0 58px 0"
            mMargMediaBLap="0 0 54px 0"
            mMargMediaTab="0 0 24px 0"
            flexWrapTab="wrap"
          >
            {/* <InfoBlock
              classname="info-block _left-bordered"
              isSpan="НПФ «Компания»"
              itemFirst="имеет максимальный рейтинг надежности и входит в ТОП-5 НПФ по ключевым показателям"
            /> */}
            <StyledDiv
              bLeft="4px solid #da2a35"
              ff="Graphik"
              fsz="28px"
              lh="32px"
              col="#9a9ca2"
              tt="uppercase"
              pad="0 0 0 32px"
              marg="0 32px 0 0"
              mMargMediaBig="0 28px 0 0"
              mMargMediaTab="0 0 24px 0"
              mPadMediaTab="0 0 0 16px"
              fontMediaBig="20px"
              lhMediaBig="28px"
            >
              <StyledDiv marg="8px 0 0 0">
                <StyledSpan
                  ff="Graphik"
                  fsz="28px"
                  lh="32px"
                  col="#da2a35"
                  tt="uppercase"
                  fontMediaBig="20px"
                  lhMediaBig="28px"
                >
                  НПФ «Компания»{' '}
                </StyledSpan>
                имеет максимальный рейтинг надежности и входит в ТОП-5
                <InfoBlock
                  tippyValue
                  tippyContent="По объему активов по данным Банка России на 30.09.2021г."
                  tippyPosition="bottom"
                  tippyArrom
                  classname="info-block _simple _inlain"
                />{' '}
                НПФ по ключевым показателям
              </StyledDiv>
            </StyledDiv>
            <StyledDiv
              disp="flex"
              align="center"
              just="center"
              pos="relative"
              wid="100%"
              maxWidth="448px"
              heig="110px"
              mWidMediaTab="unset"
            >
              <Image
                pos="absolute"
                top="0"
                left="0"
                src={TriSmallFirst}
                alt="logo"
              />
              <StyledPar
                fsz="24px"
                lh="32px"
                fontMediaBig="20px"
                lhMediaBig="28px"
                col="#343944"
                tAlign="center"
                ff="Graphik"
              >
                ТОП-5 НПФ
                <br /> по ключевым показателям
              </StyledPar>
              <Image
                pos="absolute"
                bottom="0"
                right="0"
                src={TriSmallSec}
                alt="logo"
              />
            </StyledDiv>
          </StyledDiv>

          <InfoBlock
            tippyValue
            tippyContent="В соответствии с внутренними
        данными Фонда на 31.12.2021"
            tippyPosition="bottom"
            tippyArrom
            classname="info-block _title-only"
            title="Ключевые показатели фонда"
          />

          <StyledDiv
            wid="100%"
            maxWidth="1120px"
            disp="flex"
            fWrap="wrap"
            mWidMediaBig="840px"
            justyfyBig="center"
            flexDirectionTab="column"
            marg="0 0 48px 0"
            mMargMediaBig="0 0 40px 0"
            mMargMediaTab="0 0 32px 0"
          >
            <InfoBlock
              title="7,5 МЛН"
              itemFirst="ЧЕЛОВЕК"
              itemSecond="формируют пенсию в Фонде"
              classname="info-block _in-greed"
            />
            <InfoBlock
              title="149,7 ТЫС"
              itemFirst="УЧАСТНИКОВ"
              itemSecond="получают негосударственную пенсию"
              classname="info-block _in-greed"
            />
            <InfoBlock
              title="619,3 МЛРД"
              itemFirst="РУБЛЕЙ"
              itemSecond="совокупный объем активов"
              classname="info-block _in-greed _short"
            />

            <InfoBlock
              title="521 ТЫС"
              itemFirst="УЧАСТНИКОВ"
              itemSecond="формируют негосударственную пенсию"
              classname="info-block _in-greed "
            />
            <InfoBlock
              title="67,9 МЛРД "
              itemFirst="РУБЛЕЙ"
              itemSecond="объем пенсионных резервов"
              classname="info-block _in-greed "
            />
          </StyledDiv>
        </StyledDiv>
      </StyledDiv>

      <StyledDiv mPadMediaBig="0 24px" mPadMediaTab="0 16px" wid="100%">
        <StyledDiv
          wid="100%"
          maxWidth="1120px"
          marg="0 auto 120px"
          mWidMediaBig="840px"
          mMargMediaLap="0 auto 56px"
          mMargMediaTab="0 auto 32px"
        >
          <StyledDiv
            disp="flex"
            // flexWrapTab="wrap"
            flexDirectionTab="column"
            bBottom="1px solid #91B1B6"
            marg="0 0 32px 0"
            mMargMediaTab="0 0 16px 0"
          >
            <Image
              pad="0 0 32px 0"
              mPadMediaTab="0 0 8px 0"
              widMediaBig="56px"
              widMediaTab="40px"
              src={Cup}
              alt="cup"
            />{' '}
            <StyledDiv
              fsz="24px"
              lh="32px"
              pad="0 0 40px 34px"
              mPadMediaBig="0 0 32px 32px"
              fontMediaBig="20px"
              lhMediaBig="28px"
              fontMediaLap="16px"
              lhMediaLap="24px"
              mPadMediaLap="0 0 40px 32px"
              mPadMediaTab="0 0 16px 0"
              col="#343944"
              ff="Graphik"
            >
              Устойчивость и надежность Фонда подтверждена рейтингом агентства
              «Эксперт РА» на уровне ruААA
              <InfoBlock
                tippyValue
                tippyContent="Последняя рейтинговая оценка от 03.09.2021.
              ruААА — это максимальный уровень финансовой
              надежности и устойчивости по национальной
              шкале Агентства для Российской Федерации."
                tippyPosition="bottom"
                tippyArrom
                classname="info-block _simple _with-cup"
              />{' '}
              . Прогноз по рейтингу — стабильный
            </StyledDiv>
          </StyledDiv>
          <StyledDiv
            disp="flex"
            align="flex-start"
            // flexWrapTab="wrap"
            flexDirectionTab="column"
          >
            <Image
              mPadMediaBig="0 0 32px 0"
              mPadMediaTab="0 0 8px 0"
              widMediaBig="56px"
              widMediaTab="40px"
              src={Cop}
              alt="cop"
            />{' '}
            <InfoBlock />
            <StyledDiv
              pad="0 0 40px 34px"
              fsz="24px"
              lh="32px"
              fontMediaBig="20px"
              lhMediaBig="28px"
              fontMediaLap="16px"
              lhMediaLap="24px"
              mPadMediaLap="0 0 40px 32px"
              col="#343944"
              mPadMediaBig="0 0 0 32px"
              mPadMediaTab="0 0 0 0"
              ff="Graphik"
            >
              Деятельность Фонда контролируется государством и подлежит
              обязательному лицензированию{' '}
              <InfoBlock
                tippyValue
                tippyContent="Лицензия Банка России № 432 от 20.05.2014"
                tippyPosition="bottom"
                tippyArrom
                classname="info-block _simple _with-cop"
              />
            </StyledDiv>
          </StyledDiv>
        </StyledDiv>
      </StyledDiv>

      <StyledDiv
        disp="flex"
        wid="100%"
        pos="relative"
        maxWidth="1920px"
        marg="0 auto"
      >
        <StyledDiv
          maxHeight="528px"
          mWidMediaBig="644px"
          mHeigMediaBig="375px"
          mHeigMediaMob="unset"
        >
          <Image
            wid="100%"
            heig="auto"
            mWidMediaBig="644px"
            heigMediaBig="375px"
            mWidMediaTab="644px"
            heigMediaTab="446px"
            heigMediaMob="134px"
            mMargMediaMob="0 0 275px 0"
            widMediaMob="320px"
            objFit="cover"
            src={Factory}
            alt="factory"
          />
        </StyledDiv>
        <StyledDiv
          pos="absolute"
          wid="100%"
          maxWidth="1264px"
          heig="424px"
          bacgr="#0A5C6D"
          bottom="0"
          right="0"
          mWidMediaBig="740px"
          mHeigMediaBig="324px"
          mWidMediaLap="620px"
          mHeigMediaLap="280px"
          mWidMediaTab="320px"
          mHeigMediaTab="312px"
        >
          <StyledDiv
            pad="56px 0 56px 56px"
            mPadMediaBig="32px 0 0 32px"
            mPadMediaTab="32px 0 0 16px"
            maxWidth="650px"
            mWidMediaBig="470px"
          >
            <StyledPar
              ff="Druk"
              fsz="64px"
              lh="64px"
              col="#fff"
              marg="0 0 8px 0"
              fontMediaBig="48px"
              lhMediaBig="48px"
              fontMediaLap="32px"
              lhMediaLap="32px"
              mMargMediaLap="0 0 16px 0"
              mWidMediaTab="288px"
            >
              СТАТЬ УЧАСТНИКОМ ПРОГРАММЫ ПРОСТО
            </StyledPar>
            <StyledPar
              fsz="24px"
              lh="32px"
              col="#fff"
              marg="0 0 32px 0"
              fontMediaBig="20px"
              lhMediaBig="28px"
              fontMediaLap="16px"
              lhMediaLap="24px"
              mMargMediaBig="0 0 24px 0"
              mMargMediaTab="0 16px 32px 0"
              ff="Graphik"
            >
              Оформите электронный договор здесь и сейчас. Вам понадобятся
              паспорт и СНИЛС.
              <br /> Это займет не более 5 минут.
            </StyledPar>
            <Button
              wid="256px"
              heig="48px"
              disp="flex"
              align="center"
              just="center"
              bacgr="#DA2A35"
              heigMediaLap="40px"
              widthMediaTab="288px"
            >
              <Link
                col="#fff"
                fsz="16px"
                fontMediaLap="14px"
                ff="Graphik"
                href="#"
                target="_blank"
              >
                Участвовать в программе
              </Link>
            </Button>
          </StyledDiv>
        </StyledDiv>
      </StyledDiv>

      <StyledFooter>
        <StyledDiv
          marg="0 auto"
          wid="100%"
          maxWidth="1120px"
          mWidMediaBig="840px"
          mPadMediaLap="0 24px"
          mPadMediaTab="0 16px"
          flexDirectionTab="column"
        >
          <StyledPar
            ff="Druk"
            fsz="64px"
            lh="64px"
            col="#fff"
            marg="56px 0 32px 0"
            fontMediaBig="44px"
            lhMediaBig="44px"
            fontMediaLap="32px"
            lhMediaLap="32px"
            mMargMediaBig="56px 0 32px 0"
            mMargMediaLap="56px 0 16px 0"
            mMargMediaTab="32px 0 16px 0"
          >
            ОСТАЛИСЬ ВОПРОСЫ?
          </StyledPar>

          <StyledDiv
            disp="flex"
            flexDirectionTab="column"
            alignTab="flex-start"
            marg="0 0 54px 0"
            mMargMediaBig="0 0 24px 0"
            mMargMediaLap="0 0 32px 0"
          >
            <StyledDiv
              disp="flex"
              bLeft="4px solid #DA2A35"
              pad="0 0 0 24px"
              heig="75px"
              heigMediaBig="72px"
              heigMediaLap="64px"
              heigMediaTab="unset"
              mMargMediaTab="0 0 24px 0"
              align="center"
              alignTab="flex-start"
            >
              <StyledPar
                maxWidth="634px"
                mWidMediaBig="528px"
                mWidMediaTab="448px"
                fsz="24px"
                lh="30px"
                col="#fff"
                marg="0 110px 0 0"
                fontMediaBig="20px"
                lhMediaBig="28px"
                fontMediaLap="16px"
                lhMediaLap="24px"
                mMargMediaBig="0 70px 0 0"
                mMargMediaLap="0 86px 0 0"
                mMargMediaTab="0 0 0 0"
                ff="Graphik"
              >
                Получите консультацию по бесплатной горячей линии для
                сотрудников Группы компаний «ЛУКОЙЛ»
              </StyledPar>
            </StyledDiv>
            <Button
              fsz="28px"
              lh="36px"
              col="#343944"
              pad="12px 65px"
              bacgr="#fff"
              bord="none"
              mPadMediaBig="10px 32px"
              fontMediaBig="20px"
              lhMediaBig="28px"
              widthMediaBig="217px"
              heigMediaBig="48px"
              widthMediaLap="162px"
              heigMediaLap="40px"
              mPadMediaLap="8px 17px"
              fontMediaLap="16px"
              lhMediaLap="24px"
            >
              <Link ff="Graphik" col="#343944" href="tel:8 (800) 000-00-00">
                <nobr>8 800 000 00 00</nobr>
              </Link>
            </Button>
          </StyledDiv>
          <StyledDiv
            marg="0 0 24px 0"
            wid="100%"
            heig="1px"
            bBottom="1px solid #9A9CA2"
          />

          <StyledPar
            fsz="16px"
            lh="20px"
            fontMediaBig="14px"
            lhMediaBig="20px"
            col="#fff"
            mMargMediaBig="0 0 32px 0"
            ff="Graphik"
          >
            Получить подробную информацию об АО «НПФ «Компания», ознакомиться с
            его Уставом, Пенсионными правилами, Страховыми правилами, а также
            иными документами, предусмотренными Федеральным законом от
            07.05.1998 № 75-ФЗ «О негосударственных пенсионных фондах» и
            нормативными актами Банка России, Вы можете на сайте{' '}
            <Link col="#fff" td="underline" href="#" target="_blank">
              www.company.ru
            </Link>
            . 000000, г. Москва, ул. Московская, д. 1, стр.1, Тел. 8 (495)
            000-00-00, Лицензия Банка России № 00 от 20.05.1010{' '}
          </StyledPar>
        </StyledDiv>
      </StyledFooter>
    </StyledDiv>
  );
}

export default App;
