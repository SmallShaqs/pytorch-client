import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

import { Row, Col, Container } from "react-bootstrap";

import { Input } from "antd";
import Recommend from "./Recommend";
import prefillJSON from "./data/prefill.json";
import Sponsor from "./Sponsor";

const Bubble = styled.div`
  background: #40a9ff;
  border-radius: 10px;
  color: #fff;
  clear: both;
  margin: 5px 0px;
  padding: 10px;

  float: left;
  max-width: 300px;

  opacity: 0;
  animation-delay: ${({ delay }) => delay}s;
  animation-duration: 0.5s;
  animation-name: appear;
  animation-fill-mode: forwards;

  @keyframes appear {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

const { Search } = Input;
const SUBMIT_BUTTON = "Show Me";
const RETRY_BUTTON = "Retry";

const App = () => {
  const [recomendations, setRecommendations] = useState([]);
  const [sponsors, _] = useState(prefillJSON.sponsors);
  const [isClicked, setClicked] = useState(false);
  const [input, setInput] = useState("");

  const onSubmit = () => {
    try {
      setRecommendations([]);
      setTimeout(() => {
        setRecommendations(prefillJSON.recommendations);
      }, 1000);
      // const response = await axios.get("https://shaqs-torch.herokuapp.com");
      // console.log(response);

      setClicked(true);
      // setRecommendations(response);
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
            <div style={{ marginBottom: 40 }}>
              <h5>🚀🌈 Rekt-omend</h5>
              <h6>
                We will recommend better tech than you team lead, promise!
              </h6>
            </div>
            <Search
              size="large"
              allowClear
              value={input}
              enterButton={isClicked ? RETRY_BUTTON : SUBMIT_BUTTON}
              placeholder="I want to create Lyft.."
              onSearch={onSubmit}
              onChange={value => setInput(value.target.value)}
            />
            {recomendations.length && isClicked ? (
              <div style={{ paddingTop: 10 }}>
                <Bubble delay="0.5">The best choice for you is</Bubble>
                <Bubble delay="1.5">
                  {sponsors.map(sponsor => (
                    <Sponsor key={sponsor.name} {...sponsor} />
                  ))}
                  {recomendations.map(recomendation => (
                    <Recommend key={recomendation.name} {...recomendation} />
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
