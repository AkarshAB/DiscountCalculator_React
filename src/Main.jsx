import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import './Main.css'
import Button from '@mui/material/Button';


function Main() {
  const [amount, setAmount] = useState(0)
  const [discountPercent, setDiscountPercent] = useState(0)
  const [discountAmount, setDiscountAmount] = useState(0)

  const calculate=(e) => {
    const output = (amount*discountPercent)/100
    console.log(output);

    setDiscountAmount (amount - output)
    console.log(discountAmount);
  }

  const reset = (e) => {
    setAmount ()
    setDiscountPercent ()
    setDiscountAmount ()
  }


  console.log(amount);
  console.log(discountPercent);

  return (
    <div>
      <div className="container">
        <div className="row text-center mt-5">
          <div className="col-3"></div>


          <div className="col border border-info py-5">
          <h2>Discount Calculator</h2>

            <div>
              <TextField id="standard-basic" className='col-6' value={amount || ''} label="Amount" onChange={(e) => setAmount(e.target.value)} variant="standard" />
            </div>
            <div>
              <TextField id="standard-basic" className='col-6' value={discountPercent || ''} label="Discount" onChange={(d) => setDiscountPercent(d.target.value)} variant="standard" />
            </div>

            <div className="button mt-5">
            <Button className='me-5' variant="outlined" onClick={calculate}>Calculate Discount</Button>  
            <Button variant="outlined" onClick={reset} type="reset">Reset</Button>  
            </div>

            <div className='mt-4'>
              <h4>Total Discount Amount:</h4>
              <p>{discountAmount || ''}</p>
            </div>
          </div>


          <div className="col-3"></div>
        </div>
      </div>
    </div>
  )
}

export default Main