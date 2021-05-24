import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import img1 from "../assets/img/feature/checklist.jpg";
import img2 from "../assets/img/icons/project-management.svg";

const CtaTwo = () => {
  return (
    <section className="bg-2 ">
      <Container>
        <Row>
          <Col lg={7} sm={7}>
            <div className="user-interact-image">
              <img src={img1} alt="" />
            </div>
          </Col>
          <Col lg={5} sm={5}>
            <div className="user-interact-inner">
              <div className="interact-icon">
                <img src={img2} className="svg" alt="" />
              </div>
              <h2>Inspiração</h2>
              <p>
                Depois de me deparar com este processo seletivo pensei
                em dois pontos principais: utilidade pública e desenvolvimento
                fullstack. Tentei escolher uma ideia que marcasse o maior número
                de pontos da lista de tópicos descrita no anúncio da vaga (e que
                também agregasse valor de alguma maneira).
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CtaTwo;
