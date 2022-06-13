import React, {useState} from 'react'
import Video from '../../videos/TSU-Recycle.mp4'
import { Button } from '../ButtonElement'
import { MainHomeContainer, MainHomeBg, VideoBg, MainHomeContent, MainHomeH1, MainHomeP, MainHomeBtnWrapper, ArrowForward, ArrowRight } from './MainHomeElements'

const MainHomeSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <MainHomeContainer>
      <MainHomeBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
      </MainHomeBg>
      <MainHomeContent>
        <MainHomeH1>Recycle</MainHomeH1>
        <MainHomeP>
        orem ipsum dolor sit amet, consectetur adipiscing elit. 
        ivamus vitae posuere arcu. Nulla ut eros cursus, cursus est eget, 
        faucibus purus.
        </MainHomeP>
        <MainHomeBtnWrapper>
          <Button to="donate" onMouseEnter={onHover} onMouseLeave={onHover}>Donate {hover ? <ArrowForward/> : <ArrowRight/>}</Button>
          <Button to="shop" onMouseEnter={onHover} onMouseLeave={onHover}>Shop</Button>
        </MainHomeBtnWrapper>
      </MainHomeContent>
    </MainHomeContainer>
  )
}

export default MainHomeSection