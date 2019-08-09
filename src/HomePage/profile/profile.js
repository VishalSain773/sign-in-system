import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import appService from '../../AppService';
import { Grid,Container,Dialog } from '@material-ui/core';


class Profile extends React.Component {
  
constructor() {
  super()
  this.state = {
    data : {},
    userDetails : [],
    userData : {},
    showUser : false
  }
}

componentWillMount() {
  appService.getUserList(1,response =>{
    console.log(response.data)
    this.setState({userDetails : response.data, data : response})
  })
}

getUserDetails(pageNumber){
  appService.getUserList(pageNumber,response =>{
    console.log(response.data)
    this.setState({userDetails : response.data, data : response})
  })
}

MyButtonContainer = () => {
  var container = [];
   for(let i=1; i<=this.state.data.total_pages ; i++ ) {
     container.push(<Button onClick={()=>this.getUserDetails(i)}>{i}</Button>)
   }
   return container
}

getSingleUser = (id) => {
  appService.getSingleUser(id,response =>{
    console.log(response);
    this.setState({userData : response.data , showUser : true})
  })
}

handleCloseDialog = () => {
  this.setState({showUser : false})
}

  render() {
  return (
    <Container>
    <Grid container
    direction="row"
    justify="center"
    alignItems="center">
    {this.state.userDetails.map(item => (
    
    <Card style={{margin:"5%"}} onClick = {()=>this.getSingleUser(item.id)}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="300"
          image={item.avatar}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.first_name + ' ' + item.last_name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Email : {item.email}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
    ))}
    </Grid>
    <Container style={{ textAlign: "-webkit-center"}}>
    {this.MyButtonContainer()}
    </Container>

    <Dialog open={this.state.showUser} onClose={this.handleCloseDialog}
    aria-labelledby="dialog-title" aria-describedby="dialog-description">
    <CardActionArea>
    <CardMedia
      component="img"
      alt="Contemplative Reptile"
      height="300"
      image={this.state.userData.avatar}
      title="Contemplative Reptile"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
      {this.state.userData.first_name + '' + this.state.userData.last_name}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        Email : {this.state.userData.email}
      </Typography>
    </CardContent>
  </CardActionArea>
  </Dialog>

    </Container>
    
  );
  }
}

export default Profile;
