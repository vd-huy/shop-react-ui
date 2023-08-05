import { css } from "styled-components";

export const mobile = (props) => {
    return css `
    @media screen and (max-width: 320px) {
      ${props}
    }
  `;
};

export const tablet = (props) => {
    return css `
    @media only screen and (min-width: 376px) and (max-width: 768px) {
      ${props}
    }
  `;
};