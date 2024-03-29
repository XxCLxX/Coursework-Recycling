import React from 'react'
import styled from 'styled-components'
import Navbar from "../components/ShopSection/Navbar"
import Footer from "../components/ShopSection/Footer"
import Annoucement from "../components/ShopSection/Annoucement"
import { Add, Remove } from "@mui/icons-material";
import { mobile } from '../components/responsive'
import { useNavigate } from "react-router-dom";

const Container = styled.div`
`

const Wrapper = styled.div`
padding: 20px;
${mobile({ padding: "10px"})}
`

const Title = styled.h1`
font-weight: 300;
text-align: center;
`

const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`

const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props => props.type === "filled" && "none"};
background-color: ${props => props.type === "filled" ? "#000" : "transparent"};
color: ${props => props.type === "filled" && "white"};
`

const TopTexts = styled.div`
${mobile({ display: "none"})}
`

const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`

const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection: "column"})}
`

const Info = styled.div`
flex: 3;
`

const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;
`

const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection: "column"})}
`

const ProductDetail = styled.div`
flex: 2;
display: flex;
`

const Image = styled.img`
width: 200px;
`

const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
`

const ProductName = styled.span`
`;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ProductQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

const ProductQuantity = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px"})}
`

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px"})}
`

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`

const SummaryTitle = styled.h1`
font-weight: 200;
`

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
width: 100%;
padding: 10px;
background-color: #000;
color: #fff;
font-weight: 600;
`


const Cart = () => {
    const navigate = useNavigate();
    const navigateToShop = () => {
        navigate('/shop');
    };



    return (
        <Container>
            <Navbar />
            <Annoucement />
            <Wrapper>
                <Title>YOUR CART</Title>
                <Top>
                    <TopButton onClick={navigateToShop}>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Cart (2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://cdn.shopify.com/s/files/1/0246/2312/0436/products/Practice_Jacket_front_new_800x.jpg" />
                                <Details>
                                    <ProductName><b>Product:</b> VARSITY JACKET</ProductName>
                                    <ProductSize><b>Size:</b> M</ProductSize>
                                    <ProductColor color="black" />
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductQuantityContainer>
                                    <Add />
                                    <ProductQuantity>1</ProductQuantity>
                                    <Remove />
                                </ProductQuantityContainer>
                                <ProductPrice>1900₽</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetail>
                                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"/>
                                <Details>
                                    <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                                    <ProductColor color="gray"/>
                                    <ProductSize><b>Size:</b> 37</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductQuantityContainer>
                                    <Add />
                                    <ProductQuantity>1</ProductQuantity>
                                    <Remove />
                                </ProductQuantityContainer>
                                <ProductPrice>900₽</ProductPrice>
                            </PriceDetail>
                        </Product>

                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>2800₽</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>50₽</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText type="total">Total</SummaryItemText>
                            <SummaryItemPrice>2850</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart