import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const IconContainer = styled(FontAwesomeIcon)`
  font-size: 18px;
`;

export const Container = styled.div`
  width: fit-content;
  min-height: 30px;
  display: flex;
  gap: 8px;
  align-items: center;
  transition: all 0.1s ease;
  color: ${(props) => props.theme.default.color};
  padding-left: 5px;

  &.active {
    border-left: 4px solid #5b8def;
    border-radius: 2px;
  }
`;

export const Title = styled.p`
  font-size: 14px;
`;
