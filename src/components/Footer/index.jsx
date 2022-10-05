import React from 'react'
import { FaYoutube, FaTelegram, FaTwitter, FaVk } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import { FooterContainer, FooterWrap, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, FooterLinksContainer, SocialMedia, SocialMediaWrap, WebsiteRights, SocialIcons, SocialIconLink, SocialLogo } from './FooterElements';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    const { t } = useTranslation(("home"));

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>{t("about")}</FooterLinkTitle>
                            <FooterLink to="/">{t("howitworks")}</FooterLink>
                            <FooterLink to="/">{t("testimonials")}</FooterLink>
                            <FooterLink to="/">{t("careers")}</FooterLink>
                            <FooterLink to="/">{t("investors")}</FooterLink>
                            <FooterLink to="/">{t("terms")}</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>{t("contactus")}</FooterLinkTitle>
                            <FooterLink to="/">{t("contact")}</FooterLink>
                            <FooterLink to="/">{t("support")}</FooterLink>
                            <FooterLink to="/">{t("destinations")}</FooterLink>
                            <FooterLink to="/">{t("sponsorship")}</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>{t("socialmedia")}</FooterLinkTitle>
                            <FooterLink to="/">{t("vk")}</FooterLink>
                            <FooterLink to="/">{t("telegram")}</FooterLink>
                            <FooterLink to="/">{t("twitter")}</FooterLink>
                            <FooterLink to="/">{t("youtube")}</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>Recycle</SocialLogo>
                        <WebsiteRights>{t("tsu")} © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink gref="/" target="_blank" aria-label="VK">
                                <FaVk />
                            </SocialIconLink>

                            <SocialIconLink gref="/" target="_blank" aria-label="Telegram">
                                <FaTelegram />
                            </SocialIconLink>

                            <SocialIconLink gref="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>

                            <SocialIconLink gref="/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>

            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer