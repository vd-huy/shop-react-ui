import { css } from "styled-components";

export const mobile = (props) => {
    return css `
    @media screen and (max-width: 414px) {
      ${props}
    }
  `;
};

export const tablet = (props) => {
    return css `
    @media only screen and (min-width: 415px) and (max-width: 768px) {
      ${props}
    }
  `;
};