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
import Line from "../../components/line/line";
import React  from 'react';

const ContentAvatars = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;

export default function PageAvatars() {
  return (
    <Container>
      <H2>Avatar</H2>

      <Box>
        <H5>Documentation</H5>
        <DocumentationContainer>
          <p>Start</p>
          <SmallDetail>
            Avatar has three viewing modes: "Label", "Icon" and "Image".
          </SmallDetail>
          <Content>
            <Components>
              <Detail><code>&lt;Avatar size="small" label="JC" /&gt;</code></Detail>
            </Components>
            <Components>
            <Detail><code>&lt;Avatar size="small" /&gt;</code></Detail>
            </Components>
            <Components>
            <Detail><code>&lt;Avatar size="small" image="image.png" /&gt;</code></Detail>
            </Components>
          </Content>
          <br />

          <p>Active</p>
          <SmallDetail>
            A status can be added to an Avatar with the "active" property
          </SmallDetail>
          <Content>
            <Components>
            <Detail><code>&lt;Avatar size="small" label="JC" active="on" /&gt;</code></Detail>
            </Components>
          </Content>
          <br />

          <p>Properties </p>
          <SmallDetail>We use some attributes to compose the component</SmallDetail>
          <Content>
            <Table>
              <TableRow>
                <b>Name</b>
                <b>Type</b>
                <b>Description</b>
              </TableRow>
              <Line direction="horizontal"/>
              <TableRow>
                <div>label</div>
                <div>string</div>
                <div>Defines the initial to display</div>
              </TableRow>
              <Line direction="horizontal"/>
              <TableRow>
                <div>icon</div>
                <div>string</div>
                <div>Defines the icon to display</div>
              </TableRow>
              <Line direction="horizontal"/>
              <TableRow>
                <div>size</div>
                <div>string</div>
                <div>
                  Size of the element, valid options are "small", "medium" and
                  "large"
                </div>
              </TableRow>
            </Table>
          </Content>
        </DocumentationContainer>
      </Box>
    </Container>
  );
}
