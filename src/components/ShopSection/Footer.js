import React from 'react'
import styled from 'styled-components';
import PhoneIcon from '@mui/icons-material/Phone';
import { FaYoutube, FaTwitter, FaVk, FaTelegramPlane } from 'react-icons/fa'
import MeetingRoom from '@mui/icons-material/MeetingRoom';
import Mail from '@mui/icons-material/Mail';
import { mobile } from '../responsive';

const Container = styled.div`
display: flex;
${mobile({ flexDirection: "column" })}
`

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`

const Logo = styled.h1``;

const Desc = styled.p`
margin: 20px 0px;
`

const SocialContainer = styled.div`
display: flex;
`

const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${(props) => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`

const Center = styled.div`
flex: 1;
padding: 20px;
${mobile({ display: "none" })}
`

const Title = styled.h3`
margin-bottom: 30px;
`

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`

const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`

const Right = styled.div`
flex: 1;
padding: 20px;
${mobile({ backgroundColor: "#EBF5FB" })}
`

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`

const Payment = styled.img`
width: 50%;
`

const Footer = () => {
    return (
        <Container>

            <Left>
                <Logo>Recycle</Logo>
                <Desc>
                    Lorem ipsum dolor sit amet. In asperiores galisum aut delectus
                    omnis ad placeat sint qui dignissimos omnis sed placeat deserunt
                    sed nesciunt necessitatibus vel beatae eius! Qui ipsum reprehenderit
                    et ipsa.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <FaVk />
                    </SocialIcon>
                    <SocialIcon color="24A1DE">
                        <FaTelegramPlane />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <FaTwitter />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <FaYoutube />
                    </SocialIcon>
                </SocialContainer>
            </Left>

            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Women's Fashion</ListItem>
                    <ListItem>Men's Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>Appliances</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>

            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <MeetingRoom style={{ marginRight: "10px" }} /> Lenin Ave, 36, Tomsk, Tomsk Oblast, 634050
                </ContactItem>
                <ContactItem>
                    <PhoneIcon style={{ marginRight: "10px" }} /> +1 234 56 78
                </ContactItem>
                <ContactItem>
                    <Mail style={{ marginRight: "10px" }} /> contact@recycle
                </ContactItem>
                <Payment src="https://shikstore.ru/images/logo_pay.png" />
            </Right>

        </Container>
    )
}

export default Footer