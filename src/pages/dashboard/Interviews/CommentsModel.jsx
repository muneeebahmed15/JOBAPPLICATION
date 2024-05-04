import React from "react";
import { Button, Modal } from "react-bootstrap";

const CommentsModel = ({
  setCommentModel,
  commentModel,
  data,
  loading,
  updateInterview,
  changeHandler,
}) => {
  return (
    <>
      <Modal
        show={commentModel}
        onHide={() => setCommentModel(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="border-bottom border-1 border-dark"
            style={{ width: "100%" }}
          >
            Add Comments
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-end align-items-center mb-2">
                <div className="mr-2">
                  <label className="mb-0">Interview Conducted?</label>
                </div>
              </div>
              <div className="d-flex justify-content-end align-items-center">
                <div className="form-check me-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="interviewConducted"
                    value="true"
                    checked={data.interviewConducted === "true"}
                    onChange={changeHandler}
                  />
                  <label className="form-check-label">Yes</label>
                </div>
                <div className="form-check ml-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="interviewConducted"
                    value="false"
                    checked={data.interviewConducted === "false"}
                    onChange={changeHandler}
                  />
                  <label className="form-check-label">No</label>
                </div>
              </div>
            </div>

            <div className="col-12">
              <label className="form-label">Comments</label>
              <textarea
                className="form-control"
                placeholder="Add Comments Here"
                value={data.interviewFeedback}
                name="interviewFeedback"
                onChange={changeHandler}
              />
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button disabled={!data.interviewConducted} onClick={updateInterview}>
            {loading ? "loading..." : "Add Comments"}
          </Button>
          <Button variant="light" onClick={() => setCommentModel(false)}>
            Discard
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CommentsModel;
