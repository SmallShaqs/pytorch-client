import React from "react";
import styled from "styled-components";
import { Avatar, Tag } from "antd";

const SponsorContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
`;

const TagContainer = styled.div`
  display: flex;
  margin-top: 5px;
`;

const LogoWithTitle = styled.div`
  display: flex;
`;

const Title = styled.p`
  margin-left: 5px;
`;

const Sponsor = ({ name, keywords, logo }) => (
  <SponsorContainer>
    <LogoWithTitle>
      <Avatar shape="square" size={32} src={logo} />
      <Title>{name}</Title>
    </LogoWithTitle>
    <TagContainer>
      <Tag color="red">Sponsor</Tag>
    </TagContainer>
  </SponsorContainer>
);

export default Sponsor;
