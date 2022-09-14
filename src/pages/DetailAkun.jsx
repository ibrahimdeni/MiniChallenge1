import { useState, useEffect } from "react";
import { Card, ListGroup, Col, Row, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import OrangData from "../dummydata/OrangData.json";

function Listingaccount() {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    const dataAccount = OrangData[id - 1];
    console.log(dataAccount);
    setData(dataAccount);
  }, []);

  return (
    <div style={{ backgroundColor: "black", height: "100vh" }}>
      <Card style={{ width: "18rem", marginLeft: "550px", height: "100vh" }}>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <div
              className="px-2 py-2"
              style={{ backgroundColor: "whitesmoke", height: "230px" }}
            >
              <Card.Img
                variant="top"
                src={`${data?.image}`}
                style={{
                  borderRadius: "60px",
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                  border: "solid 2px red",
                  marginLeft: "65px",
                }}
              />
              <p className="fw-semibold" style={{ marginLeft: "80px" }}>
                {data?.username}
              </p>
              <Row className="flex">
                <div className="w-50 text-center">
                  <Col sm={6} className="w-100">
                    <div className="w-50 mx-auto">
                      <p className="fw-bold">{data?.following}</p>
                      <p
                        style={{ fontSize: "12px", marginTop: "-15px" }}
                        className="text-muted"
                      >
                        Following
                      </p>
                    </div>
                  </Col>
                </div>
                <div className="w-50 text-center">
                  <Col sm={6} className="w-100">
                    <div className="w-50 mx-auto">
                      <p className="fw-bold">{data?.follower}</p>
                      <p
                        style={{ fontSize: "12px", marginTop: "-15px" }}
                        className="text-muted"
                      >
                        Follower
                      </p>
                    </div>
                  </Col>
                </div>
              </Row>
            </div>
          </ListGroup.Item>
        </ListGroup>
        <Link to="/">
          <div className="w-100 mt-3">
            <div className="w-25 mx-auto">
              <Button className="bg-dark" variant="dark">
                Back
              </Button>
            </div>
          </div>
        </Link>
      </Card>
    </div>
  );
}
export default Listingaccount;
