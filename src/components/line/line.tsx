import { Container } from "./styles";
import React  from 'react';

export interface ILine {
  direction: "horizontal" | "vertical";
};

export default function Line({ direction }: ILine) {
  return <Container direction={direction} />;
}
