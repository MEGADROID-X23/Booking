import React from 'react'
import { usePaystackPayment } from 'react-paystack';


function Payment({email,amt}) {

    const config = {
        reference: (new Date()).getTime().toString(),
        email: email,
        amount: amt * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
        publicKey: process.env.REACT_APP_APIKEY,
    };
    
    const onSuccess = (reference) => {
      // Implementation for whatever you want to do with reference and after success call.
      console.log(reference);
    };
    
    const onClose = () => {
      // implementation for  whatever you want to do when the Paystack dialog closed.
      console.log('closed')
    }
    
    const initializePayment = usePaystackPayment(config);
    initializePayment(onSuccess, onClose)


  return (
    <></>
  )
}

export default Payment