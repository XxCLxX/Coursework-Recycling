import React from 'react'
import { FaYoutube, FaTelegram, FaTwitter } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import { FooterContainer, FooterWrap, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, FooterLinksContainer, SocialMedia, SocialMediaWrap, WebsiteRights, SocialIcons, SocialIconLink, SocialLogo } from './FooterElements'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/">How it works</FooterLink>
                            <FooterLink to="/">Testimonals</FooterLink>
                            <FooterLink to="/">Careers</FooterLink>
                            <FooterLink to="/">Investors</FooterLink>
                            <FooterLink to="/">Terms of Service</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to="/">Contact</FooterLink>
                            <FooterLink to="/">Support</FooterLink>
                            <FooterLink to="/">Destinations</FooterLink>
                            <FooterLink to="/">Sponsorship</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to="/">VK</FooterLink>
                            <FooterLink to="/">Telegram</FooterLink>
                            <FooterLink to="/">Twitter</FooterLink>
                            <FooterLink to="/">Youtube</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>Recycle</SocialLogo>
                        <WebsiteRights>Recycle © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink gref="/" target="_blank" aria-label="VK">
                                <FaTelegram />
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