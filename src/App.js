import React, { Component } from 'react';
import FormGuru from './component/screen/FormGuru';
import FormSiswa from './component/screen/FormSiswa';

class App extends Component {

  constructor(props){
    super(props) 
  }

 
  render() {
    return(
     <div>
        <FormGuru/>
        <hr></hr>
        <FormSiswa/>
     </div>
    )
  }
}



export default App;
