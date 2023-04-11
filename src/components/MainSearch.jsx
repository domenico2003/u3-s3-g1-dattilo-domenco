import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Job from "./Job";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../redux/actionCreator";

const MainSearch = () => {
  const [query, setQuery] = useState("");

  let jobs = useSelector((state) => state.allJobs.jobs?.content);
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(fetchJobs(query));
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <div className="d-flex justify-content-between align-items-center">
            <h1>Remote Jobs Search</h1>
            <Button
              variant="outline-dark"
              onClick={() => navigate("/favourites")}
            >
              favourites
            </Button>
          </div>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs?.map((jobData, index) => (
            <Job key={jobData._id} data={jobData} index={index} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
