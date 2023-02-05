import { useEffect, useState } from "react";
import {
  Container,
  Box,
  Components,
  Content,
  H2,
  H5,
  DocumentationContainer,
  Table,
  TableRow,
  Detail,
  SmallDetail,
} from "../styles";

import Line from "../../components/line/line";
import * as React from 'react';

export default function PageInputs() {
  const [itemSelected, setItemSelected] = useState(null);

  const cities = [
    { id: 1, name: "Brasilia" },
    { id: 2, name: "Goiana" },
    { id: 3, name: "Cuiaba" },
    { id: 4, name: "Campo Grande" },
    { id: 5, name: "São Paulo" },
    { id: 6, name: "Rio de Janeiro" },
    { id: 7, name: "Belo Horizonte" },
    { id: 8, name: "Vitória" },
    { id: 9, name: "Florianópolis" },
    { id: 10, name: "Curitiba" },
    { id: 11, name: "Porto Alegre" },
    { id: 12, name: "Teste 1" },
    { id: 13, name: "Teste 2" },
    { id: 14, name: "Teste 3" },
    { id: 15, name: "Teste 4" },
    { id: 16, name: "Teste 5" },
    { id: 17, name: "Teste 6" },
    { id: 18, name: "Teste 7" },
    { id: 19, name: "Teste 8" },
    { id: 20, name: "Teste 9" },
    { id: 21, name: "Teste 10" },
    { id: 22, name: "Teste 11" },
    { id: 23, name: "Teste 12" },
  ];

  const topologias = [
    {
      title: "Vertice",
      subTitle: "Search Docs",
      tags: ["Nova", "Produção", "Adipsicing Elit"],
    },
    {
      title: "Vertice 2",
      subTitle: "Search Docs",
      tags: ["Nova", "Produção", "Adipsicing Elit"],
    },
    {
      title: "Vertice 3",
      subTitle: "Search Docs",
      tags: ["Nova", "Produção", "Adipsicing Elit"],
    },
    {
      title: "Vertice",
      subTitle: "Search Docs",
      tags: ["Nova", "Produção", "Adipsicing Elit"],
    },
  ];

  useEffect(() => {
    console.log(itemSelected);
  }, [itemSelected]);

  return (
    <Container>
      <H2>Inputs</H2>

    </Container>
  );
}
