import { useState } from "react"
import toast from "react-hot-toast";


export const ApplyJob = () =>{
    const [loading, setLoading] = useState(false);
    const [model , setModel] = useState(false);
    const [data, setData] = useState({
        jobId: "",
        name: "",
        email: "",
        gender: "",
        phone: "",
        education: "",
        city: ""
    });

    const changeHandler = (e) =>{
        setData(prev=>({...prev, [e.target.name]:e.target.value}))
    }

    const applyJob = async() =>{
        setLoading(true);
        try {
          const response = await fetch(`http://localhost:4000/v2/job-application/company/apply-job`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data), 
          });
    
          const responseData = await response.json();
        //   const updatedRecord = responseData.response;
          console.log(responseData);
    
         if(responseData.status === true){
            setModel(false);
            toast.success("Successfully Applied");
         }else if (responseData.status === false){
            setModel(false);
            toast.error("Already Applied for this job");
         }
        }catch (error) {
          console.log(error);
        }finally{
          setLoading(false);
        }
      }

      console.log(data);

      return { applyJob, data, loading, setData, setModel, model, changeHandler}
}