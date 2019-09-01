import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";

import { Input } from "antd";

const Bubble = styled.p`
    background:#40a9ff;
    border-radius: 10px;
    color:#fff;
    clear: both;
    padding: 10px;
    margin: 5px 0px;
    float: left;
`;

const { Search } = Input;
const SUBMIT_BUTTON = "Submit";
const RETRY_BUTTON = "Retry";

const App = () => {
  const [isClicked, setClicked] = useState(false);
  const [input, setInput] = useState("");

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
              onSearch={() => setClicked(true)}
              onChange={value => setInput(value.target.value)}
            />
            {!isClicked || (
              <div style={{paddingTop: 20}}>
                <Bubble>The best choice for you is</Bubble>
                <Bubble>🌯</Bubble>
              </div>
            )}
          </Col>
          <Col xs="0" md="3" />
        </Row>
      </Container>
    </>
  );
};

export default App;
