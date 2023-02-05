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
import React, { useEffect, useState } from "react";
import Line from "../../components/line/line";

const ContentToggle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

export default function PageRadio() {
  const [select, setSelect] = useState("Dog");

  const handleSelectChangePet = (event) => {
    const value = event.target.value;
    setSelect(value);
  };

  const drinks = [
    {
      label: "Coffee",
    },
    {
      label: "Tea",
    },
    {
      label: "Juice",
    },
    {
      label: "Soda",
    },
    {
      label: "Beer",
    },
    {
      label: "Whisky",
    },
  ];

  const [selectedValue, setSelectedValue] = useState<string>(drinks[0].label);
  const handleChangeMap = (e) => {
    setSelectedValue(e.target.value);
  };

  useEffect(() => {
    console.log(selectedValue);
  }, [selectedValue]);

  const radio = '<Radio '+' label="Dog" '+' value="Dog" '+' checked={select === "Dog"} '+' onChange={(event) => handleSelectChangePet(event)}/>';

  return (
    <Container>
      <H2>Radio</H2>

    </Container>
  );
}
