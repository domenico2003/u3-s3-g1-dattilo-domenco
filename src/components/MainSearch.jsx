import { useState } from "react";
import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import Job from "./Job";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs, setLoadingOn } from "../redux/actionCreator";

const MainSearch = () => {
  const [query, setQuery] = useState("");

  let jobs = useSelector((state) => state.allJobs.jobs?.content);
  let loading = useSelector((state) => state.allJobs.isLoading?.content);
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setLoadingOn());
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
        <Col
          xs={10}
          className={
            !loading
              ? "mx-auto mb-5"
              : "mt-5 mx-auto d-flex justify-content-center"
          }
        >
          {!loading ? (
            jobs?.map((jobData, index) => (
              <Job key={jobData._id} data={jobData} index={index} />
            ))
          ) : (
            <Spinner animation="border" role="status"></Spinner>
          )}
        </Col>
        {/* {loading && (
          <Col xs={10} className="mt-5 mx-auto d-flex justify-content-center">
            <Spinner animation="border" role="status"></Spinner>
          </Col>
        )} */}
      </Row>
    </Container>
  );
};

export default MainSearch;
