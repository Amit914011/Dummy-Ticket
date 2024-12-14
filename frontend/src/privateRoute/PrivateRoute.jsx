import React, { useState } from 'react';
import {Route, Routes} from 'react-router-dom';
import App from '../App';
import Hero from '../components/client/Hero';
import ContactUs from '../components/client/ContctUs';
import AboutUs from '../components/client/AboutUs';
import Sample from '../components/client/Sample';
import TermAndCondition from '../components/client/TermAndCondition';
import SiteMap from '../components/client/SiteMap';
import BlogSection from '../components/client/Blogs';
import BlogPage from '../components/client/BlogePage';
import Faqs from '../components/client/Faqs';
import B2B from '../components/client/B2B';
import CustomerDetails from '../components/client/CustomerDetails';
import MainAdmin from '../components/admin/MainAdmin';
import Ticket from '../components/admin/Ticket';

// Importing all components (ensure these imports exist)


export default function PrivateRoute() {

    const [data,setData]=useState()

  // Router configuration
  return(
    <>
    {/* Public routes */}
    <Routes>
    <Route index path='/' element={<Hero setData={setData} />} />
      <Route path="contactus" element={<ContactUs />} />
      <Route path="aboutus" element={<AboutUs />} />
      <Route path="sample" element={<Sample />} />
      <Route path="termandcondition" element={<TermAndCondition />} />
      <Route path="sitemap" element={<SiteMap />} />
      <Route path="blogs" element={<BlogSection />} />
      <Route path="blogpage/:id" element={<BlogPage />} />
      <Route path="faqs" element={<Faqs />} />
      <Route path="b2b" element={<B2B />} />
      <Route path="customerdetails" element={<CustomerDetails itemData={data} />} />



    {/* Admin routes */}
    <Route path="/admin" element={<MainAdmin/>}>
      <Route index element={<Ticket />} />
    </Route>

    </Routes>
  </>
  )
 
     
  

  
}
