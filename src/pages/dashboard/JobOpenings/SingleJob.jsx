import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { IoIosArrowBack, IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FormInput } from "../../../components";
import { SingleJobs } from "../../actions/jobOpenings";
import { ApplyJob, JobCandidates } from "../../actions/candidateApply";
import JobModel from "./JobModel";
import CandidatesTable from "./CandidatesTable";

const SingleJob = () => {
  const { id } = useParams();
  const { data: dataSingle, loading: dataLoading } = SingleJobs(id);
  const { record, loading, setRecord } = JobCandidates(id);
  const [updateRecord, setUpdateRecord] = useState();

  const {
    applyJob,
    data: candidateData,
    setData,
    loading: candidateLoading,
    changeHandler,
    setModel,
    model,
  } = ApplyJob(setUpdateRecord);

  useEffect(() => {
    if (updateRecord) {
      setRecord((prev) => [...prev, updateRecord]);
    }
  }, [updateRecord]);

  return (
    <>
      <Link to="/hiring-management/job-openings">
        <Button className="d-flex justify-content-center align-items-center mt-3">
          <IoIosArrowBack /> Back
        </Button>
      </Link>

      <div className="d-flex justify-content-between align-items-center my-3">
        <h2>{dataSingle.title}</h2>

        <div
          className="p-2 bg-primary rounded-3 text-white"
          onClick={() => {
            setData({ jobId: dataSingle._id });
            setModel(true);
          }}
          role="button"
        >
          <label style={{ paddingRight: "10px" }}>Add Candidate</label>
          <IoMdAdd style={{ fontSize: "20px" }} />
        </div>
      </div>

      <Card>
        <Card.Body>
          <div className="row">
            <div className="col-md-3">
              <FormInput
                label={"Date Posted"}
                type="text"
                value={dataSingle?.createdAt?.slice(0, 10)}
                containerClass={"mb-3"}
                readOnly
              />
            </div>

            <div className="col-md-2">
              <FormInput
                label={"Job Type"}
                type="text"
                value={dataSingle?.jobType}
                containerClass={"mb-3"}
                readOnly
              />
            </div>

            <div className="col-md-2">
              <FormInput
                label={"Job Status"}
                type="text"
                value={dataSingle?.jobStatus}
                containerClass={"mb-3"}
                readOnly
              />
            </div>

            <div className="col-md-2">
              <FormInput
                label={"Job Location"}
                type="text"
                value={dataSingle?.location}
                containerClass={"mb-3"}
                readOnly
              />
            </div>

            <div className="col-md-2">
              <FormInput
                label={"Experience"}
                type="text"
                value={dataSingle?.experience}
                containerClass={"mb-3"}
                readOnly
              />
            </div>

            <div className="col-md-2">
              <FormInput
                label={"Status "}
                type="text"
                value={dataSingle?.status}
                containerClass={"mb-3"}
                readOnly
              />
            </div>

            {/* <div className="col-md-2">
          <FormInput
            label={"Candidates Applied"}
            type="text"
            value={}
            containerClass={"mb-3"}
            readOnly
          />
          </div> */}

            <div className="col-md-6">
              <label className="form-label">Description</label>
              <textarea
                cols="10"
                rows="2"
                className="form-control"
                value={
                  dataSingle.description
                    ? dataSingle.description
                    : "no description for this job"
                }
                readOnly
              />
            </div>
          </div>

          <hr style={{ border: "1px solid" }} />

          <CandidatesTable record={record} loading={loading} />
        </Card.Body>
      </Card>

      <JobModel
        model={model}
        setModel={setModel}
        changeHandler={changeHandler}
        loading={candidateLoading}
        applyJob={applyJob}
        data={candidateData}
      />
    </>
  );
};

export default SingleJob;
