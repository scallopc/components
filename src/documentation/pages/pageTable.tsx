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

import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { CustomerService } from "../../service/CustomerService";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import React from "react";

export default function PageTable() {
  return (
    <Container>
      <H2>Table</H2>
    </Container>
  );
}
