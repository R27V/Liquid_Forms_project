import { Storage } from '@mui/icons-material';
import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast';

const MongoDB = ({formid, dbSrc}) => {

    const [mongoLink, setMongoLink] = useState(dbSrc);

    const updateForm = async () => {

        if(!mongoLink){
            toast.success("Please enter a valid link");
            return;
        }

        const res= await fetch('http://localhost:5000/form/update/'+formid, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                dbType: "MongoDB",
                dbSrc: mongoLink
            })
        })

        const data = await res.json();
        console.log(data);
        toast.success("MongoDB Connected");


    }

  return (
    <div className='card'>
        <div className="card-header">
            <p className="m-0 h5">Connect to MongoDB</p>
        </div>
        <div className="card-body">
            <TextField variant='outlined' fullWidth value={mongoLink} onChange={e => setMongoLink(e.target.value)} />
            <Button onClick={updateForm} color='primary' variant='contained'> <Storage /> Set Database </Button>
        </div>
    </div>
  )
}

export default MongoDB