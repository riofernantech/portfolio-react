import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router";
import App from './App.jsx'
import Home from './Pages/Home/Home.jsx'
import Project from './Pages/Project/Project.jsx'
import Blog from './Pages/Blog/Blog.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import NotFound from './Pages/NotFound/NotFound.jsx';

import './assets/style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home/>}/>
              <Route path="project" element={<Project/>}/>
              <Route path="blog" element={<Blog/>}/>
              <Route path="contact" element={<Contact/>}/>
              <Route path="/*" element={<NotFound/>}/>
            </Route>
          </Routes>
      </BrowserRouter>
  </StrictMode>,
)
