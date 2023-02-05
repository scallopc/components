import {
  Container,
  Box,
  Components,
  Content,
  H5,
  DocumentationContainer,
  SmallDetail,
  Detail,
  Table,
  TableRow,
  Link,
  H2,
} from "../styles";

import { useState } from "react";
import { ColorPicker } from "primereact/colorpicker";
import Line from "../../components/line/line";
import * as React from 'react';

export default function PageColorPicker() {
  const [color2, setColor2] = useState(null);
  const showColor2 = localStorage.getItem("color2");

  return (
    <Container>
        <H2>ColorPicker</H2>           
    </Container>
  );
}
