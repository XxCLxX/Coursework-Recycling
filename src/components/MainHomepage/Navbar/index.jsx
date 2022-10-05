import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLang } from './NavbarElements'
import { IconContext } from 'react-icons';
import { animateScroll as scroll } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    const { i18n, t } = useTranslation(("home"));
    useEffect(() => {
        if (localStorage.getItem("i18nextLng")?.length > 2) {
            i18next.changeLanguage("en");
        }
    }, [])

    const handleLanguageChange = (e) => {
        i18n.changeLanguage(e.target.value);
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={toggleHome}>Recycle</NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to='about'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                >
                                    {t("about")}
                                </NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavLinks to='discover'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                >{t("discover")}</NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavLinks to='services'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}>{t("service")}</NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavLinks to='goal'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}>{t("goal")}</NavLinks>
                            </NavItem>

                        </NavMenu>
                        <NavBtn>
                            <NavBtnLang
                            onChange={handleLanguageChange}
                            value={localStorage.getItem("i18nextLng")}
                            >
                                <option value="en">EN</option>
                                <option value="ru">RU</option>
                            </NavBtnLang>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar