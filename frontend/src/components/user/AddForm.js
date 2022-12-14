import { ExpandMore } from "@mui/icons-material";
import { Assignment } from "@mui/icons-material";
import { PersonPin } from "@mui/icons-material";
import update from "immutability-helper";
import "./updateForms.css";

import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  ClickAwayListener,
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

import { Ballot } from "@mui/icons-material";
import { Formik } from "formik";
import Swal from "sweetalert2";
import app_config from "../../config";
import { useParams } from "react-router-dom";
// import './addForm.css';

const AddForm = () => {
  const url = app_config.api_url;

  const answerTypes = ["smalltext", "longtext", "checkbox", "radio", "file"];

  const formObj = {
    answer: "",
    correct: "",
    mark: 0,
    name: "",
    options: [],
    type: "",
  };

  const { formid } = useParams();
  console.log(formid);

  const [bgImages, setBgImages] = useState([
    "https://wallpaperaccess.com/full/643353.png",
    "https://images.unsplash.com/photo-1616088410192-d1b123712994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWluaW1hbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80",
    "https://wallpaperaccess.com/full/2906429.jpg",
    "https://images.wallpapersden.com/image/download/minimal-hd-landscape_bWhsZ2WUmZqaraWkpJRmbmdlrWZlbWU.jpg",
    "https://wallpapercave.com/wp/wp2733308.jpg",
    "https://c4.wallpaperflare.com/wallpaper/150/795/765/beautiful-blue-water-green-nature-blue-and-green-picture-of-nature-wallpaper-preview.jpg",
    "https://wallpaperaccess.com/full/7445.jpg",
    "https://wallpaperaccess.com/full/2722030.jpg",
  ]);

  const [selBgImg, setSelBgImg] = useState(null);

  const [bgColor, setbgColor] = useState(["red", "yellow", "blue", "green"]);

  const [selBgColor, setSelBgColor] = useState("#f3b0ff");

  const [tempForm, setTempForm] = useState({});

  const [value, setValue] = React.useState(0);
  const [formData, setFormData] = React.useState(null);

  const [dataReady, setDataReady] = React.useState(false);
  const [formLoaded, setFormLoaded] = useState(false);

  const [imgPath, setImgPath] = useState("");
  const [avatar, setAvatar] = useState("");
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const [formDetails, setFormDetails] = useState(null);

  const onFormSubmit = (formdata) => {
    console.log("click on button to submit form");
    setTempForm(formdata);
    console.log(formdata);
  };

  const addNewQuestion = (ques_index) => {
    if (!ques_index) {
      setFormData([...formData, formObj]);
      return;
    }
    console.log(formData);
    const newQuestion = {
      name: "Untitled question",
      answer: "",
      mark: "",
      options: [],
    };

    setFormData([...formData, newQuestion]);
  };

  const handleRename = (prop, val, sect_i, ques_i) => {
    const questions = {};
    if (prop === "ques_name") {
      questions[ques_i] = { name: { $set: val } };
    }

    const newData = update(formData, {
      questions: questions,
    });

    setFormData(newData);
  };

  const handleFileUpload = (prop, file, sect_i, ques_i) => {
    const formData = new FormData();
    formData.append("myfile", file);
    console.log(file);
    // fetch(url + "/util/uploadfile", {
    //   method: "POST",
    //   body: formData,
    // }).then((res) => console.log(res.status));

    console.log(prop);

    const sections = {};
    const questions = {};

    questions[ques_i] = { content: { $set: file.name } };
    sections[sect_i] = { questions: questions };

    const newData = update(formData, {
      sections: sections,
    });

    setFormData(newData);
  };

  const uploadThumbnail = (event) => {
    const data = new FormData();
    data.append("myfile", event.target.files[0]);
    setAvatar(event.target.files[0].name);

    // fetch(url + "/util/uploadfile", { method: "POST", body: data }).then(
    //   (res) => console.log(res)
    // );

    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      // erroMsg = 'Only images are supported.';
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      setImgPath(reader.result);
    };
  };

  const getformById = async () => {
    const response = await fetch(url + "/form/getbyid/" + formid);
    const dbFormData = await response.json();
    console.log(dbFormData);

    setFormData(dbFormData.data.questions);
    setFormDetails(dbFormData);
    setFormLoaded(true);
  };

  React.useEffect(() => {
    console.log(formData);
    setDataReady(true);
    console.log(dataReady);
    getformById();
  }, []);

  const renderCourse = () => {
    return formLoaded
      ? formData.map((question, ques_i) => (
          <div className="card question-card mb-4" key={ques_i}>
            <div className="card-body">
              <div className="row">
                <TextField
                  label="Question"
                  fullWidth
                  variant="outlined"
                  value={question.name}
                  onChange={(e) =>
                    handleRename("ques_name", e.target.value, ques_i, 0)
                  }
                />
              </div>
            </div>
            <div className="card-footer d-flex flex-row-reverse bg-light">
              <Button variant="outlined" className="ms-3">
                <i class="fas fa-copy"></i>
              </Button>
              <Button variant="outlined" color="error">
                <i class="fas fa-trash    "></i>
              </Button>
            </div>
          </div>
        ))
      : "Form Loading";
  };

  const userForm = {
    title: "",
    description: "",
    createdBy: currentUser._id,
    createdAt: new Date(),
  };

  const updateForm = async () => {
    let tempData = formDetails;
    tempData.data.questions = formData;
    console.log(tempData);
    const res = await fetch(url + "/form/update/" + formDetails._id, {
      method: "PUT",
      body: JSON.stringify(tempData),
      headers: {
        "Content-Type": "application/json",
      }
    });
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    //success alert
  };

  return (
    <div
      className="main-form main-form-bg"
      style={{
        backgroundImage: selBgImg ? `url('${selBgImg}')` : "white",
        backgroundColor: selBgColor ? `${selBgColor}` : "white",
      }}
    >
      <div className="col-md-8 mx-auto pt-4">
        {/* <div className="container"> */}
        <Paper square>
          <Tabs
            value={value}
            onChange={(e, v) => setValue(v)}
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="secondary"
            aria-label="icon label tabs example"
          >
            <Tab icon={<Assignment />} label="Edit Form" />
            <Tab icon={<PersonPin />} label="Setting" />
            <Tab icon={<PersonPin />} label="Responses" />
          </Tabs>
        </Paper>

        <TabPanel value={value} index={0} style={{ backgroundColor: "red" }}>
          <div className="basic-details">
            <Formik
              initialValues={userForm}
              onSubmit={(formdata) => console.log(formdata)}
              // validationSchema={formSchema}
            >
              {({ handleSubmit, handleChange, values, errors, touched }) => (
                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Title"
                    variant="outlined"
                    className="form-control form-control-lg mb-4"
                    id="standard-basic"
                    onChange={handleChange}
                  />
                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    label="Description"
                    variant="outlined"
                    className="form-control form-control-lg mb-4"
                    id="standard-basic"
                    onChange={handleChange}
                  />
                </form>
              )}
            </Formik>
          </div>
          <hr />
          <div className="form-customizer">{renderCourse()}</div>
          <Button
            sx={{ mt: 3, mb: 2 }}
            onClick={(e) => addNewQuestion()}
            variant="outlined"
          >
            <i class="fas fa-plus"></i>
          </Button>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <select
            className="form-control"
            onChange={(e) => setSelBgImg(e.target.value)}
          >
            {bgImages.map((img, i) => (
              <option value={img} key={i}>
                {img}
              </option>
            ))}
          </select>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <select
            className="form-control"
            onChange={(e) => setSelBgColor(e.target.value)}
          >
            {bgColor.map((color, i) => (
              <option value={color} key={i}>
                {color}
              </option>
            ))}
          </select>
        </TabPanel>
        {/* </div> */}
        <button className="btn btn-primary" onClick={updateForm}>
          Save Form
        </button>
      </div>
    </div>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      className="p-0  "
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Paper square className="p-5">
          {children}
        </Paper>
      )}
    </div>
  );
}

export default AddForm;
