import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import app_config from "../../config";

const Profile = () => {
  const [selImage, setSelImage] = useState("");
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const url = app_config.api_url;

  const [formList, setformList] = useState([]);

  // getting saved user data from backend
  const getData = async () => {
    const response = await fetch("http://localhost:5000/form/getall");
    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
      setformList(data);
    } else {
      console.log("something went wrong");
    }
  };

  // calling the above function
  useEffect(() => {
    getData();
  }, []);

  const updateProfile = async (dataToUpdate) => {
    const res = await fetch(url + "/user/update/" + currentUser._id, {
      method: "PUT",
      body: JSON.stringify(dataToUpdate),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    sessionStorage.setItem("user", JSON.stringify(data));
    setCurrentUser(data);
  };

  const uploadFile = (e) => {
    const file = e.target.files[0];
    setSelImage(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then(async (res) => {
      if (res.status === 200) {
        console.log("file uploaded");
        await updateProfile({ avatar: file.name });
      }
    });
  };
  return (
    <section className="h-100 gradient-custom-2">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="card ">
            <div
              className="rounded-top text-white d-flex flex-row user-profile-top"
              style={{
                backgroundImage:
                  'url("https://www.shutterstock.com/image-photo/minimal-work-space-creative-flat-260nw-1156566583.jpg")',
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div
                className="ms-4 mt-5 d-flex flex-column"
                style={{ width: 150 }}
              >
                <img
                  src={
                    currentUser.avatar
                      ? url + "/" + currentUser.avatar
                      : "avatar.png"
                  }
                  alt="User Avatar"
                  className="img-fluid img-thumbnail mt-4 mb-2"
                  style={{ width: 150, zIndex: 1 }}
                />
                <label
                  htmlFor="image"
                  style={{
                    zIndex: 1,
                    display: "block",
                    textAlign: "center",
                    padding: 5,
                    backgroundColor: "white",
                    border: "2px solid black",
                    borderRadius: 3,
                    color: "black",
                  }}
                >
                  Edit profile
                </label>
                <input type="file" hidden id="image" onChange={uploadFile} />
              </div>
              <div
                className="ms-3"
                style={{
                  marginTop: 130,
                  color: "dark blue",
                  // backgroundColor: "white"
                  fontWeight: "bolder",
                }}
              >
                <h3>{currentUser.name}</h3>
                <p>{currentUser.email}</p>
              </div>
            </div>
            <div
              className="p-4 text-black"
              style={{ backgroundColor: "#f8f9fa" }}
            >
              <div className="d-flex justify-content-end text-center py-1">
                <div>
                  <p className="mb-1 h5">ID : {currentUser._id}</p>
                </div>
              </div>
            </div>
            <div className="card-body p-4 text-black">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <p className="lead fw-normal mb-0">Uploaded Forms</p>
                <p className="mb-0">
                  <a href="#!" className="text-muted">
                    Show all
                  </a>
                </p>
              </div>
              <div className="row g-2">
                {formList.map((forms) => (
                  <div
                    className="col-md-3 mb-2"
                    style={{ height: "fit-content" }}
                  >
                    <div
                      class="w-100 bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                      data-mdb-ripple-color="light"
                    >
                      <Link to={"/main/view/" + forms._id}>
                        {/* <img
                          src={url + "/" + forms.image}
                          alt=""
                          className="w-100 rounded-3"
                        /> */}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
