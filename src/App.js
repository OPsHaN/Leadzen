import './App.css';
import React from 'react';
import Users from "./Users/users";
import Userdetails from "./Users/userdetails"
import { BrowserRouter , Routes , Route } from "react-router-dom";
function App() {
  return (
<>
<div className="container-fluid">
<BrowserRouter>
<Routes>
          <Route path="/" element={<Users/>}/>
          <Route path="/details/:id" element={<Userdetails/>}/>
</Routes>
</BrowserRouter>
</div>

</>
  );
}

export default App;
