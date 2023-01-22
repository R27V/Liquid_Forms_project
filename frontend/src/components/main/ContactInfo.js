import { Button, Card, CardContent, Grid, InputAdornment, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import {AccountCircle, Create, EmailOutlined, LocalPhone, Subject }from '@mui/icons-material';

const ContactInfo = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center"
            style={{
              boxShadow:
              "1px 1px 2px 1px rgb(0 0 0 / 10%), -1px -1px 2px 1px rgb(0 0 0 / 10%)",
            backgroundImage: `url(https://wallpaperaccess.com/full/1223823.jpg)`,
            backgroundSize: "cover",
            height: "100vh",
            }}>
    <Container style={{marginTop:"13vh"}}
      // style={{ minHeight: '100vh', alignItems: 'center', justifyContent: 'center', display: 'flex' }}
    >
      <Card >
        <Grid container
          // spacing={0} direction='row' alignItems='center' justifyContent='center' style={{ minHeight: '100vh' }}
        >
          <Grid item lg={8}>
            <CardContent>
              {/* Header */}
              <div class="form-header blue accent-1">
                <h3 class="mt-2 mb-2">
                  <i class="fas fa-envelope"></i> Write to us:
                </h3>
              </div>

              {/* <!-- Grid row --> */}
              <Grid container className="mt-2">
                {/* <!-- Grid column --> */}
                <Grid item md={6}>
                  <TextField
                    label="Your Name"
                    variant="standard"
                    className="md-form mb-5"
                    id="form-contact-name"
                    InputProps={{
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <AccountCircle />
                                    </InputAdornment>
                                  ),
                                }}
                  />
                </Grid>

                {/* <!-- Grid column --> */}
                <Grid item md={6}>
                  <TextField
                    label="Your Email"
                    variant="standard"
                    className="md-form mb-5"
                    id="form-contact-email"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <EmailOutlined />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                {/* <!-- Grid column --> */}
              </Grid>
              {/* <!-- Grid row --> */}

              <Grid container>
                <Grid item md={6}>
                  <TextField
                    label="Your Phone"
                    variant="standard"
                    className="md-form mb-5"
                    id="form-contact-phone"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <LocalPhone />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Your Subject"
                    variant="standard"
                    className="md-form mb-5"
                    id="form-contact-subject"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Subject />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>

              <Grid container>
                <TextField
                  label="Your Message"
                  variant="outlined"
                  className="w-100 md-form mb-5"
                  id="form-contact-message"
                  type="textarea"
                  multiline
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Create/>
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  className="w-50 btn-primary btn-lg mx-auto"
                >
                  Submit
                </Button>
              </Grid>
            </CardContent>
          </Grid>

          <Grid item lg={4} textAlign="center" color="white" bgcolor="#27293d">
            <CardContent>
              <h3 className="font-weight-bold my-4 pb-2">
                Contact information
              </h3>
              <ul className="text-lg-left list-unstyled ml-4">
                <li>
                  <p>
                    <i class="fas fa-map-marker-alt pr-2"></i>India, 226021,
                    U.P.
                  </p>
                </li>
                <li>
                  <p>
                    <i class="fas fa-phone pr-2"></i>+ 01 234 567 89
                  </p>
                </li>
                <li>
                  <p>
                    <i class="fas fa-envelope pr-2"></i>contact@example.com
                  </p>
                </li>
              </ul>
              <hr className="hr-light my-4" />
              <ul className="list-inline text-center list-unstyled">
                <li className="list-inline-item">
                  <a className="p-2 fa-lg tw-ic">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="p-2 fa-lg li-ic">
                    <i class="fab fa-linkedin-in"> </i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="p-2 fa-lg ins-ic">
                    <i class="fab fa-instagram"> </i>
                  </a>
                </li>
              </ul>
            </CardContent>
          </Grid>
        </Grid>
      </Card>

      {/* </section> */}
    </Container>
    </div>
  );
};

export default ContactInfo;