import React from 'react';
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Person from '@material-ui/icons/Person'
import { withStyles}  from '@material-ui/core/styles';
import Profile from './profile/profile';
import RecordList from './record-list/record-list';
import { Container } from '@material-ui/core';


class HomePage extends React.PureComponent {
  state = { activeIndex: 0 }

  handleLogOut = () => {
    
    if(localStorage.getItem("loginToken") != null){
      localStorage.removeItem("loginToken")
      this.props.history.push("/")
    }
  }

  handleChange = (_, activeIndex) => this.setState({ activeIndex })
  render() {
    const { activeIndex } = this.state;
    return (
      <div
        style={{
          display: 'flex',
          height: "-webkit-fill-available"
        }}
      >
        <VerticalTabs
          value={activeIndex}
          onChange={this.handleChange}
          style={{background: "#203c54",color: "white"}}
        >
         <MyTab label='Records List' />
         <MyTab label='Profile' />
         <MyTab onClick={this.handleLogOut} label='Logout' />
        </VerticalTabs>

        { activeIndex === 0 && <TabContainer><RecordList/></TabContainer> }
        { activeIndex === 1 && <TabContainer><Profile/></TabContainer> }
    </div>
    )
  }
}

const VerticalTabs = withStyles(theme => ({
  flexContainer: {
    flexDirection: 'column'    
  },
  indicator: {
    display: 'none',
  }
}))(Tabs)

const MyTab = withStyles(theme => ({
  selected: {
    color: 'white',
    background: '#ffffff1f',
    textAlign:"left"
  },
  textAlign:"left"
}))(Tab);

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 24,  width: "-webkit-fill-available"}}>
      {props.children}
    </Typography>
  );
}

export default HomePage;