import { useEffect, useState } from "react"


export const GetLeaves = () =>{
    const [list, setList] = useState(null);
    const [loading, setLoading] = useState(false);

    const getLeaves = async() =>{
        setLoading(true);
        try {
            const response = await fetch("http://localhost:4000/v2/job-application/company/all-leaves", {
              method: "GET",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            });
            const responseData = await response.json();
            // console.log(responseData);
            if (responseData.status === true) {
                setList(responseData.data);
            } 
          } catch (error) {
            console.error("Error fetching employees:", error);
        }finally{
            setLoading(false);
        }
    }
    
    useEffect(()=>{
        getLeaves();
    },[])

    return { loading ,list }
}

///single-leave/

export const GetSingleLeave = () =>{
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);

    const getSingleLeave = async(id)=>{
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:4000/v2/job-application/company/single-leave/${id}`, {
              method: "GET",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            });
            const responseData = await response.json();
            // console.log(responseData.data);
            if (responseData.status === true) {
                setData(responseData.data);
            } 
          } catch (error) {
            console.error("Error fetching employees:", error);
        }finally{
            setLoading(false);
        }
    }

    return { loading, data, getSingleLeave}
}

//leave response

export const LeaveResponse = () =>{
  const [updateData, setUpdateData] = useState();
  const [loading, setLoading] = useState(false);

  const leaveResponse = async(id)=>{
      setLoading(true);
      try {
          const response = await fetch(`http://localhost:4000/v2/job-application/company/leave-response/${id}`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updateData),
          });
          const responseData = await response.json();
          console.log(responseData);
          // if (responseData.status === true) {
          //     setData(responseData.data);
          // } 
        } catch (error) {
          console.error("Error fetching employees:", error);
      }finally{
          setLoading(false);
      }
  }

  return { loading, updateData, setUpdateData, leaveResponse}
}

