/* eslint-disable max-len */
import React from 'react';
import  QRModal from './QRModal';
import Navbar from '../Navbar/Navbar';

export default function  AmountWithdrawal(){
  return(
<div className="container1">
<Navbar />
<h1 className="heading">Make a cash Withdrawal</h1>
<h2>Limit is 50 Pounds</h2>
<div className='Page_Background'>
  <form className="row g-3">
  <label htmlFor="formGroupExampleInput1" className="form-label">Enter Amount to Withdraw</label>
  <div className="input-group mb-3">
  
  <span className="input-group-text">£</span>
  <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"/>
  <span className="input-group-text">.00</span>
</div>
    <div className="mb-3">
      <label htmlFor="formGroupExampleInput2" className="form-label">Enter the PIN number</label>
      <input type="password" className="form-control" id="pin" placeholder="Enter the PIN" required/>
    </div>
    <div className="mb-3" align="center">
      <QRModal />
    </div>
  </form>


</div>
</div>
)
}

