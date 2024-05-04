import React, { useState } from "react";
import { Button, Card, Table } from "react-bootstrap";
import avatar1 from "../../../assets/images/users/avatar-1.jpg";
import { IoVideocamOutline } from "react-icons/io5";
import { GrUpgrade } from "react-icons/gr";
import logoIcon from "../../../assets/images/logo-icon.png";
import CandidatesModal from "../AllCandidates/CandidatesModal";
import { GetInterviews, UpdateInterview } from "../../actions/interview";
import { SingleCandidate } from "../../actions/candidateApply";
import { FaRegCommentAlt } from "react-icons/fa";
import CommentsModel from "./CommentsModel";

const InterviewList = ({ from }) => {
  const { loading, list } = GetInterviews();

  const { singleCandidate, loading: candidateLoading, record } = SingleCandidate();

  const {
    data,
    loading: updateLoading,
    changeHandler,
    updateInterview,
    setId,
    setCommentModel,
    commentModel,
  } = UpdateInterview();

  const [modal, setModal] = useState(false);

  const sortedList = list?.sort((a, b) => {
    const interviewDateA = new Date(a.interviewDate).toISOString().slice(0, 10);
    const interviewDateB = new Date(b.interviewDate).toISOString().slice(0, 10);
    const currentDate = new Date().toISOString().slice(0, 10);

    // Check if interview A is happening today
    const isCurrentDayA = interviewDateA === currentDate;

    // Check if interview B is happening today
    const isCurrentDayB = interviewDateB === currentDate;

    // If interview A is happening today but not interview B, prioritize A
    if (isCurrentDayA && !isCurrentDayB) {
      return -1;
    }

    // If interview B is happening today but not interview A, prioritize B
    if (!isCurrentDayA && isCurrentDayB) {
      return 1;
    }

    // If both interviews are happening today or both are not happening today,
    // sort them based on their interview dates
    if (interviewDateA === currentDate && interviewDateB === currentDate) {
      return interviewDateA.localeCompare(interviewDateB);
    }

    // If both interviews are not happening today,
    // prioritize upcoming interviews over passed interviews
    if (interviewDateA > currentDate && interviewDateB > currentDate) {
      return interviewDateA.localeCompare(interviewDateB);
    }

    return interviewDateB.localeCompare(interviewDateA);
  });

  const filteredList = sortedList?.filter((x) =>
    from === "conductedInterview"
      ? x.interviewConducted &&
        x.hiringStatus !== "Hired" &&
        x.hiringStatus !== "Rejected"
      : from === "hired"
      ? x.hiringStatus === "Hired"
      : !x.interviewConducted
  );
  // console.log(filteredList);
  return (
    <>
      <Card>
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center">
            <h4 style={{ display: "flex", alignItems: "center" }}>
              <IoVideocamOutline size={25} style={{ marginRight: "5px" }} />{" "}
              {from === "conductedInterview"
                ? "Conducted Interview"
                : from === "hired"
                ? "Hired Candidates"
                : "Upcoming Interviews"}
            </h4>
          </div>

          <div className="table-responsive">
            <Table className="mb-0">
              <thead className="table-light">
                <tr>
                  <th scope="col">Picture</th>
                  <th scope="col">Interviewer</th>
                  <th scope="col">Date</th>
                  <th scope="col">Time</th>
                  <th scope="col">Company</th>
                  <th scope="col">Interviewee</th>
                  <th scope="col">Interview Type</th>
                  {(from === "interviews" || from === "dashboard") && (
                    <th scope="col">Actions</th>
                  )}
                  {(from === "interviews" || from === "dashboard") && (
                    <th scope="col">Comments</th>
                  )}
                  {(from === "conductedInterview" || from === "hired") && (
                    <th scope="col">Status</th>
                  )}
                  {from === "conductedInterview" && <th scope="col">Update Status</th>}
                </tr>
              </thead>
              <tbody>
                {loading
                  ? "loading..."
                  : filteredList?.map((x) => (
                      <tr key={x._id} onClick={() => setId(x._id)}>
                        <td style={{ verticalAlign: "middle" }}>
                          <img
                            src={avatar1}
                            alt=""
                            width={50}
                            className="rounded-circle"
                          />
                        </td>
                        <td style={{ verticalAlign: "middle" }}>{x.candidateId?.name}</td>
                        <td
                          style={{
                            verticalAlign: "middle",
                            color:
                              x.interviewDate === new Date().toISOString().slice(0, 10)
                                ? "red"
                                : x.interviewDate > new Date().toISOString().slice(0, 10)
                                ? "green"
                                : "",
                          }}
                        >
                          {x.interviewDate}
                        </td>
                        <td style={{ verticalAlign: "middle" }}>{x.interviewTime}</td>
                        <td style={{ verticalAlign: "middle" }}>
                          <img
                            src={logoIcon}
                            alt="logo"
                            width={20}
                            style={{ marginBottom: "0px" }}
                          />
                        </td>
                        <td style={{ verticalAlign: "middle" }}>{x.interviewee}</td>
                        <td style={{ verticalAlign: "middle" }}>{x.interviewType}</td>
                        {(from === "interviews" || from === "dashboard") && (
                          <td style={{ verticalAlign: "middle" }}>
                            <div className="d-flex">
                              <Button
                                variant="light"
                                // className="bg-light p-1 cursor-pointer rounded-2"
                                onClick={() => {
                                  singleCandidate(x.candidateId._id);
                                  setModal(true);
                                }}
                              >
                                <small>Details</small>
                              </Button>
                              {x.interviewType === "online" ? (
                                <Button
                                // className="bg-primary text-light p-1 cursor-pointer rounded-2"
                                >
                                  <small>Meeting</small>
                                </Button>
                              ) : (
                                ""
                              )}
                            </div>
                          </td>
                        )}
                        {(from === "interviews" || from === "dashboard") && (
                          <td style={{ verticalAlign: "middle" }}>
                            <Button
                              variant="light"
                              onClick={() => {
                                setCommentModel(true);
                                setId(x._id);
                              }}
                            >
                              <FaRegCommentAlt size={20} />
                            </Button>
                          </td>
                        )}

                        {from === "conductedInterview" && (
                          <td style={{ verticalAlign: "middle" }}>
                            <select
                              className="form-select"
                              name="hiringStatus"
                              value={data.hiringStatus}
                              onChange={changeHandler}
                            >
                              <option value="Pending">Pending</option>
                              <option value="Hired">Hired</option>
                              <option value="Rejected">Rejected</option>
                            </select>
                          </td>
                        )}
                        {from === "conductedInterview" && (
                          <td style={{ verticalAlign: "middle" }}>
                            <Button
                              onClick={() => {
                                // setId(x._id);
                                updateInterview();
                              }}
                            >
                              {updateLoading ? "loading..." : <GrUpgrade size={20} />}
                            </Button>
                          </td>
                        )}
                        {from === "hired" && (
                          <td style={{ verticalAlign: "middle" }}>{x.hiringStatus}</td>
                        )}
                      </tr>
                    ))}
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

      <CommentsModel
        setCommentModel={setCommentModel}
        commentModel={commentModel}
        data={data}
        loading={updateLoading}
        changeHandler={changeHandler}
        updateInterview={updateInterview}
      />
    </>
  );
};

export default InterviewList;
