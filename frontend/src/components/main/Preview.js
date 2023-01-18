import { ArrowBack } from "@mui/icons-material";
import { IconButton, TextField, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import app_config from "../../config";

const Preview = ({ topHeader }) => {
  const { formid } = useParams();
  const [formDetails, setFormDetails] = useState(null);
  const [formLoading, setFormLoading] = useState(false);
  const url = app_config.api_url;
  const navigate = useNavigate();

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
  }, []);

  const submitResponse = async () => {
    await fetch(url + "/response/add", {
      method: "POST",
      body: JSON.stringify({
        form: formDetails._id,
        email: "",
        createdAt: new Date(),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const renderForm = () => {
    return !formLoading && formDetails
      ? formDetails.data.questions.map((question, ques_i) => (
          <div className="card question-card mb-4" key={ques_i}>
            <div className="card-body">
              <h3>{question.name}</h3>
            </div>
          </div>
        ))
      : "Form Loading";
  };

  return (
    <div className="vh-100">
      <div className="container py-5">
        {/* {topHeader} */}
        <div className="card mb-2">
          <div className="card-body">
            <Tooltip title="Back To Editor">
              <IconButton
                color="secondary"
                onClick={() => navigate("/user/editform/" + formDetails._id)}
              >
                <ArrowBack />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        {renderForm()}
        <button onClick={submitResponse}>Submit</button>
      </div>
    </div>
  );
};
export default Preview;
