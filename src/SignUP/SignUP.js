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
import "./SignUP.css"
import appService from "../AppService";

class SignUP extends React.Component {

  constructor() {
    super()
    this.state = {
      email:"",
      password:"",
      cPassword:""
    }
  }

register = () => {
  console.log("logging in..")
  if(this.state.password != null && (this.state.password == this.state.cPassword)){
    appService.register(this.state.email,this.state.password);
  } else if (this.state.password != this.state.cPassword) {
    alert("The password does not match. Please check and try again")
  } else if (this.state.password == null || this.state.email == null){
    alert("Your email id or password is empty please check and try again");
  }
}

handleChange = ({target}) => {
    this.setState({
      [target.name] : target.value
    })
}


  render() {
    return (
      
        <Grid className="formGrid">
          <Typography variant="h3">Sign Up</Typography>
          <FormControl>
            <InputLabel htmlFor="my-input">Username</InputLabel>
            <Input className="userNameInpuLabel" type="id" name="email" onChange={this.handleChange}/>
          </FormControl>
          <FormControl style={{marginTop:"10px"}}>
            <InputLabel htmlFor="my-password">Password</InputLabel>
            <Input id="my-password" type="password" name="password" onChange={this.handleChange}/>
          </FormControl>
          <FormControl style={{marginTop:"10px"}}>
            <InputLabel htmlFor="my-password">Confirm Password</InputLabel>
            <Input id="my-password" type="password" name="cPassword" onChange={this.handleChange}/>
          </FormControl>
          <Button className="customButton" onClick={this.register}>Create account</Button>
        </Grid>
      
    );
  }
}

export default SignUP;
