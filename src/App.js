import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./component/home/Home";
import Registration from './component/registration/Registration';
import Context from "./context/Context";
import LoginForm from './component/login/LoginForm';
import Dashboard from "./component/dashboard/Dashboard";
import AddBlog from "./component/dashboard/addBlog/AddBlog";
import ManageAllBlog from './component/dashboard/ManageAllBlog/ManageAllBlog'
import UpdateBlog from "./component/dashboard/updateBlog/UpdateBlog";
import PendingAllBlog from "./component/dashboard/pendingAllBlog/PendingAllBlog";


function App() {
  return (
    <Context>
          <Router>          
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/registration" element={<Registration/>} />
            <Route path="/login" element={<LoginForm/>} />
            <Route path="/dashboard/*" element={<Dashboard/>} >
                <Route path="add-blog" element={<AddBlog/>} />
                <Route path="all-blog" element={<ManageAllBlog/>} />
                <Route path="update-blog/:blogId" element={<UpdateBlog/>} />
                <Route path="pending-blog" element={<PendingAllBlog/>} />
            </Route>
          </Routes>
        </Router>
    </Context>
  );
}

export default App;
