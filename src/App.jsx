


import { Route, Routes } from 'react-router';
import About from './About';
import './App.css'
import Home from './Home';
import Login from './Login';
import Navbar from './Navbar';
import PageNotFound from './PageNotFound';
import College from './College';
import Student from './Student';
import Department from './Department';
function App() {

  return (
    <div >
      

      <Routes>
      <Route element={<Navbar/>}>
      <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
      
      
      </Route>

        

        <Route path='/college' element={<College/>} >
        <Route path='student' element={<Student/>}/>
        <Route path='department' element={<Department/>}/>
        </Route>

        <Route path='/*' element={<PageNotFound/>} />
      </Routes>
     
    
      

    </div>
  )


}

export default App;

