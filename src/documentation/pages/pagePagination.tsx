import React, { useState } from "react";
import {
  Box,
  Components,
  Container,
  Content,
  Detail,
  DocumentationContainer,
  H2,
  H5,
} from "../styles";

export default function PagePagination() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [page, setPage] = useState(1);
  const totalPages = 15;
  const handlePages = (updatePage: number) => setPage(updatePage);

  return (
    <Container>
      <H2>Pagination</H2>

    </Container>
  );
}
