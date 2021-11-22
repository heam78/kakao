import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Friends from "./routes/Friends";
import Chats from "./routes/Chats";
import Find from "./routes/Find";
import More from "./routes/More";
import Chat from "./routes/Chating";
import Profile from "./routes/Profile";

function App() {
  return (
    <BrowserRouter basename={process.heam78.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Friends />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/find" element={<Find />} />
        <Route path="/more" element={<More />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
