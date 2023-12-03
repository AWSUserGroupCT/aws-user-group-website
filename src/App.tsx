import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import ListGroup from "./components/WelcomeUsers";
import ProtectedRoute from "./components/authentication/ProtectedRoute";
import About from "./components/About";
import Profile from "./components/Profile";
import LoginButton from "./components/authentication/Login";
import Logout from "./components/authentication/Logout";
import Menu from "./components/core/Menu";

function App() {
  let items = ["New York", "San Francisco", "Paris", "Berlin", "London"];
  const [selectedItem, setSelectedItem] = useState<string>(""); // Add type declaration for useState

  const handleSelectItem = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <Router>
        <Menu />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginButton />} />
          <Route path="/logout" element={<Logout />} />
          <Route
            path="/"
            element={
              <ListGroup items={items} onSelectItem={handleSelectItem} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
