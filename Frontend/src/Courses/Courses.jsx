import React from 'react';
import Navbar from '../componenets/Navbar';
import Course from '../componenets/Course';
import Footer from '../componenets/Footer1';


function Courses() {
    
  return (
    <>
    <Navbar/>

    <div className='min-h-screen'>
    <Course/>
    </div>

    <Footer/>
    </>
  );
}

export default Courses;
