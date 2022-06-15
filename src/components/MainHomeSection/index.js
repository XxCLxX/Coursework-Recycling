import React, { useState } from 'react'
import Video from '../../videos/TSU-Recycle.mp4'
import { Button } from '../ButtonElement'
import { MainHomeContainer, MainHomeBg, VideoBg, MainHomeContent, MainHomeH1, MainHomeP, MainHomeBtnWrapper, MdCart, MdCartOutline, BoldRecycle, NormalRecycle } from './MainHomeElements'

const MainHomeSection = () => {
  const [hover, setHover] = useState(false)
  const [isShown, setIsShown] = useState(false);

  //const onHover = () => {
  //  setHover(!hover)
  //}

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
          <Button to="donate"
            primary="true"
            dark="true"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >Donate{hover ? <NormalRecycle /> : <BoldRecycle />}</Button>

          <Button to="shop"
            primary="true"
            dark="true"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
            Shop
            {isShown ? <MdCartOutline /> : <MdCart />}
          </Button>
        </MainHomeBtnWrapper>
      </MainHomeContent>
    </MainHomeContainer>
  )
}

export default MainHomeSection