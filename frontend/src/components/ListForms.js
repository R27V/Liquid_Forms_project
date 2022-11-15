import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ListForms = () => {
  const [currentUser, setCurrentUser] = useState("");
  const navigate = useNavigate();

  const createNewForm = async () => {
    const response = await fetch("http://localhost:5000/form/add", {
      method: "POST",
      body: JSON.stringify({
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
        createdBy: currentUser._id,
        createdAt: new Date(),
        lastUpdate: new Date(),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    navigate('/addform/'+data._id);
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
