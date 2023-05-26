import styled from 'styled-components';

export const SectionWrapper = styled.div`
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  padding: 25px;
  box-shadow: var(--boxShadow);
  border: 2px solid rgb(10, 120, 10);
  margin-bottom: 20px;
`;

export const SectionTitle = styled.h2`
  font-weight: 700;
  font-size: 20px;
  color: #333;
`;

export const SectionContent = styled.div`
  margin-top: 10px;
`;

export default {
  SectionWrapper,
  SectionTitle,
  SectionContent,
};
