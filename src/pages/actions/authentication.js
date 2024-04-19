import axios from "axios";
import { useState } from "react"


export const SignUp = () =>{
    const [loading, setLoading ] = useState(false);
    const [ companyData, setCompanyData ] = useState({name: "", email: "", password: ""});

    const changeHandler = (e) =>{
        setCompanyData({...companyData, [e.target.name]: e.target.value});
    }

    console.log(companyData, " from authentication.js line 13");

    const signup = async() =>{
        setLoading(true); 
        try {
            console.log("Sending signup request with datasjsjsj:", companyData);
            const response = await axios.post('http://localhost:4000/v2/job-application/company/register-company', companyData);
    console.log("Signup request successful line 20:", response);
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false);
        }
    }
        return {signup, loading, companyData, changeHandler}
}