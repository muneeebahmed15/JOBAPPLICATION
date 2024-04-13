import React, { useState } from "react";
import { Row, Col, Dropdown, ButtonGroup, Card } from "react-bootstrap";
import FeatherIcon from "feather-icons-react";

// components
import ShreyuDatepicker from "../../../components/Datepicker";
import MembersList from "../../../components/MembersList";
import Tasks from "../../../components/Tasks";
import ChatList from "../../../components/ChatList";

import Statistics from "./Statistics";
import OverView from "./OverView";
import RevenueChart from "./RevenueChart";
import TargetChart from "./TargetChart";
import SalesChart from "./SalesChart";
import Orders from "./Orders";

// dummy data
import { orderDetails, topPerformers, tasks, chatMessages } from "./data";
import StatisticsChartWidget from "../../../components/StatisticsChartWidget";
import StatisticsWidget from "../../widgets/StatisticsWidget";
import InterviewList from "../Interviews/InterviewList";
import AllJobs from "../JobOpenings/AllJobs";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoBagRemoveOutline } from "react-icons/io5";
// import BreadCrumbs from "../../UI Components/BreadCrumbs";
// import { useLocation } from "react-router-dom";


const jobs =[
  {
    id: 1,
    icon: <MdOutlineDeveloperMode size={20} color='white'/>,
    title: "Full Stack Developer",
    status: "Active",
    totalApplicants: 10,
    jobType: "Full Time",
    posted: "12/2/24",
    jobStatus: "Onsite",
    experience: "2 Years",
    location: "Islamabad",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, dolores.",
  },
  {
    id: 2,
    icon: <MdOutlineDeveloperMode size={20} color='white'/>,
    title: "React Native Developer",
    status: "Active",
    candidatesRequired: 1,
    candidatesHired: 0,
    candidatesInterviewed: 2,
    posted: "12/3/23",
    jobType: "Full Time",
    jobStatus: "Onsite",
    experience: "1 Years",
    location: "Islamabad",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, dolores.",
  },
  {
    id: 3,
    icon: <MdOutlineDeveloperMode size={20} color='white'/>,
    title: "UI/UX Designer",
    status: "Inactive",
    candidatesRequired: 3,
    candidatesHired: 1,
    candidatesInterviewed: 5,
    posted: "12/1/24",
    jobType: "Internship",
    jobStatus: "Onsite",
    experience: "2 Years",
    location: "Islamabad",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, dolores.",
  },
  {
    id: 4,
    icon: <MdOutlineDeveloperMode size={20} color='white'/>,
    title: "UI/UX Designer",
    status: "Inactive",
    candidatesRequired: 3,
    candidatesHired: 1,
    candidatesInterviewed: 5,
    posted: "20/2/24",
    jobType: "Internship",
    jobStatus: "Onsite",
    experience: "2 Years",
    location: "Islamabad",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, dolores.",
  },
]



