import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import app_config from '../../config';

const Preview =() => {

   const {formid} = useParams();
   const [formDetails, setFormDetails] = useState(null);
   const [formLoading, setFormLoading] = useState(false);
   const url = app_config.api_url;

   const getformById = async () => {
      setFormLoading(true);
      const response = await fetch(url + "/form/getbyid/" + formid);
      const dbFormData = await response.json();
      console.log(dbFormData);
  
      setFormDetails(dbFormData);
      setFormLoading(false);
    };

    useEffect(() => {
      getformById();
    }, [])
    

    const renderForm = () => {
      return (!formLoading && formDetails) ? formDetails.data.questions.map((question, ques_i) => (
            <div className="card question-card mb-4" key={ques_i}>
              <div className="card-body">
               <h3>{question.name}</h3>
              </div>
            </div>
          ))
        : "Form Loading";
    };

 return(
    <div>
      {renderForm()}
    </div>
 );
};
export default Preview;