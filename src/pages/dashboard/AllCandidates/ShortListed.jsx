import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import CandidateTable from "./CandidateTable";

const ShortListed = () => {
  return (
    <div>
      <Link to="/hiring-management/all-candidates">
        <Button className="d-flex justify-content-center align-items-center my-3">
          <IoIosArrowBack /> Back
        </Button>
      </Link>

      <CandidateTable from={"shortlisted"} />
    </div>
  );
};

export default ShortListed;
