import React, { useContext, useEffect } from 'react'
import './verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';

const verify = () => {

      const [searchParams, setSearchParams] = useSearchParams();
      const success = searchParams.get("success");
      const orderId = searchParams.get("orderId");
      const { url } = useContext(StoreContext)
      const navigete = useNavigate();
      // console.log(searchParams.get("success"), "searchParams")
      // console.log(success, "success")
      // console.log(url + "/api/order/verify")
      const verifyPayment = async () => {
            try {
                  const response = await axios.post(url + "/api/order/verify", { success, orderId })
                  console.log(response);
                  if (response.data.success) {
                        navigete("/myorders");
                  } else {
                        navigete("/");
                  }
            } catch (error) {
                  console.log(error.response.data);
            }
      }

      useEffect(() => {
            verifyPayment();
      }, [])

      return (
            <div className='verify'>
                  <div className='spinner'></div>
            </div>
      )
}

export default verify
