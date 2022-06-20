import React from 'react'
import Icon1 from '../../../images/pack.svg'
import Icon2 from '../../../images/fill-form.svg'
import Icon3 from '../../../images/relax.svg'
import { InstructContainer, InstructH1, InstructH2, InstructP, InstructWrapper, InstructCard, InstructIcon } from './InstructElements'

const Instruct = () => {
    return (
        <InstructContainer id="instruction">
            <InstructH1>How To Donate</InstructH1>
            <InstructWrapper>
                <InstructCard>
                    <InstructIcon src={Icon1} />
                    <InstructH2>Get A Bag</InstructH2>
                    <InstructP>
                        Get a bag, and fill it up with the items you no longer need or wear.
                    </InstructP>
                </InstructCard>

                <InstructCard>
                    <InstructIcon src={Icon2} />
                    <InstructH2>Fill in Form</InstructH2>
                    <InstructP>
                        Fill in the Donation Form, and select a pick-up time that is convenient for you.
                    </InstructP>
                </InstructCard>

                <InstructCard>
                    <InstructIcon src={Icon3} />
                    <InstructH2>Relax</InstructH2>
                    <InstructP>
                        One of our volunteers will arrive to your room and pick up the bag.
                    </InstructP>
                </InstructCard>
            </InstructWrapper>
        </InstructContainer>
    )
}

export default Instruct