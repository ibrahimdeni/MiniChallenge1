import React from "react";
import { Card, ListGroup, Col, Row } from "react-bootstrap";
import OrangData from "../dummydata/OrangData";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function Home() {
  return (
    <>
      <div className="w-100 flex bg-dark">
        <div
          className="mx-auto w-25 bg-light justify-content-center"
          style={{ height: "100vh" }}
        >
          <ListGroup variant="flush">
            {OrangData?.map((item) => {
              return (
                <>
                  <ListGroup.Item>
                    <Link
                      to={`/DetailAkun/${item.id}`}
                      className="text-decoration-none"
                    >
                      <Row className="bg-dark rounded">
                        <Col sm={4}>
                          <Card.Img
                            variant="top"
                            src={item.image}
                            style={{
                              objectFit: "cover",
                              borderRadius: "60px",
                              height: "70px",
                              width: "70px",
                            }}
                            className="my-2"
                          />
                        </Col>
                        <Col
                          sm={8}
                          style={{ marginLeft: "-30px", marginTop: "10px" }}
                        >
                          <p
                            className="text-light fw-semibold"
                            style={{ marginTop: "10px" }}
                          >
                            {item.username}
                          </p>
                          <p
                            className="text-light"
                            style={{ marginTop: "-15px" }}
                          >
                            Follower {item.follower}
                          </p>
                        </Col>
                      </Row>
                    </Link>
                  </ListGroup.Item>
                </>
              );
            })}
          </ListGroup>
        </div>
      </div>
    </>
  );
}

export default Home;
