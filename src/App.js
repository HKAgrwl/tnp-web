import './App.css';
import Navbar from './Components/Navbar';
import './Profile_Comps/Sidebar2.css'
import LoginPage from './LoginPage';
import './Login.css';
import { render } from "react-dom"
import { Routes, Route, Link } from "react-router-dom";
import CreateInt from './Profile_Comps/CreateInt';
import MyPosts from './Profile_Comps/MyPosts';
import Tags from './Profile_Comps/Tags';
import Dashboard from './Dashboard';
import Profile2 from './Profile_Comps/Profile2';
import Sidebar2 from './Profile_Comps/Sidebar2';
import ForumPage from './Forum/ForumPage';
import SignUp from './SignUp';
import './SignUp.css';



function App() {
  return (
      <>
      {/* <Navbar/> */}
      {/* <LoginPage/> */}
      {/* <CreateInt/> */}
      {/* <MyPosts/> */}
      {/* <Dashboard/> */}
      {/* <Profile2/> */}
      {/* <Sidebar2/> */}
      {/* <ForumPage/> */}
      <SignUp/>
      </>
  );
}

export default App;
