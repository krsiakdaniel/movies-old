import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutWrapperCss>
      <h2>About</h2>
      <p>
        Hi. My name is <strong>Krsiak Daniel</strong>. I really like movies. I
        watched just in cinema 100 movies in 10 years.
      </p>
    </AboutWrapperCss>
  );
};

const AboutWrapperCss = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;

  @media screen and (max-width: 768px) {
    padding: 16px 24px;
  }
`;

export { About };
