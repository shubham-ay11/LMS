

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';         
import Blog from './component/Blog';        
import About from './component/About';       
import Login from './component/Login';      
import SignUp from './component/SignUp';      
import Courses from './component/Courses';
// import LiveMasterclass from './component/LiveMasterclass';
import CourseDetailsPage from './component/CourseDetailsPage';
import BlogDetail from './component/BlogDetail';
import Disclaimers from './component/Disclaimers'
import PrivacyPolicy from './component/PrivacyPolicy'
import Terms from './component/Terms'

function App() {
  return (
    <Router>

      <div className=" ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/Courses" element={<Courses />} />
          <Route path="/course-details/:id" element={<CourseDetailsPage />} />
          {/* <Route path="/LiveMasterclass" element={<LiveMasterclass />} /> */}
          <Route path="/about us" element={<About />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} /> {/* Dynamic route for blog details */}
         
          <Route path="/login" element={<Login />} />
          
          <Route path="/signup" element={<SignUp />} />
          <Route path="/disclaimers" element={<Disclaimers />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />
          <Route path="/Terms" element={<Terms/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



// import React from 'react'

// function App() {
//   return (
//     <div>
//       dddddddddddddddd
//     </div>
//   )
// }

// export default App











