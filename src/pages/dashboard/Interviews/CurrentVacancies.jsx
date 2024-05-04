import React from "react";
import { Card, ProgressBar } from "react-bootstrap";
import { IoBagRemoveOutline } from "react-icons/io5";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { AllJob } from "../../actions/jobOpenings";

const insights = [
  {
    title: "Hired",
    progress: "60",
  },
  {
    title: "Rejected",
    progress: "30",
  },
  {
    title: "Onhold",
    progress: "10",
  },
];

const CurrentVacancies = ({ from }) => {
  const { list, loading } = AllJob();

  return (
    <>
      <div className="row">
        <div className={from === "dashboard" ? "col-12" : "col-md-7"}>
          <Card>
            <Card.Body>
              <h4 className="mb-3" style={{ display: "flex", alignItems: "center" }}>
                <IoBagRemoveOutline size={25} style={{ marginRight: "5px" }} />
                Current Vacancies
              </h4>

              {list?.map((x) => (
                <Link to={`/hiring-management/job-openings/details/${x.id}`} key={x._id}>
                  <Card className="mb-1">
                    <Card.Body className="p-2">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center justify-content-start">
                          <div
                            className="p-2 bg-primary rounded-circle"
                            style={{ marginRight: "5px" }}
                          >
                            <MdOutlineDeveloperMode size={20} />
                          </div>
                          <div className="d-flex flex-column">
                            <span className="text-muted text-uppercase fs-14 fw-bold">
                              {x.title}
                            </span>
                            <small>
                              Company: <b>Sun Skills Techs</b>
                            </small>
                          </div>
                        </div>

                        <div className="d-flex flex-column">
                          <small>
                            Posted Date: <b>{x.createdAt?.slice(0, 10)}</b>
                          </small>
                          <small>
                            Total Candidates: <b>{x.applicants?.length}</b>
                          </small>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Link>
              ))}
            </Card.Body>
          </Card>
        </div>

        {from === "interviews" && (
          <div className="col-md-5">
            <Card>
              <Card.Body>
                <h4>Interview Insights</h4>

                {insights.map((x, index) => (
                  <div key={index}>
                    <span className="text-muted text-uppercase fs-12 fw-bold">
                      {x.title}
                    </span>
                    <ProgressBar
                      now={x.progress}
                      variant="primary"
                      label={`${x.progress}%`}
                      style={{ height: "15px" }}
                      className="mb-2"
                    />
                  </div>
                ))}
              </Card.Body>
            </Card>
          </div>
        )}
      </div>
    </>
  );
};

export default CurrentVacancies;
