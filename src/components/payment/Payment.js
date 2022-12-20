import React from 'react';
import StripeContainer from './StripeContainer';
import './payment.css';
function Payment({total}) {
  return (
    <>
    <div className='section__padding strip'>
        <StripeContainer total={total}/>
    </div>
   
    </>
  )
}

export default Payment
