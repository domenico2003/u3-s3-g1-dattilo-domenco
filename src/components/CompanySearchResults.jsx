import { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import { useNavigate, useParams } from "react-router-dom";

import Job from "./Job";
import { fetchCompany } from "../redux/actionCreator";
import { useDispatch, useSelector } from "react-redux";

const CompanySearchResults = () => {
  let jobs = useSelector((state) => state.allJobs.company?.content);

  const params = useParams();
  let navigate = useNavigate();
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompany(params.companyName));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <div className="d-flex justify-content-between align-items-center">
            {jobs && <h1>{jobs[0]?.company_name} jobs</h1>}
            <Button
              variant="outline-dark"
              onClick={() => navigate("/favourites")}
            >
              favourites
            </Button>
          </div>
          <hr className="mb-0" />
        </Col>
        <Col xs={10} className="mx-auto">
          {jobs?.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
