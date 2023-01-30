import { Typography,styled, alpha, Box, AppBar, Toolbar, IconButton,  } from "@mui/material";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import EllipsedLabel from "../common/EllipsedLabel";
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

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

  const deleteForm = async (id) => {
    console.log("id user" + id);
    const response = await fetch("http://localhost:5000/form/delete/" + id, {
      method: "DELETE",
    });
    console.log(response.status);
    getDataFromBackend();
    toast.success("Form Deleted 😎");
  };

  useEffect(() => {
    getDataFromBackend();
  }, []);

  const createNewForm = async () => {
    const formdata = {
      title: "Untitled Form",
      heading: "",
      description: "",
      data: {
        questions: [
          {
            name: "",
            answer: "",
            type: "",
            options: [{ label: "Untitled Option", checked: false }],
            correct: "",
            mark: 0,
          },
        ],
        confirmationMsg: '',
        isQuiz: false,
        limitResponses: false,
        dbType : '',
        dbSrc: null,
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
    navigate("/user/editform/" + data._id);
  };

  const createNewFormBox = () => {
    return (
      <div className="col-sm-6 col-md-4">
        <div
          className="card p-4 m-4"
          style={{
            backgroundColor: "rgb(226 218 218)",
          }}
        >
          <div className="card-body">
            <h5 className="card-title"></h5>
            <p className="card-text column d-flex justify-content-center align-items-center">
              <EllipsedLabel
                label={
                  <div>
                    <div className="d-flex justify-content-center align-items-center">
                      {" "}
                      <img src="addition.png" />
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      <button
                        className="btn btn-primary"
                        onClick={createNewForm}
                      >
                        {" "}
                        Create New+
                      </button>
                    </div>
                  </div>
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
            className="card p-4 m-4"
            style={{
              backgroundColor: " rgb(226 218 218)",
            }}
          >
            <div className="card-body">
              <h5 className="card-title">{form.title}</h5>
              <p
                className="card-text"
                data-mdb-toggle="tooltip"
                title={form.description}
              >
                {form.description ? (
                  form.description.substring(0, 80) + "..."
                ) : (
                  <p className="text-muted">No Description</p>
                )}
              </p>
              <Link
                to={"/user/editform/" + form._id}
                className="btn btn-primary mr-8 m-2"
              >
                Edit
              </Link>
              <button
                className="btn btn-danger"
                onClick={() => {
                  deleteForm(form._id);
                }}
              >
                <i className="fas fa-trash" />
              </button>
            </div>
          </div>
        </div>
      ));
    else return <h1>Loading...</h1>;
  };
 
  // Search Bar
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  return (
    <div
    // style={{
    //   backgroundColor: "white",
    // }}
    >
      <header
        style={{
          backgroundImage:
            'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYXJYToUTPVAPTvxASx8EtJfoBPvWvRXooOA&usqp=CAU")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          
        }}
      >
        <div className="container">
          <div className="row container py-5">
            <div className="col">
              <div
                className="text-center"
                style={{
                  fontFamily: "serif",
                  fontSize: "40px",
                  color : "white",
                }}
              >
                Create more with Digital Templates
              </div>
            </div>
            <div className="col input-group column d-flex justify-content-end align-items-end">
              <div className="form-outline d-flex  justify-content-end align-items-end">
                <img src="member.png" />
              <Box sx={{ flexGrow: 1 }}>
      
        
          <Search position="static" style={{ backgroundColor : "white"}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
      
      
    </Box>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container m-8">
        <div className="container">
          <div className="row">
            {createNewFormBox()}
            {displayTemplates()}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListForms;
