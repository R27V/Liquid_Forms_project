import { Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateUser = ({updateFormdata, refreshData, setShowForm}) => {
  
  const navigate = useNavigate();
  
  const userSubmit = async (formdata, {resetForm}) => {
    console.log(formdata);

    // 1. URL
    // 2. Request Method
    // 3. Data
    // 4. Data Format

    // Sending request to backend
    // asynchronous function - returns promise
    const response = await fetch('http://localhost:5000/user/update/'+formdata._id, {
      method : 'PUT',
      body : JSON.stringify(formdata),
      headers : {
        'Content-Type' : 'application/json'
      }
    })

    if(response.status === 200){
      console.log('request sent');
      resetForm();
      Swal.fire({
        icon : 'success',
        title : 'Nice',
        text : 'User Updated!!'
      })
      refreshData();
      setShowForm(false);
    }else{
      console.log('some error occured');
    }
  }

  return (
    <div className="container pt-5">
      <div className="card">
        <div className="card-body">

          <Formik 
            initialValues={updateFormdata}
            onSubmit={userSubmit}
          >
            { ({values, handleSubmit, handleChange}) => (
              <form onSubmit={handleSubmit}>
              <h3 className='text-center'>Register User</h3>
              <label>Name</label>
              <input id="name" value={values.name} onChange={handleChange} className='form-control mb-3' />
              <label>Email</label>
              <input id="email" value={values.email} onChange={handleChange} className='form-control mb-3' />
              <label>Password</label>
              <input id="password" value={values.password} onChange={handleChange} type="password" className='form-control mb-3' />
              <label>Age</label>
              <input id="age" value={values.age} onChange={handleChange} type="number" className='form-control mb-3' />
              
              <button type='submit' className='btn btn-primary mt-5'>Submit</button>
            </form>
            ) }
          </Formik>
          

        </div>
      </div>
    </div>
  )
}

export default UpdateUser;