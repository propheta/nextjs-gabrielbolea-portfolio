import React from "react";
import {
  DiDatabase,
  DiFirebase,
  DiReact,
  DiUikit,
  DiZend,
} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="techs">
    <SectionDivider />
    <br />
    <SectionTitle>Techs</SectionTitle>
    <SectionText>
      As a developer I have to always stay on top of all new technologies. I've
      worked with a range of technologies in the web development world. Starting
      from the Design to the Back-End.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            ReactJS.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with
            <br />
            NodeJS and Databases
            <br />
            (MySQL, SQL Server, POSTGRES).
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiUikit size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
