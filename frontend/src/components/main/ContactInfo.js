import { TextField } from '@mui/material';
import React from 'react';

const ContactInfo = () =>{
    return(
        <>
            <div className="d-flex flex-column align-items-center justify-content-center"
            style={{
              boxShadow:
              "1px 1px 2px 1px rgb(0 0 0 / 10%), -1px -1px 2px 1px rgb(0 0 0 / 10%)",
            backgroundImage: `url(https://images.unsplash.com/photo-1588421357574-87938a86fa28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80)`,
            backgroundSize: "cover",
            height: "100vh",
            }}>
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