import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import shape1 from "../assets/img/banner/shaps1.png";
import shape2 from "../assets/img/banner/shaps2.png";
import shape3 from "../assets/img/banner/shaps3.png";
import shape4 from "../assets/img/banner/shaps4.png";
import shape5 from "../assets/img/banner/shaps5.png";
import shape6 from "../assets/img/banner/shaps6.png";
import shape7 from "../assets/img/banner/shaps7.png";

import bannerMoc from "../assets/img/banner/vitor.jpg";

const Banner = () => {
  return (
    <div className="banner-area-inner">
      <div className={`banner-inner-area banner-area1`}>
        <Container>
          <Row className="align-items-center">
            <Col md={8} lg={6} xl={5}>
              <div className="banner-text-inner">
                <div className="banner-shape-wrap">
                  <div className="banner-shape-inner">
                    <img
                      src={shape1}
                      alt=""
                      className="shape shape1 rotate3d"
                    />
                    <img
                      src={shape2}
                      alt=""
                      className="shape shape2 rotate2d"
                    />
                    <img
                      src={shape3}
                      alt=""
                      className="shape shape3 rotate-2d"
                    />
                    <img
                      src={shape4}
                      alt=""
                      className="shape shape4 rotate3d"
                    />
                    <img
                      src={shape5}
                      alt=""
                      className="shape shape5 rotate2d"
                    />
                    <img
                      src={shape6}
                      alt=""
                      className="shape shape6 rotate-2d"
                    />
                    <img
                      src={shape7}
                      alt=""
                      className="shape shape7 rotate3d"
                    />
                  </div>
                </div>

                <h1>Ol?? equipe do<br /> Nexo, prazer!</h1>
                <p style={{ maxWidth: '30ch' }}>
                  Me chamo Vitor e fiz essa aplica????o praticamente do zero para tentar impressionar voc??s!
                  Se trata de um dashboard para acompanhar dados da c??mara dos deputados.
                </p>
                <a href="https://github.com/tengu-br/depudados-back" target="_blank" className="btn">
                  git Back-end
                </a>
                <a href="https://github.com/tengu-br/depudados" target="_blank" className="btn">
                  git Front-end
                </a>
              </div>
            </Col>
            <Col md={4} lg={5} className="  offset-lg-1  offse-xl-2">
              <div className="banner-image" style={{marginTop:'-100px',paddingBottom:'40px'}}>
                <img src={bannerMoc} alt="Ol??" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
