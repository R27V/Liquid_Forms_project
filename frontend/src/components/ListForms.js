import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ListForms = () => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  const [formList, setFormList] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const getDataFromBackend = async() => {
    setLoading(true);
    const response = await fetch('http://localhost:5000/form/getbyuser/'+currentUser._id)
    
    const data = await response.json()
    console.log(data);
    setFormList(data);
};

useEffect(() => {
    getDataFromBackend();
}, [])


  const createNewForm = async () => {
    const formdata = {
      title: "Untitled Form",
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



  return (
    <div>
      <button className="btn btn-primary" onClick={createNewForm}>
        {" "}
        Submit
      </button>
    </div>
  );
};
export default ListForms;
