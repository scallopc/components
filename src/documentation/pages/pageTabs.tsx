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
import { useState } from "react";
import styled from "styled-components";
import Line from "../../components/line/line";
import React from "react";

const ContentAvatars = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;

export default function PageTabs() {
  const list = [
    { id: 2, name: "Vue" },
    { id: 3, name: "Node" },
    { id: 4, name: "Angular" },
    { id: 1, name: "React" },
  ];

  const [toggled, settoggled] = useState(false);

  const teste = (e) => {
    console.log("Toogle small", e.target.checked);
    settoggled(!toggled);
  };

  return (
    <Container>
      <H2>Tabs</H2>


    </Container>
  );
}
