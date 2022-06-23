import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';

const NavContainer = styled.div`
height: 60px;
`

const NavWrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
align-items: center;
`

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`

const Language = styled.span`
cursor: pointer;
font-size: 14px;
`

const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`

const Input = styled.input`
border: none;

`

const Center = styled.div`
flex: 1;
text-align: center;
`

const Logo = styled.h1`
font-weight: bold;
`

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
`



const Navbar = () => {
    return (
        <NavContainer>
            <NavWrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <SearchIcon style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Left>

                <Center><Logo>Recycle</Logo></Center>

                <Right>
                    <MenuItem>DONATE</MenuItem>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>LOGIN</MenuItem>
                    <MenuItem>
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