import React from 'react'
import { Container } from '../donationStyles'
import { InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img  } from './InfoSectionElements'

const InfoSection = ({primary, lightBg, imgStart, lightTopLine, lightTextDesc, description, headline, lightText, topLine, img, alt, start}) => {
  return (
    <>
    <InfoSec lightBg={lightBg}>
        <Container>
            <InfoRow imgStart={imgStart}>
                <InfoColumn>
                    <TextWrapper>
                        <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                    </TextWrapper>
                </InfoColumn>

                <InfoColumn>
                    <ImgWrapper start={start}>
                        <Img src={img} alt={alt} />
                    </ImgWrapper>
                </InfoColumn>
                
            </InfoRow>
        </Container>
    </InfoSec>
    </>
  )
}

export default InfoSection