import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Button } from '../donationStyles'
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavItem, NavMenu, NavLinks, NavBtnLink, NavItemBtn } from './NavbarElements'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton();
  }, []);

  //window.addEventListener('resize'. showButton)

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon />
              Recycle
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/'>
                  Home
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to='/shop'>
                  Shop
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to='/donation'>
                  How to Donate
                </NavLinks>
              </NavItem>
              
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/donation-form">
                    <Button primary>Fill In Form</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/donation-form">
                    <Button fontBig primary>
                      Fill in Form
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar