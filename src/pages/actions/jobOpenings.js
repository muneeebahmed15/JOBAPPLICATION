import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const AllJob = () =>{
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAllJobs = async() =>{
      setLoading(true);
      try {
          const response = await fetch('http://localhost:4000/v2/job-application/company/all-jobs', {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          //   body: JSON.stringify(data), 
          });

          const responseData = await response.json();
          // console.log(responseData.response)
         if(responseData.status === true){
          setList(responseData.response);
         }
        } catch (error) {
          console.log(error)
      }finally{
          setLoading(false);
      }
  }

  useEffect(()=>{
    fetchAllJobs();
  },[])

  return { loading, list, setList }
}

export const CreateJob = (setList) =>{
    const [loading, setLoading] = useState(false);
    const [jobModal, setJobModal] = useState(false);

    const [data, setData] = useState({
        title: "",
        status: "",
        jobType: "",
        location: "",
        jobStatus: "",
        experience: "",
        description: "",
    });

    const changeHandler = (e) =>{
        setData(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    const createJob = async() =>{
        setLoading(true);
        try {
            const response = await fetch('http://localhost:4000/v2/job-application/company/create-job', {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data), 
            });

            const responseData = await response.json();
            const newRecord = responseData.response
            // console.log(newRecord)

           if(responseData.status === true){
            // setUpdateList(responseData.response);
            setList(prev=>[...prev, newRecord])
            toast.success("Job Posted");
            setJobModal(false);
            setData({
              title: "",
              status: "",
              jobType: "",
              location: "",
              jobStatus: "",
              experience: "",
              description: "",
          });
           }
          } catch (error) {
            console.error("Error registering employees:", error);
        } finally {
          setLoading(false);
        }
    }

    return {loading, data, setData, setJobModal, jobModal, createJob, changeHandler}
}

export const UpdateJob = (id, list, setList) =>{
    const [loading, setLoading] = useState(false);
    const [jobModal, setJobModal] = useState(false);
    const [updateData, setUpdateData] = useState({
        title: "",
        status: "",
        jobType: "",
        location: "",
        jobStatus: "",
        experience: "",
        description: "",
    });

    const changeHandler = (e) => {
        setUpdateData(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    const updateJob = async() =>{
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:4000/v2/job-application/company/update-job/${id}`, {
              method: "PUT",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updateData), 
            });

            const responseData = await response.json();
            const updatedRecord = responseData.response;
            // console.log(updatedRecord);

           if(responseData.status === true){

            setList(list.map(x => x._id === updatedRecord._id ? updatedRecord : x));

            toast.success("Job Updated Successfully");
            setJobModal(false);
           }
          } catch (error) {
              console.log(error);
        }finally{
            setLoading(false);
        }
    }

    const deleteJob = async() =>{
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:4000/v2/job-application/company/delete-job/${id}`, {
              method: "DELETE",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            //   body: JSON.stringify(updateData), 
            });

            const responseData = await response.json();
            const updatedRecord = responseData.response;

            // console.log(updatedRecord);
           if(responseData.status === true){

              setList(list.filter(x=>x._id !== id ))

            toast.success("Job Deleted Successfully");
            setJobModal(false);
           }
          } catch (error) {
              console.log(error);
        }finally{
            setLoading(false);
        }
    }

    return {loading, updateData, setUpdateData, setJobModal, jobModal, updateJob, deleteJob, changeHandler}
}

export const SingleJobs = (id) =>{
  const [data, setData] = useState({});
  const [loading, setLoading] = useState();

  const singleJob = async() =>{
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:4000/v2/job-application/company/single-job/${id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(updateData), 
      });

      const responseData = await response.json();
      const updatedRecord = responseData.response;
      // console.log(updatedRecord);

     if(responseData.status === true){
      setData(updatedRecord)
     }
    }catch (error) {
      console.log(error);
    }finally{
      setLoading(false);
    }
  }

  useEffect(() => {
  if(id){
    singleJob();
  }
  }, [id])

  return {loading, data}
}
