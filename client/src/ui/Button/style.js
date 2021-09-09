import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
export const Button = styled(Link)`
  position: relative;
  ${({ type }) =>
    type
      ? css`
          background-color: var(--blue);
          color: var(--white);
        `
      : css`
          background-color: var(--white);
          color: var(--blue);
        `}
  border: none;
  border: none;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: unset;
  line-height: 17px;
  text-transform: unset;
  min-height: 32px;
  min-width: 32px;
  padding: 4px 16px;
`;
