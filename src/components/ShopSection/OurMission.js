import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
height: 60vh;
background-color: #e1f5fe;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px;
color: #000;
${mobile({ textAlign: "center", fontSize: "50px"})}
`

const TextWrapper = styled.div`
justify-content: center;
align-items: center;
padding: 0px 50px 0px 50px;
`

const Desc = styled.p`
font-size: 24px;
font-weight: 300;
margin-bottom: 0px;
color: #000;
text-align: center;
${mobile({fontSize: "20px"})}
`

const OurMission = () => {
    return (
        <Container>
            <Title>Our Mission</Title>
            <TextWrapper>
                <Desc>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi </Desc>
            </TextWrapper>
        </Container>
    )
}

export default OurMission