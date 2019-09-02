import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

import { Row, Col, Container } from "react-bootstrap";

import { Input } from "antd";
import Recommend from "./Recommend";
import prefillJSON from "./data/prefill.json";

const Bubble = styled.p`
  background: #40a9ff;
  border-radius: 10px;
  color: #fff;
  clear: both;
  padding: 10px;
  margin: 5px 0px;
  float: left;
  max-width: 300px;
`;

const { Search } = Input;
const SUBMIT_BUTTON = "Submit";
const RETRY_BUTTON = "Retry";

const App = () => {
  const [recomendations, setRecommendations] = useState(prefillJSON);
  const [isClicked, setClicked] = useState(false);
  const [input, setInput] = useState("");

  const onSubmit = async () => {
    try {
      const response = await axios.get("https://shaqs-torch.herokuapp.com");
      console.log(response);

      setClicked(true);
      setRecommendations(response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Container style={{ paddingTop: 100 }}>
        <Row>
          <Col xs="0" md="3" />
          <Col xs="12" md="6">
            <h4>🚀🌈</h4>
            <Search
              size="large"
              allowClear
              value={input}
              enterButton={isClicked ? RETRY_BUTTON : SUBMIT_BUTTON}
              placeholder="I want to create Lyft.."
              onSearch={onSubmit}
              onChange={value => setInput(value.target.value)}
            />
            {recomendations.length ? (
              <div style={{ paddingTop: 20 }}>
                <Bubble>The best choice for you is</Bubble>
                <Bubble>
                  {recomendations.map(recomendation => (
                    <Recommend {...recomendation} />
                  ))}
                </Bubble>
              </div>
            ) : null}
          </Col>
          <Col xs="0" md="3" />
        </Row>
      </Container>
    </>
  );
};

export default App;
