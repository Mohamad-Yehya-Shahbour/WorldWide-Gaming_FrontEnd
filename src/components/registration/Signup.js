import React from 'react'
import { useState } from 'react';
import { Grid, Paper,TextField } from '@material-ui/core'
import Button from '@mui/material/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Container, Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';


const Signup = () => {
    const history = useHistory();

    const [dob, setDob] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [country, setCountry] = useState("");
    const [region, setRegion] = useState("");

    const dateArray = dob.split("-");
    //const date = "" + dateArray[1] + "/" + dateArray[2] + "/" + dateArray[0] + "";
    const registerData = {
        userName : userName,
        email : email,
        password : password,
        country : country,
        region : region,
    };




    const handler = async (e) => {
        e.preventDefault();
        const datatoadd=JSON.stringify(registerData);

        //console.log(datatoadd)
        /* const registerFormData = new FormData();
        registerFormData.append("UserName", userName)
        registerFormData.append("Email", email)
        registerFormData.append("Password", password) */

        /* const headers = {
        'Content-Type': 'application/json',
        }
        axios.post('http://mohamadyehya-001-site1.dtempurl.com/api/users/register', datatoadd, {
            headers: headers
        }) */
        api
        .register(datatoadd)
        .then((response)=>{if(response.status === 201){
            history.push("/login")
        }})
        .catch((error)=>{alert(error.response)})
        //console.log(data);
    }

    const paperStyle = { paddingLeft: 50, paddingRight: 50, width: "85%", margin: "auto", backgroundColor: "#F8F9F9" }
    const headerStyle = { margin: 0 }

    return (
        <Grid id="register-grid" >
            <Container className="pt-5">
                <Row >
                    <Col sm={12} className=" d-flex align-items-center justify-content-center">
                        <Paper elevation={20} style={paperStyle}>
                            <Row className="mb-5">
                                <Col sm={12} className="d-flex justify-content-center">
                                    <p style={{ fontSize: "2.5em" }}><b>WWG</b></p>
                                </Col>
                                <Col sm={12} className="d-flex justify-content-center">
                                    <h4 style={headerStyle}><b>Sign Up</b></h4>
                                </Col>
                            </Row>
                            <form>
                                <Row className="mb-3" >
                                    <Col sm={6}>
                                        <TextField onChange={(e) => { setUserName(e.target.value) }} className="mb-1" fullWidth label='Name' placeholder="Enter your name" />
                                        <TextField onChange={(e) => { setEmail(e.target.value) }} className="mb-1" fullWidth label='Email' placeholder="Enter your email" />
                                        <TextField onChange={(e) => { setCountry(e.target.value) }} className="mb-1" fullWidth label='Country' placeholder="Enter your Country" />
                                    </Col>
                                    <Col sm={6}>
                                        <TextField onChange={(e) => { setPassword(e.target.value) }} className="mb-1" type="password" fullWidth label='Password' placeholder="Enter your password" />
                                        <TextField className="mb-1" fullWidth label='Confirm Password' placeholder="Confirm your password" />
                                        <TextField onChange={(e) => { setRegion(e.target.value) }} className="mb-1" fullWidth label='Region' placeholder="Enter your Region" />
                                    </Col>
                                </Row>


                                <TextField className="mb-4" onChange={(e) => { setDob(e.target.value) }} fullWidth id="date" label="Birthday" type="date" defaultValue={dob} sx={{ width: 220 }} InputLabelProps={{ shrink: true, }} />
                                <FormControl className="mb-1" component="fieldset">
                                    <FormLabel component="legend">Gender</FormLabel>
                                    <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    </RadioGroup>
                                </FormControl>
                                <br />
                                <Row>
                                    <Col sm={12}>
                                        <Button onClick={handler} sx={{ background: "linear-gradient(90deg, rgba(212,39,223,1) 100%, rgba(212,39,223,1) 100%, rgba(0,212,255,1) 100%)" }} type='Button' variant='contained' color='success'>Sign up</Button>
                                    </Col>
                                </Row>
                                <Row className="mt-2 mb-2">
                                    <Col sm={12} className="d-flex align-items-center justify-content-start">
                                        Already have an account?
                                        <Link to="/login" className="text-black ml-2">
                                            LogIn
                                        </Link>
                                    </Col>
                                </Row>
                            </form>
                        </Paper>
                    </Col>
                </Row>
            </Container>

        </Grid>
    )
}

export default Signup;