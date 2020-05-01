import React from 'react';
import { css } from '@emotion/core';

const Spinner = () => <div css={cssSpinner} />;

const cssSpinner = css({
  border: '5px solid #f3f3f3',
  borderTop: '5px solid #16d47b',
  borderRadius: '50%',
  width: 50,
  height: 50,
  animation: 'spin 1s linear infinite',
  margin: '16px auto',

  // TODO: fix
  // @keyframes spin {
  //   0% {
  //     transform: rotate(0deg),
  //   }
  //
  //   100% {
  //     transform: rotate(360deg),
  //   }
  // }
});

export { Spinner };
