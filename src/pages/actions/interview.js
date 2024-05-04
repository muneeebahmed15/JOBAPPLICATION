import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const Interview = () => {
  const [loading, setLoading] = useState(false);
  const [interviewModal, setInterviewModal] = useState(false);

  const [data, setData] = useState({
    candidateId: "",
    jobId: "",
    interviewTime: "",
    interviewDate: "",
    interviewee: "",
    intervieweeEmail: "",
    interviewType: "",
    interviewLocation: "",
  });

  //   console.log(data);

  const changeHandler = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sheduleInterview = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "http://localhost:4000/v2/job-application/company/shedule-interview",
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
      // const updatedRecord = responseData.response;
      //   console.log(responseData);
      if (responseData.status === true) {
        toast.success("Interview Sheduled Successfully");
        setInterviewModal(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    changeHandler,
    setData,
    data,
    sheduleInterview,
    setInterviewModal,
    interviewModal,
  };
};

export const GetInterviews = () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState();

  const getInterviews = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "http://localhost:4000/v2/job-application/company/all-interviews",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          //   body: JSON.stringify(data),
        }
      );
      const responseData = await response.json();
      const updatedRecord = responseData.response;
      //   console.log(updatedRecord);
      if (responseData.status === true) {
        setList(updatedRecord);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // console.log(list);

  useEffect(() => {
    getInterviews();
  }, []);

  return {
    loading,
    list,
  };
};

export const UpdateInterview = () => {
  const [loading, setLoading] = useState(false);
  const [commentModel, setCommentModel] = useState(false);

  const [id, setId] = useState({});
  const [data, setData] = useState({});

  // console.log(id);
  // console.log(data);

  const changeHandler = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const updateInterview = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:4000/v2/job-application/company/update-interview/${id}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const responseData = await response.json();
      // const updatedRecord = responseData.response;
      console.log(responseData);
      if (responseData.status === true) {
        toast.success("Updated Successsfully");
        setCommentModel(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    data,
    changeHandler,
    updateInterview,
    setId,
    setCommentModel,
    commentModel,
  };
};
