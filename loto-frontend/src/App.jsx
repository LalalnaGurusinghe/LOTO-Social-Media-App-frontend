import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Authentication from "./pages/authentication/Authentication";
import HomePage from "./HomePage";
import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Authentication />}>
          <Route index element={<Login />} />{" "}
          {/* Default route inside Authentication */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
