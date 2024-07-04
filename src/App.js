import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import Courses from './components/Courses';
import Gamified from './components/Gamified';
import Gesture from './components/Gesture';
import Questions from './components/Questions';

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/gamified" element={<Gamified />} />
      <Route path="/gesture" element={<Gesture />} />
      <Route path="/questions" element={<Questions />} />
    </Routes>
   </Router>
  );
}

export default App;