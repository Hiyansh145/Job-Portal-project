import { setAllJobs } from '@/redux/jobSlice';
import store from '@/redux/store';
import { JOB_API_ENDPOINT } from '@/utils/constant';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const useGetAllJobs = () => {
    const dispatch = useDispatch();
    const {searchedQuery} = useSelector(store=> store.job)
    useEffect(()=>{
        const fetchAllJobs = async ()=>{
            try {
                const res = await axios.get(`https://job-portal-project-2-7ve1.onrender.com/api/v1/job/get?keyword=${searchedQuery}`,{withCredentials:true});
                if(res.data.success){
                    dispatch(setAllJobs(res.data.jobs));
                }

            } catch (error) {
                console.log("Error in fetchAllJobs Handler ",error);
            }
        }
        fetchAllJobs();
    },[searchedQuery])
  return (
    <div>
      
    </div>
  )
}

export default useGetAllJobs
