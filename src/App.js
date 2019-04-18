import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Deskripsi from './component/dumb/Deskripsi'
import Input from './component/screen/Input'
class App extends Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
          <Deskripsi name="Naeta"></Deskripsi>
          <Deskripsi name="Pratama"></Deskripsi>
          <Input
            name = "agit"
            alamat = "Indonesia"
          />
           <Input
            name = "agit"
            alamat = "Belanda"
          />
      </div>
    );
  }
}



export default App;
