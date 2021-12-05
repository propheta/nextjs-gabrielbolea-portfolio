import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
      HELLO, WORLD! <br/>
      I'm Gabriel Bolea.
      </SectionTitle>
      <SectionText>
      A freelancer dev based in Portugal.
      </SectionText>
      <Button onClick={()=>window.location ="#about"}>Learn more</Button>
    </LeftSection>
  </Section>
);

export default Hero;