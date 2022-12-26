import { ExpandMore } from "@mui/icons-material";
import { Assignment } from "@mui/icons-material";
import { PersonPin } from "@mui/icons-material";
import update from "immutability-helper";

import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
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

  const { formid } = useParams();
  console.log(formid);

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

  const onFormSubmit = (formdata) => {
    console.log("click on button to submit form");
    setTempForm(formdata);
    console.log(formdata);
  };


  const addNewSection = () => {
    const newSection = {
      name: "Untitled Section",
      description: "Section Description",
      questions: [
        {
          name: "question 1",
          description: "question 1 Description",
          content: "",
          resources: [],
        },
      ],
    };
    <div class="form-outline">
      <input type="text" id="form12" class="form-control" />
      <label class="form-label" for="form12">
        question 1
      </label>
    </div>;

    const newData = update(formData, {
      sections: {
        $push: [newSection],
      },
    });

    setFormData(newData);
  };

  const addNewQuestion = (sect_index) => {
    const newQuestion = {
      name: "Untitled question",
      description: "question Description",
      content: "",
      resources: [],
    };

    const sections = {};
    sections[sect_index] = { questions: { $push: [newQuestion] } };

    const newData = update(formData, {
      sections: sections,
    });

    setFormData(newData);
  };

  const handleRename = (prop, val, sect_i, ques_i) => {
    const sections = {};
    const questions = {};
    if (prop == "lect_name") {
      questions[ques_i] = { name: { $set: val } };
      sections[sect_i] = { questions: questions };
    } else if (prop == "lect_desc") {
      questions[ques_i] = { description: { $set: val } };
      sections[sect_i] = { questions: questions };
    } else if (prop == "sect_name") {
      sections[sect_i] = { name: { $set: val } };
    } else if (prop == "sect_desc") {
      sections[sect_i] = { description: { $set: val } };
    }

    const newData = update(formData, {
      sections: sections,
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

  // const showThumb = () => {
  //   if (imgPath) {
  //     return <img src={imgPath} className="img-fluid" />;
  //   }
  // };

  const getformById = async () => {
    const response = await fetch(url+'/form/getbyid/'+formid);
    const dbFormData = await response.json();
    console.log(dbFormData);

    setFormData(dbFormData.data);
    setFormData(true);
  }

  React.useEffect(() => {
    console.log(formData);
    setDataReady(true);
    console.log(dataReady);
    getformById();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    alert(event);
  };

  const renderCourse = () => {
    return (
      <div className="">

        { formLoaded? formData.sections.map((section, sect_i) => (
          <div className="card">
          <div className="form-section" key={sect_i}>
            <h3>
              Section {`${sect_i + 1}: `}
              <InputBase
                className="section-input"
                value={section.name}
                onChange={(e) =>
                  handleRename("sect_name", e.target.value, sect_i, 0)
                }
              ></InputBase>
            </h3>
            <InputBase
              value={section.description}
              onChange={(e) =>
                handleRename("sect_desc", e.target.value, sect_i, 0)
              }
            ></InputBase>
            {section.questions.map((question, ques_i) => (
              <Accordion key={ques_i}>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <h4>
                    question {`${ques_i + 1}: `}
                    <InputBase
                      value={question.name}
                      onChange={(e) =>
                        handleRename(
                          "ques_name",
                          e.target.value,
                          sect_i,
                          ques_i
                        )
                      }
                    ></InputBase>
                  </h4>
                </AccordionSummary>
                <AccordionDetails>
                  <FormControl fullWidth>
                    <InputLabel id="sel-answer-type">
                      Select Answer Type
                    </InputLabel>
                    <Select
                      labelId="sel-answer-type"
                      id="sel-answer"
                      value={question.answertype}
                      label="Select Answer Type"
                      // onChange={handleChange}
                    >
                      {answerTypes.map((type) => (
                        <MenuItem value={type}>{type}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </AccordionDetails>

                <AccordionActions></AccordionActions>
              </Accordion>
            ))}
            {/* <Button onClick={(e) => addNewQuestion(sect_i)}>
              Add New question
            </Button> */}
            <Button onClick={(e) => addNewQuestion(sect_i)} variant="outlined">
              ADD NEW QUESTION
            </Button>
          </div></div>
        ))
        :
        "Form Loading"
            
      }
        <Button onClick={addNewSection} variant="contained">
          Add New Section
        </Button>

        {/* <Button className="w-100 mt-5" onClick={createCourse}>
          Create Course
        </Button> */}
      </div>
    );
  };

  const userForm = {
    title: "",
    description: "",
    createdBy: currentUser._id,
    createdAt: new Date(),
  };

  // 2. Create a function for form submission
  const userSubmit = (formdata) => {
    console.log(formdata);
    return;
    fetch("http://localhost:5000/form/add", {
      method: "POST",
      body: JSON.stringify(formdata), //convert javascript to json
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        console.log("data saved");
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Form Created Successfully!!👍",
        });
      }
    });
  };

  const updateForm = async () => {
    const res = await fetch(url+'/form/getall', {
      method: 'PUT',
      body : JSON.stringify({

      })
    });
    const data = await res.json();

    console.log(res.status);
    
  }

  return (
    <div className="col-md-8 mx-auto pt-4 w-100">
      <button className="btn btn-primary" onClick={updateForm}>Save Form</button>
      {/* <div className="container"> */}
        <Paper square>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="secondary"
            aria-label="icon label tabs example"
          >
            <Tab icon={<Assignment />} label="Create Your Forms" />
            <Tab icon={<PersonPin />} label="Setting" />
            <Tab icon={<PersonPin />} label="Responses" />
          </Tabs>
        </Paper>

        <TabPanel value={value} index={0}>
          <div className="basic-details">
            <Formik
              initialValues={userForm}
              onSubmit={userSubmit}
              // validationSchema={formSchema}
            >
              {({ handleSubmit, handleChange, values, errors, touched }) => (
                <form onSubmit={handleSubmit}>
                  <div className="p-3">
                  <TextField
                    label="Title"
                    variant="standard"
                    // className="w-50 mb-4"
                    id="standard-basic"
                    onChange={handleChange}
                    // value={values.title}
                    // className="form-control form-control-lg"
                    // helperText={touched.username ? errors.username : ''}
                    // error={Boolean(errors.username && touched.username)}
                  /></div>
                  <div className="p-3">

                  <TextField
                    label="Description"
                    variant="standard"
                    // className="w-50 mb-4"
                    id="standard-basic"
                    onChange={handleChange}
                    // value={values.description}
                    // className="form-control form-control-lg"
                    // helperText={touched.email ? errors.email : ''}
                    // error={Boolean(errors.email && touched.email)}
                  /></div>
                  {/* <button type="submit" className="btn btn-warning btn-lg ms-2">
                    Submit
                  </button> */}
                </form>
              )}
            </Formik>
          </div>
          

          <div className="form-customizer">{renderCourse()}</div>

          {/* <Formik initialValues={courseForm} onSubmit={onFormSubmit}>
            {({ values, handleChange, handleSubmit, isSubmitting }) => (
              <form onSubmit={handleSubmit}></form>
            )}
          </Formik> */}
          
        </TabPanel>

        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
      {/* </div> */}
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
