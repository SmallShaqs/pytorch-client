import React from "react";
import styled from "styled-components";
import { Avatar, Tag } from "antd";

const RecommendContainer = styled.div`
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

const Recommend = ({ name, keywords, logo }) => (
  <RecommendContainer>
    <LogoWithTitle>
      <Avatar shape="square" size={32} src={logo} />
      <Title>{name}</Title>
    </LogoWithTitle>
    <TagContainer>
      {keywords.map(keyword => (
        <Tag color="gold">{keyword}</Tag>
      ))}
    </TagContainer>
  </RecommendContainer>
);

export default Recommend;
