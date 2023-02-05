import Table from "../../components/table/table";
import { Container } from "../styles";
import { useState, useEffect } from "react";
import axios from "axios";
import * as React from 'react';


export default function PageDemo() {
  const [customers, setCustomers] = useState<any>([]);

  useEffect(() => {
    getUserAccount();
  }, []);

  const getUserAccount = () => {
    return axios.get("https://api.github.com/users").then((data) => {
      console.log(data.data);
      setCustomers(data.data);
    });
  };

  const columns = [
    {
      field: "login",
      header: "Nome",
    },
  ];



  const teste = [{ field: customers?.login, header: "Name" }];

  return (
    <Container>
      <Table columns={columns} data={columns} />
    </Container>
  );
}
