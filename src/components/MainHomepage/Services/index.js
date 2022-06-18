import React from 'react'
import Icon1 from '../../../images/recycle-box.svg'
import Icon2 from '../../../images/web-shopping.svg'
import Icon3 from '../../../images/window-shopping.svg'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                        <ServicesH2>Reduce, Reuse, Recycle</ServicesH2>
                            <ServicesP>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                        <ServicesH2>Virual Offices</ServicesH2>
                            <ServicesP>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </ServicesP>
                </ServicesCard>
                <ServicesCard>

                    <ServicesIcon src={Icon3}/>
                        <ServicesH2>Shop</ServicesH2>
                            <ServicesP>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </ServicesP>
                    
                </ServicesCard>

            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services