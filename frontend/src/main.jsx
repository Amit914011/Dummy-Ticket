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
import Login from './components/client/Login.jsx'
import AdminLayout from './AdminLayout.jsx'
import DashBoard from './components/admin/DashBoard.jsx'
import B2BAdmin from './components/admin/B2BAdmin.jsx'
import B2CAdmin from './components/admin/B2CAdmin.jsx'



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
    <Route path='/login' element={<Login/>}/>

    </Route>
    <Route path='/admin' element={<AdminLayout/>}>
    <Route path='' element={<DashBoard/>}/>
    <Route path='/admin/b2badmin' element={<B2BAdmin/>}/>
    <Route path='/admin/b2cadmin' element={<B2CAdmin/>}/>
    </Route>
   </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
