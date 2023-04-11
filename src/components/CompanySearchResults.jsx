import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import { useNavigate, useParams } from "react-router-dom";

import Job from "./Job";

const CompanySearchResults = () => {
  const [jobs, setJobs] = useState([]);

  const params = useParams();
  let navigate = useNavigate();

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.companyName);
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <div className="d-flex justify-content-between align-items-center">
            {jobs[0]?.company_name && <h1>{jobs[0].company_name} jobs</h1>}
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
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
