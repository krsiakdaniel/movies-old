import React from 'react';
import { css } from '@emotion/core';

const Spinner = () => <div css={cssSpinner} />;

const cssSpinner = css`
  border: 5px solid #f3f3f3;
  border-top: 5px solid #16d47b;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  margin: 16px auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export { Spinner };
