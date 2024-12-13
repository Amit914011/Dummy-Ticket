import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import ContactUs from './components/client/ContctUs.jsx'
import Hero from './components/client/Hero.jsx'
import AboutUs from './components/client/AboutUs.jsx'
import Sample from './components/client/Sample.jsx'
import TermAndCondition from './components/client/TermAndCondition.jsx'
import SiteMap from './components/client/SiteMap.jsx'
import Blogs from './components/client/Blogs.jsx'
import BlogPage from './components/client/BlogePage.jsx'
import Faqs from './components/client/Faqs.jsx'
import B2B from './components/client/B2B.jsx'
import CustomerDetails from './components/client/CustomerDetails.jsx'
import MainAdmin from './components/admin/MainAdmin.jsx'




let router=createBrowserRouter(
  createRoutesFromElements(
   <>
    <Route path='/' element={<App/>}>
    <Route path='' element={<Hero/>}/>
    <Route path='/contactus' element={<ContactUs/>}/>
    <Route path='/aboutus' element={<AboutUs/>}/>
    <Route path='/sample' element={<Sample/>}/>
    <Route path='/termandcondition' element={<TermAndCondition/>}/>
    <Route path='/sitemap' element={<SiteMap/>} />
    <Route path='/blogs' element={<Blogs/>}/>
    <Route path='/blogpage/:id' element={<BlogPage/>}/>
    <Route path='faqs' element={<Faqs/>}/>
    <Route path='/b2b' element={<B2B/>}/>
    <Route path='/customerdetails' element={<CustomerDetails/>}/>

    </Route>
    <Route path='/admin' element={<MainAdmin/>}>

    </Route>
    
   </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
