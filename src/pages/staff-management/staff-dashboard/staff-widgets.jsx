import React from "react";
import { Col, Row } from "react-bootstrap";
import StatisticsWidget from "../../widgets/StatisticsWidget";
import { Department } from "../../actions/department";
import { GetEmployee } from "../../actions/employee";

const StaffWidgets = () => {
  const { allDep } = Department();
  const { data } = GetEmployee();

  return (
    <>
      <Row>
        <Col sm={6} xl={3}>
          <StatisticsWidget
            variant="primary"
            title="Total Departments"
            stats={allDep?.length}
            icon="briefcase"
          />
        </Col>
        <Col sm={6} xl={3}>
          <StatisticsWidget
            variant="warning"
            title="Total Employees"
            stats={data?.length}
            icon="users"
          />
        </Col>
        <Col sm={6} xl={3}>
          <StatisticsWidget
            variant="success"
            title="Active Employees"
            stats={data?.length}
            icon="users"
          />
        </Col>
        <Col sm={6} xl={3}>
          <StatisticsWidget
            variant="info"
            title="New Employees"
            stats={data?.length}
            icon="user"
          />
        </Col>
      </Row>
    </>
  );
};

export default StaffWidgets;
