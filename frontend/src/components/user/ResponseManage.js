import {
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import {QuestionMark} from "@mui/icons-material";

const ResponseManage = ({ formid }) => {
  const [responseList, setResponseList] = useState([]);
  const [emailList, setEmailList] = useState([]);
  const [selResponse, setSelResponse] = useState(null);

  const fetchResponses = async () => {
    const res = await fetch(
      `http://localhost:5000/response/getbyform/${formid}`
    );
    const data = await res.json();
    console.log(data);
    setResponseList(data);
  };

  useEffect(() => {
    fetchResponses();
  }, []);

  const showResponses = () => {
    return responseList.map((response) => {
      return (
        <div key={response._id}>
          <h1>{response.name}</h1>
          <h2>{response.email}</h2>
          <h3>{response.message}</h3>
        </div>
      );
    });
  };

  return (
    <div>
      <div className="section">
        <FormControl fullWidth>
          <InputLabel id="emails">Select Response</InputLabel>
          <Select
            labelId="emails"
            id="demo-simple-select"
            value={selResponse}
            label="Age"
            onChange={(e) => setSelResponse(e.target.value)}
          >
            {responseList.map((response, index) => (
              <MenuItem value={index}>{index + 1}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Divider className="my-3" />
        {selResponse && (
          <div>
            <div className="row">
              <div className="col-md-4">
                <p>Email : </p>
                <p>Form ID : </p>
              </div>
              <div className="col-md-4">
                <p className="fw-bold">{responseList[selResponse]._id}</p>
                <p className="fw-bold">{responseList[selResponse].email}</p>
              </div>
            </div>
            <Divider className="my-3" />
            <p className="text-muted">Form Response</p>
            {responseList[selResponse].data.map((question) => (
              <>

                 <p>{question.name}</p>
                <p>{question.answer}</p>
              </>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default ResponseManage;
