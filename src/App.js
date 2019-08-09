import React from "react";
import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  Input,
  Container,
  Grid,
  Typography,
  Divider
} from "@material-ui/core";
import "./App.css";
import Login from "./Login/Login";
import SignUP from "./SignUP/SignUP";
import HomePage from "./HomePage/HomePage"
import {Route} from "react-router-dom"

class App extends React.Component {

  constructor() {
  super()
  this.state = {
  isNewUser : true
  }
  }
  newUserValue = () => {
    this.setState((prevState, props) => {
      return {isNewUser: !prevState.isNewUser};
    })
  }  

  render() {
  return (
    <Container className="formContainer">
    <Route exact path="/HomePage" component={HomePage}/>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ position: "relative", top: "15%" }}
      >
        {this.state.isNewUser ? <Route exact path="/" component={Login} /> : <SignUP/> }
        <Container
          style={{
            display: "inline-flex",
            textAlign: "-webkit-center",
            width: "fit-content",
            margin: "4% 0%"
          }}
        >
          <Divider style={{ margin: "16px 10px", width: "150px" }} />
          <Typography variant="h5">{this.state.isNewUser ? "Don't have an account?" : "Already have an account?"}</Typography>
          <Divider style={{ margin: "16px 10px", width: "150px" }} />
        </Container>
        <Button onClick={this.newUserValue}>{this.state.isNewUser ? "Sign Up" : "Sign In"}</Button>
      </Grid>
    </Container>
  );
  }
}

export default App;
