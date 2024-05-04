import React from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { FaRegUser } from "react-icons/fa";

const CandidatesModal = ({ modal, setModal, data, loading }) => {
  return (
    <Modal
      show={modal}
      onHide={() => setModal(false)}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="border-bottom border-1 border-dark"
          style={{ width: "100%" }}
        >
          <FaRegUser size={20} /> Candidate Summary
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {loading ? (
          "loading..."
        ) : (
          <div>
            <Card>
              <Card.Body>
                <b className="text-secondary">
                  <small>Candidate Information</small>
                </b>
                <div className="d-flex align-items-center">
                  <table style={{ width: "100%" }}>
                    <tbody>
                      <tr>
                        {data?.name && <th>Name</th>}
                        {data?.city && <th>City</th>}
                      </tr>
                      <tr>
                        {data?.name && <td>{data.name}</td>}
                        {data?.city && <td>{data.city}</td>}
                      </tr>

                      <tr>
                        {data?.email && <th>Email</th>}
                        {data?.phone && <th>Phone</th>}
                      </tr>
                      <tr>
                        {data?.email && <td>{data.email}</td>}
                        {data?.phone && <td>{data.phone}</td>}
                      </tr>

                      <tr>
                        {data?.linkedIn && <th>LinkedIn</th>}
                        {data?.education && <th>Educaion</th>}
                      </tr>
                      <tr>
                        {data?.linkedIn && <td>{data.linkedIn}</td>}
                        {data?.education && <td>{data.education}</td>}
                      </tr>

                      <tr>
                        {data?.jobId?.title && <th>Applied for</th>}
                        {data?.createdAt && <th>Applied On</th>}
                      </tr>
                      <tr>
                        {data?.jobId?.title && <td>{data.jobId?.title}</td>}
                        {data?.createdAt && (
                          <td>{data.createdAt.slice(0, 10)}</td>
                        )}
                      </tr>

                      <tr>
                        {data?.technicalSkills && <th>Technical Skills</th>}
                        {data?.joining && <th>Available for Joining</th>}
                      </tr>
                      <tr>
                        {data?.technicalSkills && (
                          <td>{data.technicalSkills}</td>
                        )}
                        {data?.joining && <td>{data.joining}</td>}
                      </tr>

                      <tr>
                        {data?.salaryExpectation && <th>Expected Salary</th>}
                        {data?.previousSalary && <th>Current Salary</th>}
                      </tr>
                      <tr>
                        {data?.salaryExpectation && (
                          <td>{data.salaryExpectation}</td>
                        )}
                        {data?.previousSalary && <td>{data.previousSalary}</td>}
                      </tr>

                      <tr>
                        {data?.workExperience && <th>Work Experience</th>}
                        {data?.interviewAvailability && (
                          <th>Availability for Interview</th>
                        )}
                      </tr>
                      <tr>
                        {data?.workExperience && <td>{data.workExperience}</td>}
                        {data?.interviewAvailability && (
                          <td>{data.interviewAvailability}</td>
                        )}
                      </tr>

                      <tr>
                        <td colSpan={"2"}>
                          <Button className="mt-3" style={{ width: "100%" }}>
                            CV
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card.Body>
            </Card>
          </div>
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button
          variant="light"
          className="text-dark"
          onClick={() => setModal(false)}
        >
          Discard
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CandidatesModal;
