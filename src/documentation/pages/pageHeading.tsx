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

import { useEffect, useRef, useState } from "react";
import { ProgressBar } from "primereact/progressbar";
import Line from "../../components/line/line";
import * as React from 'react';

export default function pageHeading() {
  const h1 = '<Heading type="heading" headingSize="h1">Heading h1</Heading>';
  const h2 =
    '<Heading type="heading" headingSize="h2" textTransform="uppercase"> Heading h2 uppercase </Heading>';
  const h3 = '<Heading type="heading" headingSize="h3"> Heading h3 </Heading>';
  const h4 = '<Heading type="heading" headingSize="h4"> Heading h4 </Heading>';
  const h5 =
    '<Heading type="heading" headingSize="h5" textTransform="lowercase"> Heading h5 lowercase </Heading>';
  const h6 = '<Heading type="heading" headingSize="h6"> Heading h6 </Heading>';
  const xsm = '<Heading type="text" textSize="xsm"> Text extra small </Heading>';
  const sm = '<Heading type="text" textSize="sm">  Text small </Heading>';
  const md = '<Heading type="text" textSize="md" fontStyle="italic" textTransform="uppercase">  Text medium italic uppercase </Heading>';
  const lg = '<Heading type="text" textSize="lg">  Text large </Heading>';

  return (
    <Container>
      <Box>
        <H2>Heading</H2>

      </Box>
    </Container>
  );
}
