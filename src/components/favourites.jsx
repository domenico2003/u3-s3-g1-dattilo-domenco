import { Alert, Button, Container, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Favourites = () => {
  let jobs = useSelector((state) => state.favouritesJobs.content);
  let dispatch = useDispatch();
  return (
    <>
      <Container>
        <h2 className="text-center my-3">lista lavori preferiti:</h2>
        <ListGroup>
          {jobs.length !== 0 ? (
            jobs.map((Job, index) => {
              console.log(Job);
              return (
                <ListGroup.Item
                  key={"job-" + index}
                  className="my-4 border-top shadow-lg"
                >
                  <div className="d-flex justify-content-between">
                    <Link to={`/${Job.company_name}`}>{Job.company_name}</Link>
                    <a href={Job.url}>{Job.title}</a>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <span>
                      <strong>residenza del candidato: </strong>
                      <br />
                      {Job.candidate_required_location}
                    </span>
                    <span>
                      <strong>Tipo di lavoro:</strong>
                      <br />
                      {Job.job_type}
                    </span>
                    <span>
                      <strong>Data di publicazione:</strong>
                      <br />
                      {new Date(Job.publication_date).toLocaleString()}
                    </span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-center align-items-center">
                    <Button
                      variant="danger"
                      className="py-1 px-5 mt-2"
                      onClick={() => {
                        dispatch({
                          type: "REMOVE_FAVOURITES_JOBS",
                          payload: index,
                        });
                      }}
                    >
                      DELETE
                    </Button>
                  </div>
                </ListGroup.Item>
              );
            })
          ) : (
            <Alert variant="warning">
              Non hai aggiunto alcun lavoro nei preferiti!
            </Alert>
          )}
        </ListGroup>
      </Container>
    </>
  );
};

export default Favourites;
