import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";

import ListGroup from "./components/WelcomeUsers";
import ProtectedRoute from "./components/authentication/ProtectedRoute";
import About from "./components/About";
import LoginButton from "./components/authentication/Login";
import Logout from "./components/authentication/Logout";
function App() {
  let items = ["New York", "San Francisco", "Paris", "Berlin", "London"];
  const [selectedItem, setSelectedItem] = useState("");
  const handleSelectItem = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/button" element={<div />} />
          <Route path="/alert" element={<div />} />
          <Route path="/list-group" element={<div />} />
          <Route path="/login" element={<LoginButton />} />
          <Route path="/logout" element={<Logout />} />
          <Route
            path="/"
            element={
              <ListGroup items={items} onSelectItem={handleSelectItem} />
            }
          />
          <Route
            path="/about"
            element={<ProtectedRoute element={<About />} path={"/about"} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
