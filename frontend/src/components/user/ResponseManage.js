import { Formik } from "formik";
import React, { useEffect, useState } from "react";

const ResponseManage = ({ formid }) => {
  const [responseList, setResponseList] = useState([]);

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
        <div className="container">
          <div className="row"></div>
        </div>
      </div>
    </div>
  );
};
export default ResponseManage;
