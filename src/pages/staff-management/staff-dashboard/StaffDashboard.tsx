import React from "react";
import AllEmpoyees from "../AllEmployees/AllEmpoyees";
import EmployeesTable from "../AllEmployees/EmployeesTable";
import StaffWidgets from "./staff-widgets";
import TeamMembers from "./team-members";
import EmployeeTable from "../AllEmployees/EmployeeTable";

const StaffDashboard = () => {
  return (
    <>
      <div className="d-flex flex-column my-4">
        <h1>Dashboard</h1>

        <div className="mt-3">
          <StaffWidgets />
        </div>

        {/* <div className="mt-3">
          <TeamMembers />
        </div> */}

        <div className="mt-3">
          <EmployeeTable />
        </div>
      </div>
    </>
  );
};

export default StaffDashboard;
