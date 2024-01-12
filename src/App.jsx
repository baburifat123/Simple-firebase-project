import { Route, Routes } from 'react-router-dom';
import './App.css';
import Logins from './Componens/Login/Logins';
import Registers from './Componens/Login/Registers';
import Home from './Componens/Home/Home';
import Nav from './Componens/Navbar/Nav';
import BookList from './Componens/BookList/BookList';
import BookDetels from './Componens/BookDetels/BookDetels';



function App() {

 
  return (
    <>
    <Nav></Nav>
      <Routes>
  
        <Route path='/registers' element={<Registers></Registers>}></Route>
        <Route path='/login' element={<Logins></Logins>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/booklist' element ={<BookList></BookList>}></Route>
        <Route path='/bok/:userId' element={<BookDetels />} />


      </Routes>
    </>
  );
}

export default App;
