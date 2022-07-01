import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
       <SectionTitle main center>
        Hello There! <br />
        Welcome to My Portfolio

       </SectionTitle>
       <SectionText>
        Johannesburg based Software Developer
       </SectionText>
       <Button onClick={() => window.location = 'http://google.com'}>Learn More</Button>
    </LeftSection>

  </Section>
);

export default Hero;