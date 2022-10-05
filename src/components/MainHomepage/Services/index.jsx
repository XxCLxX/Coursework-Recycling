import React from 'react'
import Icon1 from '../../../images/recycle-box.svg'
import Icon2 from '../../../images/web-shopping.svg'
import Icon3 from '../../../images/window-shopping.svg'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './ServicesElements'
import { useTranslation } from 'react-i18next';

const Services = () => {
    const { t } = useTranslation(("home"));

    return (
        <ServicesContainer id="services">
            <ServicesH1>{t("ourservices")}</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                        <ServicesH2>{t("RRR")}</ServicesH2>
                            <ServicesP>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                        <ServicesH2>{t("virtualoffices")}</ServicesH2>
                            <ServicesP>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </ServicesP>
                </ServicesCard>
                <ServicesCard>

                    <ServicesIcon src={Icon3}/>
                        <ServicesH2>{t("shop")}</ServicesH2>
                            <ServicesP>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </ServicesP>
                    
                </ServicesCard>

            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services