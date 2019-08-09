import React from "react";
import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  Input,
  Container,
  Grid,
  Typography
} from "@material-ui/core";
import "./Login.css";
import appService from "../AppService";



export default class Login extends React.Component {

  constructor() {
    super()
    this.state = {
      email:"",
      password:""
    }
  }

logIn = () => {
  console.log("logging in..")
  var storage = window["localStorage"];
  appService.login(this.state.email,this.state.password,response => {
    if(response.token != undefined){
      storage.setItem("loginToken",response.token);
      this.props.history.push("/HomePage")
    }
  });
}

handleChange = ({target}) => {
    this.setState({
      [target.name] : target.value
    })
}

  render() {
    return (
        <Grid className="formGrid">
          <Typography variant="h3">Login</Typography>
          <FormControl>
            <InputLabel htmlFor="my-input">Username</InputLabel>
            <Input className="userNameInpuLabel" name="email"  onChange={ this.handleChange } />
          </FormControl>
          <FormControl style={{marginTop:"10px"}}>
            <InputLabel htmlFor="my-password">Password</InputLabel>
            <Input id="my-password" name="password"  onChange={ this.handleChange } />
          </FormControl>
          <Button className="customButton" onClick={this.logIn}>Let me in.</Button>
        </Grid>
    );
  }
}
