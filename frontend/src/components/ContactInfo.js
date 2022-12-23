import { TextField } from '@mui/material';
import React from 'react';

const ContactInfo = () =>{
    return(
        <>
            <div className="container d-flex align-items-center justify-content-center">
        <div className="card">
          <div className="card-body">
          <div className='m-4'>
                <h2>Contact Information</h2>
                <hr/>
            </div>
          <section className='m-4'>
            
            <TextField fullWidth id="standard-basic" label="Form description" variant="standard" />
        
          </section>
          <section className='m-4'>
          
          <TextField fullWidth id="standard-basic" label="Name" variant="standard" />
          
          </section>
          <section>
          <div className='m-4'>
          <TextField fullWidth id="standard-basic" label="Email" variant="standard" />
          </div>
          </section>
          <section>
          <div className='m-4'>
            
          <TextField fullWidth id="standard-basic" label="Address" variant="standard" />
          </div>
          </section>
            <section>
            <div className='m-4'>
            <TextField fullWidth id="standard-basic" label="Phone number" variant="standard" />
            </div>
            </section>

          </div>
</div>
</div>
        </>
    )
}
export default ContactInfo;