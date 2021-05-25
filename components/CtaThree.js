import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import img1 from "../assets/img/icons/solution1.svg";
import img2 from "../assets/img/feature/camara.jpg";

const CtaThree = () => {
  return (
    <section className="pt-120 pb-120">
      <Container>
        <Row>
          <Col lg={5} sm={5}>
            <div className="user-interact-inner">
              <div className="interact-icon">
                <img src={img1} className="svg" alt="" />
              </div>
              <h2>Fluxo de Trabalho</h2>
              <p>
                Comecei analisando quais informações estavam disponíveis pela
                <a style={{marginRight:'1ch',marginLeft:'1ch'}} href="http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm" target="_blank">
                  Lei de Acesso à Informação
                </a>
                  e escolhi trabalhar com os dados da câmara de deputados pois é uma
                esfera pública pouco acompanhada e que merece mais visibilidade. Pensei
                em algumas métricas simples que poderiam ser comparadas, como a presença
                dos deputados e gastos da cota parlamentar de cada um. Depois disso
                construí as páginas com dados de exemplo e em seguida fiz a parte da coleta
                dos dados reais através da API disponibilizada pela câmara.
              </p>
            </div>
          </Col>
          <Col lg={7} sm={7}>
            <div className="user-interact-image type2">
              <img src={img2} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CtaThree;
