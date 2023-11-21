import "./App.css";
import NavBar from "./Components/Common/NavBar";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/core/Auth/Login";
import SignUp from "./Components/core/Auth/SignUp";
import ForgotPassword from "./Pages/ForgotPassword";
import UpdatePassword from "./Pages/UpdatePassword";
import VerifyEmail from "./Pages/VerifyEmail";
import Admin from "./Components/core/AdminPage/Admin";
import { useSelector } from "react-redux";
import Error from "./Pages/Error";
import PrivateRoute from "./Components/core/Auth/PrivateRoute";
import Dashboard from "./Pages/Dashboard";
import Settings from "./Components/core/Dashboard/Settings/Settings";
import MyProfile from "./Components/core/Dashboard/MyProfile";
import { ACCOUNT_TYPE } from "./utils/Constants";
import InstructorApprovals from "./Components/core/AdminPage/InstructorApprovals";
import AddCategory from "./Components/core/AdminPage/AddCategory";
import CategoryApprovals from "./Components/core/AdminPage/CategoryApprovals";
import ContactUs from "./Pages/ContactUs";
import RequestCategory from "./Components/core/Dashboard/RequestCategory";
import Approval from "./Pages/Approval";
import AddCourse from "./Components/core/Dashboard/AddItem/AddCourse";
import MyCourses from "./Components/core/Dashboard/MyCourses";
import EditCourse from "./Components/core/Dashboard/EditCourse/EditCourse";
import Catalog from "./Pages/Catalog";

function App() {

  const {user} = useSelector((state) => state.profile);
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">

      <NavBar/>

      <Routes>
        <Route path="/login/admin" element={<Admin/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/verify-email" element={<VerifyEmail/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/reset-password/:id" element={<UpdatePassword/>} />
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/catalog/:catalogName" element={<Catalog/>}/>

        <Route
            element={
              <PrivateRoute>
                <Dashboard/>
              </PrivateRoute>
            }>
            <Route path="/dashboard/my-profile" element={<MyProfile/>}/>
            <Route path="/dashboard/settings" element={<Settings/>}/>
            <Route path="/dashboard/request-category" element={<RequestCategory/>}/>
            <Route path="/dashboard/list-item" element={<AddCourse/>}/>
            <Route path="/dashboard/my-listings" element={<MyCourses/>}/>
            <Route path="/dashboard/request-category/pendingApproval" element={<Approval request={true}/>}/>
            <Route
                  path="dashboard/edit-course/:courseId"
                  element={<EditCourse />}
            />
            {
              user?.accountType === ACCOUNT_TYPE.ADMIN && (
              <>
                <Route path="/dashboard/admin/instructorApprovals" element={<InstructorApprovals/>}/>
                <Route path="/dashboard/admin/addCategory" element={<AddCategory/>}/>
                <Route path="/dashboard/admin/categoryApprovals" element={<CategoryApprovals/>}/>
              </>
            )}
          </Route>

        {/* 404 Page */}
        <Route path="*" element={<Error />} />
      </Routes>

    </div>
  );
}

export default App;
