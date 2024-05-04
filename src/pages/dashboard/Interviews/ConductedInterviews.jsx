import React from "react";
import InterviewList from "./InterviewList";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { IoIosArrowBack } from "react-icons/io";

const ConductedInterviews = () => {
  return (
    <>
      <Link to="/hiring-management/interviews">
        <Button className="d-flex justify-content-center align-items-center my-3">
          <IoIosArrowBack /> Back
        </Button>
      </Link>

      <InterviewList from={"conductedInterview"} />
    </>
  );
};

export default ConductedInterviews;
