import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const ApplyJob = (setUpdateRecord) => {
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState(false);
  const [data, setData] = useState({
    jobId: "",
    name: "",
    email: "",
    gender: "",
    phone: "",
    city: "",
    education: "",
    linkedIn: "",
    joining: "",
    salaryExpectation: "",
    previousSalary: "",
    lastDegree: "",
    workExperience: "",
    technicalSkills: "",
    interviewAvailability: "",
  });

  // console.log(data);

  const changeHandler = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const applyJob = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:4000/v2/job-application/company/apply-job`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const responseData = await response.json();
      const updatedRecord = responseData.response;
      // console.log(updatedRecord);

      if (responseData.status === true) {
        setUpdateRecord(updatedRecord);
        setModel(false);
        toast.success("Successfully Applied");
      } else if (responseData.status === false) {
        setModel(false);
        toast.error("Already Applied for this job");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // console.log(data);

  return {
    applyJob,
    data,
    loading,
    setData,
    setModel,
    model,
    changeHandler,
  };
};

export const AllCandidates = () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  const allCandidates = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:4000/v2/job-application/company/all-candidates`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          // body: JSON.stringify(data),
        }
      );

      const responseData = await response.json();
      //   const updatedRecord = responseData.response;
      // console.log(responseData.response);

      if (responseData.status === true) {
        setList(responseData.response);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // console.log(list);

  useEffect(() => {
    allCandidates();
  }, []);

  return { list, loading, setList };
};

export const SingleCandidate = () => {
  const [record, setRecord] = useState();
  const [loading, setLoading] = useState(false);

  const singleCandidate = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:4000/v2/job-application/company/single-candidate/${id}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          // body: JSON.stringify(data),
        }
      );

      const responseData = await response.json();
      const updatedRecord = responseData.response;
      // console.log(updatedRecord);

      if (responseData.status === true) {
        setRecord(updatedRecord);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // console.log(record);

  return { singleCandidate, record, loading };
};

export const JobCandidates = (id) => {
  const [record, setRecord] = useState();
  const [loading, setLoading] = useState(false);

  const jobCandidates = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:4000/v2/job-application/company/candidates-with-job-id/${id}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          // body: JSON.stringify(data),
        }
      );

      const responseData = await response.json();
      const updatedRecord = responseData.response;
      // console.log(updatedRecord);

      if (responseData.status === true) {
        setRecord(updatedRecord);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // console.log(record)

  useEffect(() => {
    if (id) {
      jobCandidates();
    }
  }, [id]);

  return { record, setRecord, loading };
};

export const UpdateStatus = (setList) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ id: "", status: "" });

  const statusHandler = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const updateStatus = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:4000/v2/job-application/company/candidate-status`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const responseData = await response.json();
      const updatedRecord = responseData.response;
      console.log(updatedRecord);

      if (responseData.status === true) {
        setList((prevList) => prevList.filter((x) => x._id !== updatedRecord._id));
        setData({ id: "", status: "" });
        toast.success("Successfully Updated");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // console.log(data);

  useEffect(() => {
    if (data.status.length > 0) {
      updateStatus();
    }
  }, [data.status.length > 0]);

  return { data, loading, setData, statusHandler };
};
