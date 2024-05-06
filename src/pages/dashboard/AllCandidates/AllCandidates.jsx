import React from "react";
import { useLocation } from "react-router-dom";
import BreadCrumbs from "../../UI Components/BreadCrumbs";
import CandidateTable from "./CandidateTable";
import { Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";

const AllCandidates = () => {
  const path = useLocation().pathname;
  return (
    <div>
      <BreadCrumbs path={path} />

      <div className="d-flex justify-content-between align-items-center">
        <h1>All Candidates</h1>

        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            <TiThMenu size={20} />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to={"/hiring-management/interviews/hired"}>
                <Button className="me-1">Hired Candidates</Button>
              </Link>
            </Dropdown.Item>

            <Dropdown.Item>
              <Link to={"/hiring-management/all-candidates/shortlisted"}>
                <Button className="me-1">Shortlisted Candidates</Button>
              </Link>
            </Dropdown.Item>

            <Dropdown.Item>
              <Link to={"/hiring-management/all-candidates/rejected"}>
                <Button>Rejected Candidates</Button>
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* <div className="d-flex justify-content-between align-items-center">
          <Link to={"/hiring-management/interviews/hired"}>
            <Button className="me-1">Hired Candidates</Button>
          </Link>

          <Link to={"/hiring-management/all-candidates/shortlisted"}>
            <Button className="me-1">Shortlisted Candidates</Button>
          </Link>

          <Link to={"/hiring-management/all-candidates/rejected"}>
            <Button>Rejected Candidates</Button>
          </Link>
        </div> */}
      </div>

      <CandidateTable from={"allCandidates"} />
    </div>
  );
};

export default AllCandidates;
