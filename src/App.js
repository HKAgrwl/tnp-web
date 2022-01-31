import './App.css';
import Navbar from './Components/Navbar';
import Profile_Page from './Profile_Comps/Profile_Page';
import { BrowserRouter } from "react-router-dom";
import './Profile_Comps/Sidebar.css'
import './Profile_Comps/Profile.css'
import LoginPage from './LoginPage';
import './Login.css';
import { render } from "react-dom"
import { Routes, Route, Link } from "react-router-dom";
import CreateInt from './Profile_Comps/CreateInt';
import Sidebar from './Profile_Comps/Sidebar';
import MyPosts from './Profile_Comps/MyPosts';
import Tags from './Profile_Comps/Tags';

function App() {
  return (
      <>
      <Navbar/>
      <Sidebar/>
      {/* <Tags/> */}
      <Profile_Page/>
      {/* <LoginPage/> */}
      {/* <CreateInt/> */}
      {/* <MyPosts/> */}
      
      </>
  );
}

export default App;
