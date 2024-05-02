import { useLocation } from 'react-router-dom';
import BreadCrumbs from '../../UI Components/BreadCrumbs';
import { IoMdAdd } from 'react-icons/io';
import AllJobs from './AllJobs';
import { AllJob, CreateJob } from '../../actions/jobOpenings';
import AddJob from './AddJob';
import { useState } from 'react';

const JobOpenings = () => {
  const path = useLocation().pathname;

  const {loading, list, setList} = AllJob();

  const [from, setFrom] = useState("");

  const { jobModal, setJobModal, loading: createLoading, data, createJob, changeHandler} = CreateJob(setList);

  return (
    <>

      <BreadCrumbs path={path}/>

      <div className='d-flex justify-content-between align-items-center'>
      <h2 className='mb-3'>Jobs</h2>

      <div className='p-2 bg-primary rounded-3 text-white  cursor-pointer'  onClick={()=>{setFrom("addJob"); setJobModal(true)}}>
      <IoMdAdd style={{fontSize:"20px"}}/>
      </div> 
      </div>

      <AllJobs from={from} setFrom={setFrom} list={list} loading={loading} setList={setList}/>

{/* <div key={from}> */}

      <AddJob  jobModal={jobModal} setJobModal={setJobModal} from={from} loading={createLoading} data={data} jobFunction={createJob} changeHandler={changeHandler}/>

    {/* </div> */}
    </>
  )
}

export default JobOpenings;