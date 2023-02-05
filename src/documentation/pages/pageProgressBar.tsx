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

import React, { useEffect, useRef, useState } from "react";
import { ProgressBar } from "primereact/progressbar";
import Line from "../../components/line/line";

export default function PageProgressBar() {
  const [value1, setValue1] = useState(0);
  const interval = useRef(null);
  const bar = '<ProgressBar value={value1} />';
  const indeterminate = '<ProgressBar mode="indeterminate" />';



  return (
    <Container>
        <H2>ProgressBar</H2>
    </Container>
  );
}
