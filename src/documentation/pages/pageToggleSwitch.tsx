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
import styled from "styled-components";
import { useState } from "react";
import Line from "../../components/line/line";

const ContentToggle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

import React from "react";

export default function PageToggleSwitch() {
  const [toggled, settoggled] = useState(false);

  return (
    <Container>
      <H2>Toggle Switch</H2>

    </Container>
  );
}
