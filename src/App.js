import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import About from "./components/Main/About";
import AskPage from "./components/Main/AskPage";
import Send from "./components/Send_mail/Send";
import Submit from "./components/Submit_password/Submit";

function App() {
  const user = localStorage.getItem("token");

  return (
    <Routes>
      {user && <Route path="/" exact element={<Main />} />}
      {user && <Route path="/about" exact element={<About />} />}
      {user && <Route path="/ask" exact element={<AskPage />} />}
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/send" exact element={<Send />} />
      <Route path="/submit" exact element={<Submit />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

export default App;
