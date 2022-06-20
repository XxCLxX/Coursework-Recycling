import styled from "styled-components"
import { Container } from "../donationStyles"
import { Link } from "react-router-dom"
import { MdRecycling } from "react-icons/md"

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  //z-index: 1;
  //width: 100%;
  //padding: 0 24px;
  //max-width: 1100px;

${Container}
`

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`

export const NavIcon = styled(MdRecycling)`
  margin-right: 0.5rem;
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  //960px
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    right: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #000;
  }
`

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #00BFA6;;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 100px;
    display: grid;

    &:hover {
      border: none;
      transition: 1.3s ease-in-out;
    }
  }
`

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #00BFA6;
      transition: all 0.3s ease;
    }
  }
`

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #010606;
  }
`

export const NavItemBtn = styled.li`

  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`