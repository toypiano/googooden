import { css, CSSObject } from 'styled-components';

export const mobile = (...args: CSSObject[]) => {
  const [first, ...rest] = args;
  return css`
    @media (max-width: 700px) {
      ${css(first, ...rest)}
    }
  `;
};
