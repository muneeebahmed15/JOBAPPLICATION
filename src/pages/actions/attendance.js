import { useEffect, useState } from "react"
import toast from "react-hot-toast";


export const MarkAttendances = (attendanceData) => {
    const [loading, setLoading] = useState(false);

        // console.log(attendanceData);

    const markAttendance = async() => {
        setLoading(true);
      try {
        const response = await fetch('http://localhost:4000/v2/job-application/company/mark-attendance', {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(attendanceData),
        });
        const responseData = await response.json();
        console.log(responseData.status);
        if (responseData.status === true) {
            toast.success("Attendance Marked")
        } 
      } catch (error) {
        console.error(error);
      }finally{
        setLoading(false);
      }
}

return { loading, markAttendance}
}

export const GetAttendance = (date) => {
    const [loading, setLoading] = useState(false);
    const [attendance, setAttendance] = useState();

    const getAttendance = async() => {
        setLoading(true);
      try {
        const response = await fetch('http://localhost:4000/v2/job-application/company/get-attendance', {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({date}),
        });
        const responseData = await response.json();
        // console.log(responseData.data);
        if (responseData.status === true) {
          setAttendance(responseData.data)
        } 
      } catch (error) {
        console.error(error);
      }finally{
        setLoading(false);
      }
}

useEffect(()=>{
    if(date){
        getAttendance()
    }
},[date])

        return {attendance, loading}
}