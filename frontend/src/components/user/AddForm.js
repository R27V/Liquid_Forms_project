import {
  Add,
  Delete,
  DynamicForm,
  ExpandLess,
  ExpandMore,
  Forum,
  Palette,
  Quiz,
  RemoveRedEye,
  Storage,
  ThumbUpAlt,
  ThumbUpAltRounded,
  Visibility,
  Wallpaper,
} from "@mui/icons-material";
import { Assignment } from "@mui/icons-material";
import { PersonPin } from "@mui/icons-material";
import update from "immutability-helper";
import "./updateForms.css";

import {
  Button,
  Card,
  CardContent,
  Checkbox,
  Collapse,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  Switch,
  Tab,
  Tabs,
  TextField,
  Tooltip,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import { Formik } from "formik";
import Swal from "sweetalert2";
import app_config from "../../config";
import { useNavigate, useParams } from "react-router-dom";
import ResponseManage from "./ResponseManage";
import SheetCreator from "./dbForms/SheetCreator";
import MongoDB from "./dbForms/MongoDB";
// import './addForm.css';

const AddForm = () => {
  const url = app_config.api_url;
  const navigate = useNavigate();

  const [showConfMsg, setShowConfMsg] = useState(false);
  const [responses, setResponses] = useState([]);

  const [confMsgOpen, setConfMsgOpen] = useState(false);

  // 1: color , 2: image
  const [background, setBackground] = useState(1);

  const [confMsg, setConfMsg] = useState("");

  const answerTypes = [
    { value: "smalltext", label: "Small Text" },
    { value: "longtext", label: "Long Text" },
    { value: "checkbox", label: "Checkbox" },
    { value: "radio", label: "Radio" },
    { value: "file", label: "File" },
  ];

  const [formTitle, setFormTitle] = useState("");
  const [formHeading, setFormHeading] = useState("");
  const [formDescription, setFormDescription] = useState("");

  const [selDB, setSelDB] = useState(1);

  const formObj = {
    answer: "",
    correct: "",
    mark: 0,
    name: "",
    options: [],
    type: "",
  };

  const { formid } = useParams();
  // console.log(formid);

  const [bgImages, setBgImages] = useState([
    "https://wallpaperaccess.com/full/643353.png",
    "https://images.unsplash.com/photo-1616088410192-d1b123712994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWluaW1hbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80",
    "https://wallpaperaccess.com/full/2906429.jpg",
    "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000",
    "https://wallpapercave.com/wp/wp2733308.jpg",
    "https://c4.wallpaperflare.com/wallpaper/150/795/765/beautiful-blue-water-green-nature-blue-and-green-picture-of-nature-wallpaper-preview.jpg",
    "https://wallpaperaccess.com/full/7445.jpg",
    "https://wallpaperaccess.com/full/2722030.jpg",
    "https://as2.ftcdn.net/v2/jpg/01/77/20/33/1000_F_177203359_86UWu7p2lI9ZWodqy53OmxoiBR8sfLFd.jpg"
  ]);

  const [selBgImg, setSelBgImg] = useState(null);

  const [bgColor, setbgColor] = useState(null);

  const [selBgColor, setSelBgColor] = useState("#f3b0ff");

  const [tempForm, setTempForm] = useState({});

  const [value, setValue] = React.useState(0);
  const [formData, setFormData] = React.useState(null);

  const [dataReady, setDataReady] = React.useState(false);
  const [formLoaded, setFormLoaded] = useState(false);

  const [isQuiz, setIsQuiz] = useState(false);
  const [limitOneResponse, setLimitOneResponse] = useState(false);
  const [confirmationMsg, setConfirmationMsg] = useState();

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
      options: [{ label: "Untitled Option", checked: false }],
    };

    setFormData([...formData, newQuestion]);
  };

  const handleRename = (prop, val, ques_i) => {
    let temp = formData[ques_i];
    temp[prop] = val;
    setFormData([
      ...formData.slice(0, ques_i),
      temp,
      ...formData.slice(ques_i + 1),
    ]);
  };

  const handleAddOption = (ques_i) => {
    let temp = formData[ques_i];
    temp.options.push({ label: "Untitled Option", checked: false });
    setFormData([
      ...formData.slice(0, ques_i),
      temp,
      ...formData.slice(ques_i + 1),
    ]);
  };

  const handleRemoveOption = (ques_i, opt_i) => {
    let temp = formData[ques_i];
    temp.options.splice(opt_i, 1);
    setFormData([
      ...formData.slice(0, ques_i),
      temp,
      ...formData.slice(ques_i + 1),
    ]);
  };

  const handleRenameOption = (ques_i, opt_i, val) => {
    let temp = formData[ques_i];
    temp.options[opt_i].label = val;
    setFormData([
      ...formData.slice(0, ques_i),
      temp,
      ...formData.slice(ques_i + 1),
    ]);
  };

  const removeQuestion = (ques_i) => {
    setFormData([...formData.slice(0, ques_i), ...formData.slice(ques_i + 1)]);
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
    setFormTitle(dbFormData.title);
    setFormDescription(dbFormData.description);
    setFormHeading(dbFormData.heading);
    fetchResponses(dbFormData._id);
    setFormLoaded(true);
    setConfMsg(dbFormData.data.confirmationMsg);
    setIsQuiz();

    if(dbFormData.dbType === "Sheet"){
      setSelDB(1);
    }
    else if(dbFormData.dbType === "MongoDB"){
      setSelDB(2);
    }else if(dbFormData.dbType === "MySQL"){
      setSelDB(3);
    }
  };

  React.useEffect(() => {
    console.log(formData);
    setDataReady(true);
    console.log(dataReady);
    getformById();
  }, []);

  useEffect(() => {
    const timeOutId = setTimeout(() => updateFormTitle(), 2000);
    return () => clearTimeout(timeOutId);
  }, [formTitle]);

  const renderAnswerBox = ({ type, options }, index) => {
    if (type === "smalltext") {
      return <TextField className="mt-3 w-50" disabled variant="standard" />;
    } else if (type === "longtext") {
      return (
        <TextField
          className="mt-3"
          disabled
          fullWidth
          multiline
          rows={2}
          variant="standard"
        />
      );
    } else if (type === "checkbox") {
      return options.map((option, opt_i) => (
        <>
          <div className="d-flex align-items-center">
            <FormControlLabel
              className="mt-3 ms-2"
              key={opt_i}
              control={<Checkbox checked={false} />}
            />
            <TextField
              value={option.label}
              onChange={(e) => handleRenameOption(index, opt_i, e.target.value)}
              className="w-50"
              variant="standard"
            />

            <Tooltip title="Remove Option">
              <IconButton
                color="error"
                className="mt-2"
                onClick={(e) => handleRemoveOption(index, opt_i)}
              >
                <Delete />
              </IconButton>
            </Tooltip>
          </div>
        </>
      ));
    } else if (type === "radio") {
      return options.map((option, opt_i) => (
        <>
          <div className="d-flex align-items-center">
            <FormControlLabel
              className="mt-3 ms-2"
              key={opt_i}
              control={<Radio checked={false} />}
            />
            <TextField
              value={option.label}
              onChange={(e) => handleRenameOption(index, opt_i, e.target.value)}
              className="w-50"
              variant="standard"
            />

            <Tooltip title="Remove Option">
              <IconButton
                color="error"
                className="mt-2"
                onClick={(e) => handleRemoveOption(index, opt_i)}
              >
                <Delete />
              </IconButton>
            </Tooltip>
          </div>
        </>
      ));
    }
  };

  const renderCourse = () => {
    return formLoaded
      ? formData.map((question, ques_i) => (
          <div className="card question-card mb-4" key={ques_i}>
            <div className="card-body">
              <div className="row">
                <div className="col-8">
                  <TextField
                    label="Question"
                    fullWidth
                    variant="outlined"
                    value={question.name}
                    onChange={(e) =>
                      handleRename("name", e.target.value, ques_i)
                    }
                  />
                </div>
                <div className="col-4">
                  {/* <Select options={answerTypes} /> */}
                  <FormControl fullWidth>
                    <InputLabel id="answerType-label">Answer Type</InputLabel>
                    <Select
                      labelId="answerType-label"
                      id="answerType"
                      value={question.type}
                      label="Answer Type"
                      onChange={(e) =>
                        handleRename("type", e.target.value, ques_i)
                      }
                    >
                      {answerTypes.map((type) => {
                        return (
                          <MenuItem value={type.value}>{type.label}</MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </div>
              </div>

              {renderAnswerBox(question, ques_i)}
              {(question.type === "checkbox" || question.type === "radio") && (
                <Tooltip title="Add New Option">
                  <IconButton
                    color="primary"
                    className="ms-2"
                    onClick={(e) => handleAddOption(ques_i)}
                  >
                    <Add />
                  </IconButton>
                </Tooltip>
              )}
            </div>
            <div className="card-footer d-flex flex-row-reverse bg-light">
              <Button variant="outlined" className="ms-3">
                <i class="fas fa-copy"></i>
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={(e) => removeQuestion(ques_i)}
              >
                <i class="fas fa-trash"></i>
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
    tempData.data.confirmationMsg = confMsg;
    console.log(tempData);
    tempData.heading = formHeading;
    tempData.description = formDescription;
    const res = await fetch(url + "/form/update/" + formDetails._id, {
      method: "PUT",
      body: JSON.stringify(tempData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    //success alert
  };

  const fetchResponses = async (formid) => {
    const res = await fetch(url + "/response/getbyform/" + formid);
    const data = await res.json();
    console.log(data);
  };

  const updateFormTitle = async (value) => {
    const res = await fetch(url + "/form/update/" + formDetails._id, {
      method: "PUT",
      body: JSON.stringify({ title: formTitle }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    setFormDetails(data);
  };

  const showSelDB = () => {
    if(selDB===1){
      return <SheetCreator formid={formid} />
    }else if(selDB===2){
      return <MongoDB formid={formid} dbSrc={formDetails.dbSrc} />
    }
  }

  return (
    <div
      className="main-form main-form-bg"
      style={
        background === 1
          ? { backgroundImage: selBgImg ? `url('${selBgImg}')` : "white" }
          : {
              backgroundColor: selBgColor ? `${selBgColor}` : "white",
            }
      }
    >
      <div className="col-md-8 mx-auto pt-4">
        {/* <div className="container"> */}
        <Card className="my-2">
          <CardContent>
            <div className="d-flex justify-content-start align-items-center">
              <TextField className="mr-3"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <DynamicForm />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
                onChange={(e) => setFormTitle(e.target.value)}
                value={formTitle}
                
              />
               <Tooltip title="Preview Form" className="mr-2">
                <IconButton
                  color="secondary"
                  onClick={() => navigate("/main/preview/" + formDetails._id)}
                >
                  <Visibility />
                </IconButton>
              </Tooltip>
              <button className="btn btn-primary m-2" onClick={updateForm}>
                Save Form
              </button>
             
            </div>
          </CardContent>
        </Card>
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

        <TabPanel value={value} index={0}>
          <div className="basic-details">
            <TextField
              fullWidth
              label="Form Header"
              variant="outlined"
              className="mb-4"
              value={formHeading}
              onChange={(e) => setFormHeading(e.target.value)}
            />
            <TextField
              fullWidth
              multiline
              rows={3}
              label="Form Description"
              variant="outlined"
              className="mb-4"
              value={formDescription}
              onChange={(e) => setFormDescription(e.target.value)}
            />
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
          <List>
            <ListItem>
              <ListItemIcon>
                <Wallpaper />
              </ListItemIcon>
              <ListItemText primary="Background Image" />
              <FormControl className="w-50">
                <InputLabel id="back-select">Select Background</InputLabel>
                <Select
                  labelId="back-select"
                  id="back-select-simple"
                  value={background}
                  label="Select Background"
                  onChange={(e) => setBackground(e.target.value)}
                >
                  <MenuItem value={1}>Image</MenuItem>
                  <MenuItem value={2}>Color</MenuItem>
                </Select>
              </FormControl>
            </ListItem>
            {background === 1 ? (
              <ListItem>
                <ListItemIcon>
                  <Palette />
                </ListItemIcon>
                <ListItemText primary="Background Color" />
                <select
                  className="form-control w-50"
                  onChange={(e) => setSelBgImg(e.target.value)}
                >
                  {bgImages.map((img, i) => (
                    <option value={img} key={i}>
                      {img}
                    </option>
                  ))}
                </select>
              </ListItem>
            ) : (
              <ListItem>
                <ListItemIcon>
                  <Palette />
                </ListItemIcon>
                <ListItemText primary="Background Color" />
                <input
                  type="color"
                  className="w-30"
                  onChange={(e) => setSelBgColor(e.target.value)}
                  defaultValue={selBgColor}
                />
              </ListItem>
            )}
            <ListItem>
              <ListItem>
                <ListItemIcon>
                  <Quiz />
                </ListItemIcon>
                <ListItemText primary="Make this Form a Quiz" />
                <Switch />
              </ListItem>
            </ListItem>
            <ListItem>
              <ListItem>
                <ListItemIcon>
                  <Forum />
                </ListItemIcon>
                <ListItemText primary="Limit One Response" />
                <Switch />
              </ListItem>
            </ListItem>
              <ListItemButton onClick={e => setConfMsgOpen(!confMsgOpen)}>
                <ListItemIcon>
                  <ThumbUpAltRounded />
                </ListItemIcon>
                <ListItemText primary="Confirmation Message" />
                {confMsgOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={confMsgOpen} timeout="out" unmountOnExit style={{height: '100%'}}>
              <TextField
                  id="outlined-basic"
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                  value={confMsg}
                  className="mt-3"
                  onChange={(e) => setConfMsg(e.target.value)}
                />
              </Collapse>
              <ListItem>
                <ListItemIcon>
                  <Storage />
                </ListItemIcon>
                {/* <ListItemText primary="Make this Form a Quiz" /> */}
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Database Connection
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selDB}
                    label="Select database"
                    onChange={e => setSelDB(e.target.value)}
                  >
                    <MenuItem value={1}>CSV File</MenuItem>
                    <MenuItem value={2}>MongoDB</MenuItem>
                    <MenuItem value={3}>MySql</MenuItem>
                  </Select>
                </FormControl>
                {/* <Switch /> */}
              </ListItem>
          </List>
          {showSelDB()}
        </TabPanel>

        <TabPanel value={value} index={2}>
          {formDetails !== null && <ResponseManage formid={formDetails._id} />}
        </TabPanel>
        {/* </div> */}
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
