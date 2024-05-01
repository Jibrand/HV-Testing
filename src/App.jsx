import React,{useEffect,useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/index";
import Login from "./Pages/Login";
import Index from "./Pages/Dashboard";
import Allblogs from "./Pages/Blogs/Allblogs";
import SingleBlog from "./Pages/Blogs/SingleBlog";
import Reviews from './Pages/Dashboard/Reviews';
import Spotify from './Pages/Dashboard/Spotify';
import Youtube from './Pages/Dashboard/Youtube';
import Team from './Pages/Dashboard/Team';
import Blog from './Pages/Dashboard/Blogs';
import NewBlog from './Pages/Dashboard/NewBlog';
import UpdateBlog from './Pages/Dashboard/UpdateBlog';
import Forget1 from './Forget1';
import Forget2 from "./Forget2";
import Contact from "./Pages/Contact";
import PrivacyAndPolicy from "./Pages/PrivacyAndPolicy";
import TC from "./Pages/T&C";
import POC from "./Pages/POC";
import RSApoc from "./Pages/RSApoc";
import POCBOT from './Pages/POCBOT' 
import HealthCheck from "./Pages/HealthCheck";

import HotjarTracking from "./HotJarTracking";
import ReactGA from "react-ga";

// Lazy loading components
 

ReactGA.initialize("G-87FQXL0732");

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [window.location.pathname]);

  return (
    <>
      <HotjarTracking />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<Index />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/allblogs" element={<Allblogs />} />
          <Route path="/Reviews" element={<Reviews />} />
          <Route path="/Spotify" element={<Spotify />} />
          <Route path="/Vodcast" element={<Youtube />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/NewBlog" element={<NewBlog />} />
          <Route path="/UpdateBlog/:id" element={<UpdateBlog />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/ResetPasswordemail" element={<Forget1 />} />
          <Route path="/reset-new-password/:id/:token" element={<Forget2 />} />
          <Route path="/PrivacyAndPolicy" element={<PrivacyAndPolicy />} />
          <Route path="/T&C" element={<TC />} />
          <Route path="/poc" element={<POC />} />
          <Route path="/rsapoc" element={<RSApoc />} />
          <Route path="/bot" element={<POCBOT />} />
          <Route path="/health" element={<HealthCheck />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
