import React from 'react'
import Icon1 from '../../../images/recycle-box.svg'
import Icon2 from '../../../images/web-shopping.svg'
import Icon3 from '../../../images/window-shopping.svg'
import { InstructContainer, InstructH1, InstructH2, InstructP, InstructWrapper, InstructCard, InstructIcon } from './InstructElements'

const Instruct = () => {
    return (
        <InstructContainer id="services">
            <InstructH1>Our Services</InstructH1>
            <InstructWrapper>
                <InstructCard>
                    <InstructIcon src={Icon1}/>
                        <InstructH2>Reduce, Reuse, Recycle</InstructH2>
                            <InstructP>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </InstructP>
                </InstructCard>

                <InstructCard>
                    <InstructIcon src={Icon2}/>
                        <InstructH2>Virual Offices</InstructH2>
                            <InstructP>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </InstructP>
                </InstructCard>
                <InstructCard>

                    <InstructIcon src={Icon3}/>
                        <InstructH2>Shop</InstructH2>
                            <InstructP>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </InstructP>
                    
                </InstructCard>
            </InstructWrapper>
        </InstructContainer>
    )
}

export default Instruct