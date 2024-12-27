import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login";
import Editor from "./pages/editor/editor";
import Home from "./pages/home/home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Add your routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/editor" element={<Editor />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
