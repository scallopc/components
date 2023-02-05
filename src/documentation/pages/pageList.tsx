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

export default function PageList() {
  const list = [
    { id: 2, name: "Vue" },
    { id: 3, name: "Node" },
    { id: 4, name: "Angular" },
    { id: 1, name: "React" },
  ];

  const cities = [
    { id: 2, name: "New York" },
    { id: 3, name: "Rome" },
    { id: 4, name: "London" },
    { id: 1, name: "Istanbul" },
  ];

  return (
    <Container>
      <H2>List</H2>

    </Container>
  );
}
