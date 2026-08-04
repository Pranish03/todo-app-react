import { Route, Routes } from "react-router";
import './App.css'
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { SettingPage } from "./pages/SettingPage";

function App() {

  return (
   <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/login" element={<LoginPage/>} />
    <Route path="/signup" element={<SignupPage/>} />
      <Route path="/settings/profile" element={<SettingPage section="profile" />} />
      <Route path="/settings/account" element={<SettingPage section="account" />} />
      <Route path="/settings/notifications" element={<SettingPage section="notifications" />} />
    
   </Routes>
  );
}

export default App
