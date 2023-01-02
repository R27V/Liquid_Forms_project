import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EllipsedLabel from "../common/EllipsedLabel";

const ListForms = () => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const [formList, setFormList] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const getDataFromBackend = async () => {
    setLoading(true);
    const response = await fetch(
      "http://localhost:5000/form/getbyuser/" + currentUser._id
    );

    const data = await response.json();
    console.log("Listforms ****" + data);
    setFormList(data);
    setLoading(false);
  };

  useEffect(() => {
    getDataFromBackend();
  }, []);

  const createNewForm = async () => {
    const formdata = {
      title: "Untitled Form",
      description: "abc",
      data: {
        questions: [
          {
            name: "",
            answer: "",
            type: "",
            options: [],
            correct: "",
            mark: 0,
          },
        ],
        styles: {},
      },
      user: currentUser._id,
      createdAt: new Date(),
      lastUpdate: new Date(),
    };
    console.log(formdata);
    const response = await fetch("http://localhost:5000/form/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    // console.log(data);
    // navigate('/addform/'+data._id);
  };

  const createNewFormBox = () => {
    return (
      <div className="col-sm-6 col-md-4">
          <div
            className="card p-4 mb-4"
            style={{
              backgroundColor: "#f6f6f6",
            }}
          >
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text row d-flex justify-content-center align-items-center">
              <EllipsedLabel
                  label={
                    <div>
                    <div className="d-flex justify-content-center align-items-center"> <img src="add.png" /></div>
              <div className="d-flex justify-content-center align-items-center">
                <button className="btn btn-primary" onClick={createNewForm}>
                  {" "}
                  Create New+
                </button>
              </div></div>
                  }
                  maxLength="20"
                />
             
              </p>
              
            </div>
          </div>
        </div>
    );
  };

  const displayTemplates = () => {
    if (!loading && formList)
      return formList.map((form) => (
        <div className="col-sm-6 col-md-4">
          <div
            className="card p-4 mb-4"
            style={{
              backgroundColor: "#f6f6f6",
            }}
          >
            <div className="card-body">
              <h5 className="card-title">{form.title}</h5>
              <p className="card-text" data-mdb-toggle="tooltip" title={form.description}>
                {form.description
                  ? form.description.substring(0, 80)+'...'
                  : <p className="text-muted">No Description</p>}
              </p>
              <Link to={"/editform/" + form._id} className="btn btn-primary">
                Edit Form
              </Link>
            </div>
          </div>
        </div>
      ));
    else return <h1>Loading...</h1>;
  };

  return (
    <div
      style={{
        backgroundColor: "white",
      }}
    >
      <header className="bg-info">
        <div className="container py-5">
          <h1
            className="display-2 text-center"
            style={{
              fontFamily: "serif",
              color: "black",
            }}
          >
            Form Templates
            <div className="input-group">
  <div className="form-outline">
    <input type="search" id="form1" className="form-control" />
    <label className="form-label" htmlFor="form1">
      Search
    </label>
  </div>
  <button type="button" className="btn btn-primary">
    <i className="fas fa-search" />
  </button>
</div>

          </h1>
        </div>
      </header>

      <div className="container m-8 d-flex justify-content-center align-items-center">
        <div className="row d-flex justify-content-center align-items-center">
          {createNewFormBox()}
          {displayTemplates()}
        </div>
      </div>
    </div>
  );
};
export default ListForms;
