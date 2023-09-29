import { Routes, Route, useNavigate } from "react-router-dom";
import { Create, Home, Login, Profile, Signup } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCookies } from "react-cookie";
import { useEffect } from "react";

const App = () => {
  const [cookie] = useCookies(["access_token"]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!cookie.access_token) {
      navigate("/login");
    } else {
      navigate("/home");
    }
  }, [cookie]);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route exact path="/" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/create" element={<Create />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default App;
