import styled, { css } from "styled-components";
import { ILine } from "./line";

export const Container = styled.div<ILine>`
  background-color: #9fa8b2;
  opacity: 0.3;
  ${(props) => props.direction && direction[props.direction]}
`;

const direction = {
  horizontal: css`
    width: 100%;
    height: 1px;
  `,

  vertical: css`
    min-height: 35px;
    max-height: 100%;
    width: 1px;
  `,
};
