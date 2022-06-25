import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: 30px;
background-color: #117cf8;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500px;
`

const Annoucement = () => {
  return (
    <Container>
    Super Deal! Free Delivery on Order Over 750₽
    </Container>
  )
}

export default Annoucement