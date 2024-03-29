import React, { useState} from 'react'
import Video from '../../../videos/TSU-Recycle.mp4'
import { Button } from '../ButtonElement'
import { useNavigate } from "react-router-dom";
import { MainHomeContainer, MainHomeBg, VideoBg, MainHomeContent, MainHomeH1, MainHomeP, MainHomeBtnWrapper, MdCart, MdCartOutline, BoldRecycle, NormalRecycle } from './MainHomeElements'
import { useTranslation } from 'react-i18next';

const MainHomeSection = () => {
  const [hover, setHover] = useState(false)
  const [isShown, setIsShown] = useState(false);

  const navigate = useNavigate();
  const navigateToDonation = () => {
    navigate('/donation');
  };

  const navigateToShop = () => {
    navigate('/shop');
  };

  //const onHover = () => {
  //  setHover(!hover)
  //}

  const { t } = useTranslation(("common"));

  return (
    <MainHomeContainer>
      <MainHomeBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </MainHomeBg>
      <MainHomeContent>
        <MainHomeH1>Recycle</MainHomeH1>
        <MainHomeP>
          orem ipsum dolor sit amet, consectetur adipiscing elit.
          ivamus vitae posuere arcu. Nulla ut eros cursus, cursus est eget,
          faucibus purus.
        </MainHomeP>
        <MainHomeBtnWrapper>
          <Button
            onClick={navigateToDonation}
            primary="true"
            dark="true"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >{t("donate")}{hover ? <NormalRecycle /> : <BoldRecycle />}</Button>

          <Button
            onClick={navigateToShop}
            primary="true"
            dark="true"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
            {t("shop")}
            {isShown ? <MdCartOutline /> : <MdCart />}
          </Button>
        </MainHomeBtnWrapper>
      </MainHomeContent>
    </MainHomeContainer>
  )
}

export default MainHomeSection