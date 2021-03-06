import React from 'react'
import styled from 'styled-components'
import { mobile } from '../components/responsive'

const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
    rgba(1, 9, 16, 0.5),
    rgba(2, 100, 214, 0.6)
    ),
    url("https://images.saymedia-content.com/.image/t_share/MTc0NTAxMjIxMzU5NDI5NTc3/thebenefitsofbuyingusedclothing.jpg")
      center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`

const Wrapper = styled.div`
width: 25%;
padding: 20px;
background-color: white;
${mobile({ width: "75%" })}
`

const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`

const Form = styled.form`
display: flex;
flex-direction: column;
`

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 10px 0;
padding: 10px;
`

const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: #117cf8;
color: white;
cursor: pointer;
margin-bottom: 10px;
${mobile({ width: "100%" })}
`

const Link = styled.a`
margin: 5px 0px;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
`

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>LOGIN</Title>
                <Form>
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Button>ENTER</Button>
                    <Link>CAN'T REMEMBER YOUR PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login