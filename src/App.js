// import './App.css';
import { useAuthState } from "react-firebase-hooks/auth";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import auth from "./firebase.init";
import UseAdmin from "./Hooks/UseAdmin";
import UseNonAdmin from "./Hooks/UseNonAdmin";
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
import RequireAdmin from "./Pages/Login/RequireAdmin/RequireAdmin";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import RequireNonAdmin from "./Pages/Login/RequireNonAdmin/RequireNonAdmin";
import Purchase from "./Pages/Purchase/Purchase";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Navbar/Header";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import ManageOrders from "./Pages/Dashboard/ManageOrders/ManageOrders";
import Payment from "./Pages/Dashboard/Payment/Payment";
import SupportSession from './Pages/Home/SupportSession/SupportSession';
import Blogs from "./Pages/Blogs/Blogs";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";

function App() {
  const [user] = useAuthState(auth)
  const [admin] = UseAdmin(user);
  const [nonAdmin] = UseNonAdmin(user)
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
          {nonAdmin && <Route index element={<RequireNonAdmin><MyOrders></MyOrders></RequireNonAdmin>}></Route>}
          <Route path="myreviews" element={<RequireNonAdmin><MyReviews></MyReviews></RequireNonAdmin>}></Route>
          <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
          <Route path="managetools" element={<RequireAdmin><ManageTools></ManageTools></RequireAdmin>}></Route>
          <Route path="addtools" element={<RequireAdmin><AddTools></AddTools></RequireAdmin>}></Route>
          <Route path="manageorders" element={<RequireAdmin><ManageOrders></ManageOrders></RequireAdmin>}></Route>
          {
            admin && <Route index element={<RequireAdmin><MakeAdmin></MakeAdmin></RequireAdmin>}></Route>
          }
          <Route path="myorder/:myorderId" element={<Payment></Payment>}></Route>
        </Route>

        <Route path="supportsession" element={<SupportSession></SupportSession>}></Route>
        <Route path="blogs" element={<Blogs></Blogs>}></Route>
        <Route path="myportfolio" element={<MyPortfolio></MyPortfolio>}></Route>

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
