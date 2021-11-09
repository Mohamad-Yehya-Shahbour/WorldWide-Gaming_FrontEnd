import React from 'react'
import { useState } from 'react';
import { Grid, Paper, TextField } from '@material-ui/core'
import Button from '@mui/material/Button';
import { Container, Row, Col } from 'react-grid-system';
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';


const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginData = {
        email : email,
        password : password,
    };

    const handler = async (e) => {
        e.preventDefault();
        const datatoadd = JSON.stringify(loginData);
        console.log(datatoadd);
        api
        .login(datatoadd)
        .then((response)=>{
            localStorage.setItem("access_token", response.data.access_token);
            localStorage.setItem("user_id", response.data.user_id);
            localStorage.setItem("user_name", response.data.user_name);
            history.push("/feed");
        })
        .catch((error)=>{console.log(error.response)})
    }


    const paperStyle = {paddingLeft: 50, paddingRight: 50, width: "85%", margin: "auto", backgroundColor:"#F8F9F9" }
    const headerStyle = { margin: 0 }
  
    return (
        <Grid id="register-grid">
            <Container className="pt-5">
                <Row className="">
                    <Col sm={12} className=" d-flex align-items-center justify-content-center">
                        <Paper elevation={20} style={paperStyle}>
                            <Row className="mb-5">
                                <Col sm={12} className="d-flex justify-content-center align-items-center ">
                                    <p style={{fontSize:"2.5em", color:"purple"}}><b id="title">WWgaming</b></p>
                                </Col>
                                <Col sm={12} className="d-flex justify-content-center">
                                    <h4 style={headerStyle}><b>Login</b></h4>
                                </Col>
                            </Row>
                            <form>
                                <TextField onChange={(e) => { setEmail(e.target.value) }} className="mb-1" fullWidth label='Email' placeholder="Enter your email" />
                                <TextField onChange={(e) => { setPassword(e.target.value) }} className="mb-1" type="password" fullWidth label='Password' placeholder="Enter your password"/>
                                <br/>
                                <Row className="mt-5">
                                    <Col sm={12}>
                                        <Button onClick={(e)=>{handler(e)}} sx={{background:"linear-gradient(90deg, rgba(212,39,223,1) 100%, rgba(212,39,223,1) 100%, rgba(0,212,255,1) 100%)"}} type='submit' variant='contained' color="success">Login</Button>
                                    </Col>
                                </Row>
                                <Row className="mt-2 mb-3">
                                    <Col sm={12} className="d-flex align-items-center justify-content-start">
                                        Don't have an account?
                                        <Link to ="/" className=" text-black ml-2">
                                            SignUp
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

export default Login;