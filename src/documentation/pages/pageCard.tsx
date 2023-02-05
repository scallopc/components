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


export default function PageCards() {
  const cardList =
    '<Card type="list" title={item.title} subtitle={item.subtitle} image={item.image} />';
  const cardBlock =
    '<Card type="block" title={item.title} subtitle={item.subtitle} image={item.image} />';
  const cardView =
    '<Card type="view_ci" title={item.title} subtitle={item.subtitle} icon={item.icon} typeView={item.type} count={item.ci_count} />';
  const cardTopology =
    '<Card type="topology" title={item.title} subtitle={item.subtitle} group={item.group} ' + 
    '<ContainerBadge> <Badge> {tags} </Badge></ContainerBadge>' +
     '</Card>';

  const cards = [
    {
      path: "/topology",
      title: "Dashboard",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit turpis.",
      image:
        "https://images.unsplash.com/photo-1621416953561-4df8e6e1d5b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Service Topology",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit turpis.",
      image:
        "https://images.unsplash.com/photo-1621417308431-e424b20a773d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Help Desk",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit turpis.",
      image:
        "https://images.unsplash.com/photo-1621416953243-22c9380429d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "App Name Sample",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit turpis.",
      image:
        "https://images.unsplash.com/photo-1621416952698-7f63e87ad793?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "console",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit turpis.",
      image:
        "https://images.unsplash.com/photo-1621416953426-6cf6497af8ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  const views = [
    {
      title: "Class or view Name",
      subtitle:
        "Class or view description. Lorem ipsum dolor sit amet, consectetur adipiscing elit turpis.",
      icon: "fa-solid fa-rectangle-list",
      type: "view",
      ci_count: "45",
    },
    {
      title: "Node View",
      subtitle: "Relação de equipamentos e componentes principais do CMDB",
      icon: "fa-solid fa-rectangle-list",
      type: "view",
      ci_count: "1500",
    },
    {
      title: "Lista CIs",
      subtitle: "Relação de todos os CIs da da estrutura Configuration Item.",
      icon: "fa-solid fa-rectangle-list",
      type: "view",
      ci_count: "6800",
    },
    {
      title: "Hardware",
      subtitle: "Relação de todos os CIs da da estrutura Configuration Item.",
      icon: "fa-solid fa-tachograph-digital",
      type: "class",
      ci_count: "400",
    },
    {
      title: "IP Address",
      subtitle: "Lista de todos os CIs classificados como IP Address.",
      icon: "fa-solid fa-globe",
      type: "view",
      ci_count: "4580",
    },
    {
      title: "Computer",
      subtitle: "Lista de todos os CIs classificados como IP Computer.",
      icon: "fa-solid fa-computer",
      type: "view",
      ci_count: "555",
    },
    {
      title: "Server",
      subtitle: "Lista de todos os CIs classificados como Hardware.",
      icon: "fa-solid fa-server",
      type: "view",
      ci_count: "380",
    },
    {
      title: "Application",
      subtitle: "Lista de todos os CIs classificados como application.",
      icon: "fa-solid fa-browser",
      type: "view",
      ci_count: "120",
    },
    {
      title: "Network Gear",
      subtitle: "Lista de todos os CIs classificados como Netowrk Gear",
      icon: "fa-solid fa-circle-nodes",
      type: "view",
      ci_count: "120",
    },
    {
      title: "Router Hardware",
      subtitle: "Lista de todos os CIs classificados como Router Hardware.",
      icon: "fa-solid fa-router",
      type: "view",
      ci_count: "60",
    },
    {
      title: "Switch Hardware",
      subtitle: "Lista de todos os CIs classificados como Switch Hardware.",
      icon: "fa-solid fa-arrows-repeat",
      type: "view",
      ci_count: "40",
    },
    {
      title: "Firewall Hardware",
      subtitle: "Lista de todos os CIs classificados como Firewall Hardware.",
      icon: "fa-solid fa-block-brick-fire",
      type: "view",
      ci_count: "5",
    },
    {
      title: "Repeater Network",
      subtitle: "Lista de todos os CIs classificados como Repeater Network.",
      icon: "fa-regular fa-tower-broadcast",
      type: "class",
      ci_count: "5",
    },
    {
      title: "Bridge Network",
      subtitle: "Lista de todos os CIs classificados como Bridge Network.",
      icon: "fa-solid fa-bridge-suspension",
      type: "view",
      ci_count: "1",
    },
    {
      title: "Wireless Hardware",
      subtitle: "Lista de todos os CIs classificados como Wireless Hardware.",
      icon: "fa-solid fa-wifi",
      type: "class",
      ci_count: "10",
    },
    {
      title: "Load Balance Hardware",
      subtitle:
        "Lista de todos os CIs classificados como Load Balance Hardware.",
      icon: "fa-solid fa-sitemap",
      type: "view",
      ci_count: "6",
    },
  ];

  const topology = [
    {
      title: "Rede de CDN - Operadora A",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis magna morbi dolor scelerisque diam quis volutpat fermentum.",
      tags: ["Nova", "Produção", "Adipsicing Elit"],
      group: "CDN",
    },
    {
      title: "Rede de Parceiro FTTH - Operadora Z",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis magna morbi dolor.",
      tags: ["Nova", "Produção", "Adipsicing Elit"],
      group: "CDN",
    },
    {
      title: "Rede de CDN - Operadora A",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis magna morbi dolor scelerisque diam quis volutpat fermentum.",
      tags: ["Nova", "Produção", "Adipsicing Elit"],
      group: "CDN",
    },
    {
      title: "Rede de Parceiro FTTH - Operadora XZ",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis magna morbi dolor scelerisque diam quis volutpat fermentum.",
      tags: ["Nova", "Produção", "Adipsicing Elit"],
      group: "CDN",
    },
    {
      title: "Rede de CDN - Operadora C",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis magna morbi dolor.",
      tags: ["Nova", "Produção", "Adipsicing Elit"],
      group: "CDN",
    },
    {
      title: "Rede de Parceiro FTTH - Operadora A",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis magna morbi dolor scelerisque diam quis volutpat fermentum.",
      tags: ["Nova", "Produção", "Adipsicing Elit", "Adipsicing Elit"],
      group: "CDN",
    },
    {
      title: "Rede de CDN - Operadora X",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis magna morbi dolor.",
      tags: ["Nova", "Produção", "Adipsicing Elit", "Adipsicing Elit"],
      group: "CDN",
    },
  ];

  return (
    <Container>
      <Box>
        <H2>Cards</H2>

      </Box>
    </Container>
  );
}
