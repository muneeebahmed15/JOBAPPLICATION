import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import avatar1 from "../../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../../assets/images/users/avatar-2.jpg";
import logoIcon from "../../../assets/images/logo-icon.png";
import CandidatesModal from "./CandidatesModal";
import SheduleInterview from "./SheduleInterview";
import { AllCandidates, SingleCandidate } from "../../actions/candidateApply";
import { Interview } from "../../actions/interview";

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

const CandidateTable = () => {
  const { loading, list } = AllCandidates();
  const {
    singleCandidate,
    loading: candidateLoading,
    record,
  } = SingleCandidate();

  const {
    loading: interviewLoading,
    changeHandler,
    setData,
    data,
    sheduleInterview,
    setInterviewModal,
    interviewModal,
  } = Interview();

  const [modal, setModal] = useState(false);
  const [aData, setAdata] = useState([]);

  useEffect(() => {
    if (list) {
      setAdata(list);
    }
  }, [list]);

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

  return (
    <>
      <Card>
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center">
            <input
              type="text"
              className="form-control"
              placeholder="Search...."
              onChange={searchHandler}
              style={{ maxWidth: "25%" }}
            />
            {/* <FaEdit size={20} role='button' onClick={()=>setDel(true)}/> */}
          </div>

          {aData
            ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .map((x) => (
              <div className="row" key={x._id}>
                <hr className="mt-2" />

                <div className="d-flex justify-content-between align-items-center">
                  <div
                    className="d-flex justify-content-between align-items-center"
                    style={{ width: "60%" }}
                  >
                    <div className="d-flex align-items-center">
                      <img
                        src={avatar1}
                        alt=""
                        width={50}
                        className="rounded-circle"
                      />

                      <div style={{ marginLeft: "15px" }}>
                        <b>{x.name}</b>
                      </div>
                    </div>

                    <div className="d-flex flex-column align-items-center">
                      <small className="text-secondary">Apply Date</small>
                      <p style={{ marginBottom: "0px" }}>
                        {x.createdAt?.slice(0, 10)}
                      </p>
                    </div>

                    <div className="d-flex flex-column align-items-center">
                      <small className="text-secondary">Company</small>
                      <img
                        src={logoIcon}
                        alt="logo"
                        width={20}
                        style={{ marginBottom: "0px" }}
                      />
                    </div>

                    <div className="d-flex flex-column align-items-center">
                      <small className="text-secondary">Applied for</small>
                      <p style={{ marginBottom: "0px" }}>
                        {x.jobId?.title ? x.jobId?.title : "idhr kya kr rhy?"}
                      </p>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <Button
                      variant="light"
                      onClick={() => {
                        singleCandidate(x._id);
                        setModal(true);
                      }}
                    >
                      View Details
                    </Button>
                    <Button
                      className="mx-4"
                      onClick={() => {
                        setData((prevData) => ({
                          ...prevData,
                          candidateId: x._id,
                          jobId: x.jobId._id,
                        }));
                        setInterviewModal(true);
                      }}
                    >
                      Shedule Interview
                    </Button>
                    {/* {del && <FaDeleteLeft size={20} role='button' onClick={()=>deleting(x.id)}/> } */}
                  </div>
                </div>
              </div>
            ))}
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
    </>
  );
};

export default CandidateTable;
