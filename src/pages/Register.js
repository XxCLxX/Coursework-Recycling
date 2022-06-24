import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
    rgba(1, 9, 16, 0.5),
    rgba(2, 100, 214, 0.6)
    ),
    url("https://s14354.pcdn.co/wp-content/uploads/2019/01/clothes-hanging.jpg")
      center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`

const Wrapper = styled.div`
width: 40%;
padding: 20px;
background-color: white;
`

const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`

const Form = styled.form`
display: flex;
flex-wrap: wrap;
`

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
`

const Agreement = styled.span`
font-size: 12px;
margin: 20px 0px;
`

const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: #117cf8;
color: white;
cursor: pointer;
`

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="firstname" />
                    <Input placeholder="lastname" />
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Input placeholder="confirm password" />
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>CREATE ACCOUNT</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}



export default Register