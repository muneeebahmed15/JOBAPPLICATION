import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FaRegUser } from "react-icons/fa";

const SheduleInterview = ({
  interviewModal,
  setInterviewModal,
  data,
  changeHandler,
  sheduleInterview,
  loading,
}) => {
  return (
    <>
      <Modal
        show={interviewModal}
        onHide={() => setInterviewModal(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="border-bottom border-1 border-dark"
            style={{ width: "100%" }}
          >
            <FaRegUser size={20} /> Schedule Interview
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <div className="row">
              <div className="col-md-6">
                <div>
                  <label className="form-label">
                    <b>Date</b>
                  </label>
                  <input
                    required
                    type="date"
                    name="interviewDate"
                    value={data.interviewDate}
                    onChange={changeHandler}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div>
                  <label className="form-label">
                    <b>Time</b>
                  </label>
                  <input
                    required
                    type="time"
                    name="interviewTime"
                    value={data.interviewTime}
                    onChange={changeHandler}
                    className="form-control"
                  />
                </div>
              </div>

              {/* <div className="col-md-12 mt-2">
                <label className="form-label">
                  <b>Employee Name</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={interviewData.name}
                  onChange={changeHandler}
                />
              </div> */}

              {/* <div className='col-md-12 mt-2'>
     <label className='form-label'><b>Employee Email</b></label>
     <input type="text" className='form-control' value={interviewData.email} name='email' onChange={changeHandler}/>
  </div> */}

              <div className="col-md-12 mt-2">
                <label className="form-label">
                  <b>Interviewee</b>
                </label>

                <select
                  name="interviewee"
                  value={data.interviewee}
                  onChange={changeHandler}
                  className="form-select"
                >
                  <option value="">Choose Interviewee</option>
                  <option value="Zaka Rahman">Zaka Rahman</option>
                  <option value="Sunny Rahman">Sunny Rahman</option>
                  <option value="Muzammil Iqrar">Muzammil Iqrar</option>
                  <option value="Sobiyaal Zahoor">Sobiyaal Zahoor</option>
                  <option value="HR">HR</option>
                </select>
              </div>

              {/* <div className="col-md-6 mt-2">
                <label className="form-label">Interviewee</label>
                <select
                  className="form-select"
                  value={data.interviewee}
                  name="status"
                  onChange={changeHandler}
                >
                  {/* <option selected>Choose Interviewee</option> 
                  <option value="Zaka Rahman">Zaka Rahman</option>
                  <option value="Sunny Rahman">Sunny Rahman</option>
                  <option value="Muzammil Iqrar">Muzammil Iqrar</option>
                  <option value="Sobiyaal Zahoor">Sobiyaal Zahoor</option>
                  <option value="HR">HR</option>
                </select>
              </div> */}

              <div className="col-md-12 mt-2">
                <label className="form-label">
                  <b>Interview Type</b>
                </label>

                <select
                  name="interviewType"
                  value={data.interviewType}
                  onChange={changeHandler}
                  className="form-select"
                >
                  <option>Choose type</option>
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                </select>
              </div>

              {data.interviewType === "online" ? (
                <div className="col-md-12 mt-2">
                  <label className="form-label">
                    <b>Zoom Link</b>
                  </label>
                  <input
                    type="text"
                    name="interviewLocation"
                    value={data.interviewLocation}
                    onChange={changeHandler}
                    className="form-control"
                    placeholder="Zoom Link here..."
                  />
                </div>
              ) : data.interviewType === "offline" ? (
                <div className="col-md-12 mt-2">
                  <label>
                    <b>Interview Location</b>
                  </label>
                  <input
                    required
                    type="text"
                    name="interviewLocation"
                    value={data.interviewLocation}
                    onChange={changeHandler}
                    className="form-control"
                    placeholder="Interview Location here..."
                  />
                </div>
              ) : (
                ""
              )}

              <div className="d-flex align-items-center justify-content-end mt-2">
                <Button
                  style={{ marginRight: "10px" }}
                  onClick={sheduleInterview}
                >
                  {loading ? "loading..." : " Schedule Interview"}
                </Button>

                <Button
                  variant="light"
                  onClick={() => setInterviewModal(false)}
                >
                  Discard
                </Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SheduleInterview;
