import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import LayoutContents from '../componets/LayoutContents'; // Correct path
import Appointment from '../componets/Form/Appointment'; // Correct path
import UserProfile from '../componets/Form/UserProfile';
import AppointmentList from '../componets/Form/AppointmentList';
import StaffForm from '../componets/Form/StaffForm';
import StaffList from '../componets/Form/StaffList';

// Lazy load the App component
const App = lazy(() => import('../App'));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/app" element={<App />}>
            {/* <Route index element={<LayoutContents><div>SUZA STAFF STUDENT APPOITMENT SYSTEM</div></LayoutContents>} /> */}
            <Route path="appointment" element={<Appointment />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="list" element={<AppointmentList />} />
            <Route path="staffAdd" element={<StaffForm/>} />
            <Route path="staffList" element={<StaffList/>} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
