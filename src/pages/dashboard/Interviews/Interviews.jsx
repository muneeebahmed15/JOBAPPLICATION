import React from "react";
import { useLocation } from "react-router-dom";
import BreadCrumbs from "../../UI Components/BreadCrumbs";
import InterviewTable from "./InterviewList";
import { GetInterviews } from "../../actions/interview";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CurrentVacancies from "./CurrentVacancies";

const Interviews = () => {
  const path = useLocation().pathname;

  return (
    <>
      <BreadCrumbs path={path} />

      <div className="d-flex justify-content-between align-items-center">
        <h1 className="my-3">All Interviews</h1>

        <div>
          <Link to={"/hiring-management/interviews/conducted-interviews"}>
            <Button className="me-1">Conducted Interviews</Button>
          </Link>

          <Link to={"/hiring-management/interviews/hired"}>
            <Button>Hired Candidates</Button>
          </Link>
        </div>
      </div>

      <InterviewTable from={"interviews"} />

      <CurrentVacancies from={"interviews"} />
    </>
  );
};

export default Interviews;