const EcommerceDashboard = () => {
  // const path = useLocation().pathname;

  const [dateRange, setDateRange] = useState<any>([
    new Date(),
    new Date().setDate(new Date().getDate() + 7),
  ]);
  const [startDate, endDate] = dateRange;

  /*
   * handle date change
   */
  const onDateChange = (date: Date) => {
    if (date) {
      setDateRange(date);
    }
  };

  return (
    <>
    {/* <BreadCrumbs path={path}/> */}
      <Row>
        <Col>
          <div className="page-title-box">
            <h4 className="page-title">Dashboard</h4>
            <div className="page-title-right">
              <form className="float-md-end mt-3 mt-md-0">
                <Row className="g-2">
                  <Col md={"auto"}>
                    <div className="mb-1 mb-sm-0">
                      <ShreyuDatepicker
                        selectsRange
                        startDate={startDate}
                        endDate={endDate}
                        hideAddon={true}
                        dateFormat={"yyyy/MM/dd"}
                        onChange={(date) => {
                          onDateChange(date);
                        }}
                      />
                    </div>
                  </Col>
                  <Col md={"auto"}>
                    <Dropdown as={ButtonGroup} align="end">
                      <Dropdown.Toggle
                        variant="primary"
                        id="dropdown-basic"
                        className="cursor-pointer"
                      >
                        <i className="uil uil-file-alt me-1"></i>Download
                        <i className="icon">
                          <FeatherIcon icon="chevron-down" />
                        </i>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item className="notify-item" href="#/">
                          <FeatherIcon
                            icon="mail"
                            className="icon-dual icon-xs me-2"
                          />
                          <span>Email</span>
                        </Dropdown.Item>
                        <Dropdown.Item className="notify-item" href="#/">
                          <FeatherIcon
                            icon="printer"
                            className="icon-dual icon-xs me-2"
                          />
                          <span>Print</span>
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item className="notify-item" href="#/">
                          <FeatherIcon
                            icon="file"
                            className="icon-dual icon-xs me-2"
                          />
                          <span>Re-Generate</span>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                </Row>
              </form>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
      <Col sm={6} xl={3}>
          <StatisticsWidget
            variant="primary"
            title="Jobs Open"
            stats="7"
            icon="briefcase"
          />
        </Col>

        <Col sm={6} xl={3}>
          <StatisticsWidget
            variant="primary"
            title="CV's Receive"
            stats="17"
            icon="file"
          />
        </Col>

        <Col sm={6} xl={3}>
          <StatisticsWidget
            variant="primary"
            title="Interviewed"
            stats="3"
            icon="file"
          />
        </Col>

        <Col sm={6} xl={3}>
          <StatisticsWidget
            variant="primary"
            title="Hired"
            stats="2"
            icon="user"
          />
        </Col>
      </Row>

      <InterviewList from={"dashboard"}/>

      <Card>
                <Card.Body>
                    <h4 className='mb-3' style={{ display: 'flex', alignItems: 'center' }}>
                        <IoBagRemoveOutline size={25} style={{marginRight: "5px"}}/>
                        Current Vacancies
                        </h4>
                
            {jobs.map((x)=>(
            <Link to={`/hiring-management/job-openings/details/${x.id}`}>
            <Card className='mb-1'>
                <Card.Body className="p-2">
                  <div className='d-flex align-items-center justify-content-between'>
                   <div className='d-flex align-items-center justify-content-start'>
                     <div className='p-2 bg-primary rounded-circle' style={{ marginRight: "5px" }}>
                       {x.icon}
                     </div>
                     <div className='d-flex flex-column'>
                       <span className="text-muted text-uppercase fs-14 fw-bold">
                         {x.title}
                       </span>
                       <small>Company: <b>Sun Skills Techs</b></small>
                     </div>
                   </div>

                    <div className='d-flex flex-column'>
                      <small>Posted Date: <b>{x.posted}</b></small>
                      <small>Total Candidates: <b>5</b></small>
                    </div>    
                  
                 </div>
                </Card.Body>
            </Card>
            </Link>
            ))}

            </Card.Body>
            </Card>

      {/* <Row>
        <Col xl={3}>
          <OverView />
        </Col>
        <Col xl={6}>
          <RevenueChart />
        </Col>
        <Col xl={3}>
          <TargetChart />
        </Col>
      </Row>

      <Row>
        <Col xl={5}>
          <SalesChart />
        </Col>
        <Col xl={7}>
          <Orders orderDetails={orderDetails} />
        </Col>
      </Row> */}

      {/* <Row>
        <Col xl={4}>
          <MembersList title={"Top Performers"} members={topPerformers} />
        </Col>
        <Col xl={4}>
          <Tasks tasks={tasks} />
        </Col>
        <Col xl={4}>
          <ChatList title="Recent Conversation" messages={chatMessages} />
        </Col>
      </Row> */}
    </>
  );
};

export default EcommerceDashboard;
