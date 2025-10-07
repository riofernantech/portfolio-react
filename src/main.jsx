import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router";
import App from './App.jsx'
import Home from './Main/Home/Home.jsx'
import Project from './Main/Project/Project.jsx'
import Blog from './Main/Blog/Blog.jsx'
import Contact from './Main/Contact/Contact.jsx'
import NotFound from './Main/NotFound/NotFound.jsx';

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
