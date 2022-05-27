// import './App.css';
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddTools from "./Pages/Dashboard/AddTools/AddTools";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import MakeAdmin from "./Pages/Dashboard/makeAdmin/MakeAdmin";
import ManageTools from "./Pages/Dashboard/ManageTools/ManageTools";
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders";
import MyProfile from "./Pages/Dashboard/MyProfile/MyProfile";
import MyReviews from "./Pages/Dashboard/MyReviews/MyReviews";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import Purchase from "./Pages/Purchase/Purchase";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Navbar/Header";
import NotFound from "./Pages/Shared/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="tool/:toolId" element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path="dashboard" element={
          <RequireAuth><Dashboard></Dashboard></RequireAuth>
        }>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="myreviews" element={<MyReviews></MyReviews>}></Route>
          <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
          <Route path="managetools" element={<ManageTools></ManageTools>}></Route>
          <Route path="addtools" element={<AddTools></AddTools>}></Route>
          <Route path="makeadmin" element={<MakeAdmin></MakeAdmin>}></Route>
        </Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
