/* eslint-disable max-len */
import React from 'react';
import  QRModal from './QRModal';

const AmountWithdrawal = () => (
<div className="container">
<h1> </h1>
<h1 className="heading">Make a cash Withdrawal</h1>
<h2>Limit is 50 Pounds</h2>
<div className='Login_Background'>
  <form className="row g-3">
    <div className="mb-3">
      <label htmlFor="formGroupExampleInput" className="form-label">Enter the amount</label>
      <input type="text" className="form-control" id="amount" placeholder="Enter the amount" required/>
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

export default AmountWithdrawal

