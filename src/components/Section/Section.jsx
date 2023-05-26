import React from 'react';
import PropTypes from 'prop-types';
import { SectionWrapper, SectionTitle, SectionContent } from './Section.styled';

export const Section = ({ title, children }) => (
  <SectionWrapper>
    <SectionTitle>{title}</SectionTitle>
    <SectionContent>{children}</SectionContent>
  </SectionWrapper>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
