
import Line from "../../components/line/line";
import {
  Box,
  Components,
  Container,
  Content,
  Detail,
  DocumentationContainer,
  H2,
  H5,
  SmallDetail,
  Table,
  TableRow,
} from "../styles";
import * as React from 'react';


export default function PageButtons() {
  const primary = '<Button variant="primary" size="small" label="button name" />'
  const outline = '<Button variant="outline" size="medium" label="button name" />'
  const text = '<Button variant="text" size="large" />'
  const textIcon = '<Button variant="text" size="small" label="button name" icon="fa-regular fa-plus" />'
  const disabled = '<Button variant="primary" size="small" label="button name" disabled />'


  return (
    <Container>
      <H2>Botões</H2>

    </Container>
  );
}
