import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import BlogDetails from './pages/BlogDetails'
import BranchDetails from './pages/BranchDetails'
import Branches from './pages/Branches'
import Category from './pages/Category'
import NotFound from './pages/NotFound'
import './App.css'
import MainLayout from './layouts/MainLayout'


function App() {

  return (
     <BrowserRouter>
      <Routes>
          <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />


          <Route path="/categories/:slug" element={<Category />} />

          <Route path="/branches" element={<Branches />} />
          <Route path="/branches/:slug" element={<BranchDetails />} />
           </Route>
          <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
