import { css, CSSObject } from 'styled-components';

export const mobile = (arg: TemplateStringsArray | CSSObject) => {
  return css`
    @media (max-width: 700px) {
      ${css(arg)}
    }
  `;
};
