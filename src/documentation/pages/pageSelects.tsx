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
import React, { useState } from "react";
import { MultiSelect } from "primereact/multiselect";
import Line from "../../components/line/line";

export default function PageSelect() {
  const [selectedCities1, setSelectedCities1] = useState(null);

  return (
    <Container>
      <H2>Select</H2>
    </Container>
  );
}
