import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
          className="card d-flex flex-column align-items-center justify-content-center"
          style={{ borderRadius: "89px", height: "90%" }}
        >
          <div
            className="card-body"
            style={{ marginTop: "20%", marginLeft: "9%" }}
          >
            <h5 className="card-title"></h5>
            <p className="card-text">
              <Link to={"/editform/new"} className="btn btn-primary">
                Create Form
              </Link>
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
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{form.title}</h5>
              <p className="card-text">
                {form.description
                  ? form.description
                  : "With supporting text below as a natural lead-in to additional content"}
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
    <div>
      <header className="bg-dark">
        <div className="container py-5">
          <h1 className="display-1 text-center">Form List</h1>
        </div>
      </header>

      <div className="container">
        <div className="row">
          {/* {createNewFormBox()} */}
          {displayTemplates()}
        </div>
      </div>

      <button className="btn btn-primary" onClick={createNewForm}>
        {" "}
         ➕ New
      </button>
    </div>
  );
};
export default ListForms;
