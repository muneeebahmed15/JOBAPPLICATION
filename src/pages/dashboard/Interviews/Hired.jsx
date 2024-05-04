import React from "react";
import { Button } from "react-bootstrap";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import InterviewList from "./InterviewList";

const Hired = () => {
  return (
    <>
      <Link to="/hiring-management/interviews">
        <Button className="d-flex justify-content-center align-items-center my-3">
          <IoIosArrowBack /> Back
        </Button>
      </Link>

      <InterviewList from={"hired"} />
    </>
  );
};

export default Hired;
