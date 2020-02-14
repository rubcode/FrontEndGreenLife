import React from 'react';
//import logo from './logo.svg';
import './App.css';
import './css/styles.css'
import './Pages/Home/home.js'
import Routes from './Routes';
import Navbar from './Components/Shared/Navbar/Navbar';


class App extends  React.Component {
  componentDidMount() {
    
  }
  render(){
    return (
      <Routes />
      
     
    );
  }
  
}

export default App;
