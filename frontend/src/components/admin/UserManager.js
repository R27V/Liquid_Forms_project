import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import UpdateUser from "./UpdateUser";
// CRUD- create,Read, Update, delete
const UserManager = () => {
  // usestate use to make 'data' a global variable to use in whole program
  const [userList, setUserList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [updateFormdata, setUpdateFormdata] = useState(null);

  const getDataFromBackend = async () => {
    const response = await fetch("http://localhost:5000/user/getall");
    //  2. Request Method- get by default  3. Data- going in body form(data is coming) 4. Data Format no need

    const data = await response.json();
    console.log(data);
    //  to setlist to print it on webpage
    setUserList(data);
  };

  const deleteUser = async (id) => {
    console.log(id);
    const response = await fetch("http://localhost:5000/user/delete/" + id, {
      method: "DELETE",
    });
    console.log(response.status);
    getDataFromBackend();
    toast.success("User Deleted 😎");
  };

  const updateUser = (user) => {
    setShowForm(true);
    setUpdateFormdata(user);
  };

  // useeffect is used to call getDataFromBackend() function in a controlled way otherwise it is called many times in a default way
  useEffect(() => {
    getDataFromBackend();
  }, []);

  const displayUsers = () => {
    return (
      <table className="table table-striped table-light">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => (
            <tr>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>
                {/* in onclick function we used call back function bcoz in which button we click that id is called
                    if we use this onClick=(deleteUser(user._id)) then all ids are automatically call*/}
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    deleteUser(user._id);
                  }}
                >
                  <i className="fas fa-trash" />
                </button>
              </td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    updateUser(user);
                  }}
                >
                  <i className="fas fa-pen" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="container-fluid">
      <h1 className="text-center">User Manager</h1>
      <hr />

      <div className="row">
        <div className="col-md">{displayUsers()}</div>
        {showForm ? (
          <div className="col-md">
            <UpdateUser
              updateFormdata={updateFormdata}
              refreshData={getDataFromBackend}
              setShowForm={setShowForm}
            />
            {/* prop= {variable} - prop name kuch bhe rakh sakte hai*/}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default UserManager;
