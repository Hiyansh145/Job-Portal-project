import { setCompanies} from '@/redux/companySlice';
import { COMPANY_API_ENDPOINT} from '@/utils/constant';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

const useGetAllCompanies = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchCompanies = async ()=>{
            try {
                const res = await axios.get(`https://job-portal-project-2-7ve1.onrender.com/api/v1/company/get`,{withCredentials:true});
                if(res.data.success){
                    dispatch(setCompanies(res.data.companies));
                }

            } catch (error) {
                console.log("Error in fetchCompanies Handler ",error);
            }
        }
        fetchCompanies();
    },[])
  return (
    <div>
      
    </div>
  )
}

export default useGetAllCompanies

