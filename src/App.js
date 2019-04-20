import React, { Component } from 'react';
import Deskripsi from './component/dumb/Deskripsi';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      name : '',
      stillType: '',
    }
    
  }

  setName = (e) => {
    let name = e.target.value
    this.setState({
      name : name,
      stillType : true,
    })
  }
  setStillType= () =>{
    this.setState({
      stillType : false
    })
  }

  componentDidMount(){
    this.setState({
      stillType : false,
    })
  }

  componentDidUpdate(){
    console.log('component melakukan update')
  }
  render() {
    if(this.state.stillType===true){
      return(
        <div>
          <h1>{this.state.name}</h1>
          <input onChange ={this.setName}/>
          <button onClick={this.setStillType}> submit</button>
          <p> Loading ... </p>
        </div>
      )
    }
    return (
      <div>
         <h1>{this.state.name}</h1>
         <input onChange ={this.setName}/>
         <Deskripsi name={this.state.name}></Deskripsi>
      </div>
    );
  }
}



export default App;
