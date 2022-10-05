import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap} from './SidebarElements'
import { NavBtnLang } from '../Navbar/NavbarElements';

const Sidebar = ({ isOpen, toggle }) => {

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
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>{t("about")}</SidebarLink>

                    <SidebarLink to="discover" onClick={toggle}>{t("discover")}</SidebarLink>

                    <SidebarLink to="services" onClick={toggle}>{t("service")}</SidebarLink>

                    <SidebarLink to="goal" onClick={toggle}>{t("goal")}</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <NavBtnLang
                        onChange={handleLanguageChange}
                        value={localStorage.getItem("i18nextLng")}
                    >
                        <option value="en">EN</option>
                        <option value="ru">RU</option>
                    </NavBtnLang>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar