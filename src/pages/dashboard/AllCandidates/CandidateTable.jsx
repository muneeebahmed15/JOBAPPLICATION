import React, { useEffect, useState } from "react";
import { Button, Card, Dropdown, Table } from "react-bootstrap";
import avatar1 from "../../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../../assets/images/users/avatar-2.jpg";
import logoIcon from "../../../assets/images/logo-icon.png";
import CandidatesModal from "./CandidatesModal";
import SheduleInterview from "./SheduleInterview";
import {
  AllCandidates,
  ApplyJob,
  SingleCandidate,
  UpdateStatus,
} from "../../actions/candidateApply";
import { Interview } from "../../actions/interview";
import JobModel from "../JobOpenings/JobModel";
import { AllJob } from "../../actions/jobOpenings";

// const data = [
//   {
//     id: "1",
//     img: avatar1,
//     name: "ABC",
//     appliedFor: "Web Developer",
//     appliedOn: "10/12/23",
//     company: logoIcon,
//   },
//   {
//     id: "2",
//     img: avatar2,
//     name: "DEF",
//     appliedFor: "App Developer",
//     appliedOn: "10/02/24",
//     company: logoIcon,
//   },
// ];

const CandidateTable = ({ from }) => {
  const { loading, list, setList } = AllCandidates();
  const { singleCandidate, loading: candidateLoading, record } = SingleCandidate();
  const [updateRecord, setUpdateRecord] = useState();
  const { list: jobList } = AllJob();

  // console.log(list.length);

  const [id, setId] = useState();

  const [modal, setModal] = useState(false);
  const [aData, setAdata] = useState([]);

  const {
    loading: interviewLoading,
    changeHandler,
    setData,
    data,
    sheduleInterview,
    setInterviewModal,
    interviewModal,
  } = Interview();

  const {
    data: updateStatus,
    loading: updateLoading,
    statusHandler,
    setData: setUpdateStatus,
  } = UpdateStatus(setList);

  const {
    applyJob,
    data: candidateData,
    setData: applySetData,
    loading: applyLoading,
    changeHandler: applyHandler,
    setModel,
    model,
  } = ApplyJob(setUpdateRecord);

  useEffect(() => {
    if (updateRecord) {
      setAdata((prev) => [...prev, updateRecord]);
    }
  }, [updateRecord]);

  useEffect(() => {
    if (list) {
      setAdata(list);
    }
  }, [list]);

  useEffect(() => {
    if (id) {
      setUpdateStatus((prevState) => ({ ...prevState, id: id }));
    }
  }, [id]);

  const searchHandler = (e) => {
    const filterValue = e.target.value;
    const newData = list?.filter(
      (x) =>
        (x.name && x.name.toLowerCase().includes(filterValue.toLowerCase())) ||
        (x.jobId?.title &&
          x.jobId.title.toLowerCase().includes(filterValue.toLowerCase()))
    );
    setAdata(newData);
  };

  const handleDropdownChange = (selectedTitle) => {
    if (selectedTitle === "All") {
      setAdata(list); // Show all data
    } else {
      const newData = list?.filter(
        (x) => x.jobId?.title.toLowerCase() === selectedTitle.toLowerCase()
      );
      setAdata(newData); // Filter based on selected title
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          {from === "shortlisted" && <h4>Shortlisted Candidates</h4>}
          <div className="d-flex justify-content-between align-items-center">
            <input
              type="text"
              className="form-control"
              placeholder="Search...."
              onChange={searchHandler}
              style={{ maxWidth: "25%" }}
            />

            <div className="d-flex">
              {from === "allCandidates" && (
                <Button className="me-1" onClick={() => setModel(true)}>
                  Add Candidate
                </Button>
              )}
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  Filter by
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item key="all" onClick={() => handleDropdownChange("All")}>
                    All
                  </Dropdown.Item>
                  {jobList?.map((x, index) => (
                    <Dropdown.Item
                      key={index}
                      onClick={() => handleDropdownChange(x.title)}
                    >
                      {x.title}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>

          <div className="table-responsive">
            <Table className="mb-0">
              <thead className="table-light">
                <tr>
                  <th scope="col">Picture</th>
                  <th scope="col">Candidate</th>
                  <th scope="col">Apply Date</th>
                  <th scope="col">Company</th>
                  <th scope="col">Applied For</th>
                  {from !== "allCandidates" && <th scope="col">Current Status</th>}
                  <th scope="col">Details</th>
                  <th scope="col">Shedule Interview</th>
                  <th scope="col">
                    {from === "allCandidates" ? "Status" : "Change Status"}
                  </th>
                </tr>
              </thead>

              <tbody>
                {aData
                  ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                  .map(
                    (x) =>
                      (from === "shortlisted"
                        ? x.status === "Shortlisted"
                        : from === "rejected"
                        ? x.status === "Rejected"
                        : x.status === "Pending") && (
                        <tr key={x._id} onClick={() => setId(x._id)}>
                          <td style={{ verticalAlign: "middle" }}>
                            <img
                              src={avatar1}
                              alt=""
                              width={50}
                              className="rounded-circle"
                            />
                          </td>

                          <td style={{ verticalAlign: "middle" }}>
                            <b>{x.name}</b>
                          </td>

                          <td style={{ verticalAlign: "middle" }}>
                            {x.createdAt?.slice(0, 10)}
                          </td>

                          <td style={{ verticalAlign: "middle" }}>
                            <img src={logoIcon} alt="logo" width={20} />
                          </td>

                          <td style={{ verticalAlign: "middle", width: "110px" }}>
                            {x.jobId?.title ? x.jobId?.title : "idhr kya kr rhy?"}
                          </td>

                          {from !== "allCandidates" && (
                            <td style={{ verticalAlign: "middle", width: "110px" }}>
                              {x.status}
                            </td>
                          )}

                          <td style={{ verticalAlign: "middle" }}>
                            <Button
                              variant="light"
                              onClick={() => {
                                singleCandidate(x._id);
                                setModal(true);
                              }}
                            >
                              <small> View Details</small>
                            </Button>
                          </td>

                          <td style={{ verticalAlign: "middle" }}>
                            <Button
                              style={{ padding: "3px" }}
                              onClick={() => {
                                setData((prevData) => ({
                                  ...prevData,
                                  candidateId: x._id,
                                  jobId: x.jobId._id,
                                }));
                                setInterviewModal(true);
                              }}
                            >
                              <small>Shedule Interview</small>
                            </Button>
                          </td>

                          <td style={{ verticalAlign: "middle" }}>
                            <select
                              className="form-select"
                              name="status"
                              value={data.status}
                              onChange={statusHandler}
                            >
                              <option selected>Selection Status</option>
                              <option value="Shortlisted">Shortlisted</option>
                              <option value="Rejected">Rejected</option>
                            </select>
                          </td>
                        </tr>
                      )
                  )}
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>

      <CandidatesModal
        modal={modal}
        setModal={setModal}
        data={record}
        loading={candidateLoading}
      />

      <SheduleInterview
        interviewModal={interviewModal}
        setInterviewModal={setInterviewModal}
        data={data}
        changeHandler={changeHandler}
        sheduleInterview={sheduleInterview}
        loading={interviewLoading}
      />

      <JobModel
        model={model}
        setModel={setModel}
        changeHandler={applyHandler}
        loading={applyLoading}
        applyJob={applyJob}
        data={candidateData}
        jobList={jobList}
        from={"candidateTable"}
      />
    </>
  );
};

export default CandidateTable;
