import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import TodoContainer from "./components/TodoContainer"
import About from './pages/about';
import NotFound from './pages/NotFound';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<TodoContainer />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='*' element={<NotFound />}></Route>  
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);