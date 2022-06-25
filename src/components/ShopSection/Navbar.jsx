import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { mobile } from '../responsive';

const NavContainer = styled.div`
height: 60px;
${mobile({ height: "50px" })}
`

const NavWrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
align-items: center;
${mobile({ height: "10px 0px" })}
`

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`

const Language = styled.span`
cursor: pointer;
font-size: 14px;
${mobile({ display: "none" })}
`

const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
${mobile({ display: "none"})}
`

const Input = styled.input`
border: none;
`

const Center = styled.div`
flex: 1;
text-align: center;
${mobile({marginRight: "15px"})}
`

const Logo = styled.h1`
font-weight: bold;
cursor: pointer;
${mobile({ fontSize: "24px"})}
`

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({ flex: 2, justifyContent: "center" })}
`

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
${mobile({ fontSize: "12px", marginLeft: "10px" })}
`

const Navbar = () => {
    const navigate = useNavigate();
    const navigateToShopHome = () => {
        navigate('/shop');
    };

    const navigateToDonation = () => {
        navigate('/donation');
    };

    const navigateToRegister = () => {
        navigate('/register');
    };

    const navigateToLogin = () => {
        navigate('/login');
    };

    const navigateToCart = () => {
        navigate('/cart');
    };

    return (
        <NavContainer>
            <NavWrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='search' />
                        <SearchIcon style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Left>

                <Center><Logo onClick={navigateToShopHome}>Recycle</Logo></Center>

                <Right>
                    <MenuItem onClick={navigateToDonation}>DONATE</MenuItem>
                    <MenuItem onClick={navigateToRegister}>REGISTER</MenuItem>
                    <MenuItem onClick={navigateToLogin}>LOGIN</MenuItem>
                    <MenuItem onClick={navigateToCart}>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartIcon color="action" />
                        </Badge>
                    </MenuItem>
                </Right>
            </NavWrapper>
        </NavContainer>
    )
}

export default Navbar