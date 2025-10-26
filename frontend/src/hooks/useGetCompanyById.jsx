import { setSingleCompany } from '@/redux/companySlice';
import { COMPANY_API_ENDPOINT} from '@/utils/constant';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

const useGetCompanyById = (companyId) => {
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchSingleCompany = async ()=>{
            try {
                const res = await axios.get(`https://job-portal-project-2-7ve1.onrender.com/api/v1/company/get/${companyId}`,{withCredentials:true});
                if(res.data.success){
                    dispatch(setSingleCompany(res.data.company));
                }

            } catch (error) {
                console.log("Error in fetchSingleCompany Handler ",error);
            }
        }
        fetchSingleCompany();
    },[companyId,dispatch])
  return (
    <div>
      
    </div>
  )
}

export default useGetCompanyById

