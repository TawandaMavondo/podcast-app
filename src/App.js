import React, { Component } from 'react';
import LoadingOverlay from 'react-loading-overlay';
import {RingLoader,ClimbingBoxLoader} from 'react-spinners'
class App extends Component{
  
  constructor(){
    super();
    this.state={
      isActive:true
    }
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({isActive:false})
    },4000)
  }
  render(){
    return (
      <div className="App">
        <LoadingOverlay
            active={this.state.isActive}
            spinner={<ClimbingBoxLoader
            color="white"
            />}  
              >
            </LoadingOverlay>
      </div>
    );
  }
}

export default App;
