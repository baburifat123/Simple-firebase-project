import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineLogout } from "react-icons/ai";
import { FirebaseAuth } from '../Firebase/Context';
const Nav = () => {
  const auth = FirebaseAuth;
    return (
        <div className=' b'>
            <div className="navbar bg-slate-600">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link>Featuser</Link></li>
        <li><Link>Book</Link></li>
      </ul>
    </div>
   <h1 className='text-2xl font-bold ml-10 text-white'>Book Store</h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link to={'/'} className='text-xl text-white'>Home</Link></li>
    <li><Link className='text-xl text-white'>Book</Link></li>
    <li><Link to={'/booklist'} className='text-xl text-white'>Book List</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a  className="btn mr-10"><AiOutlineLogout className="text-4xl"></AiOutlineLogout></a>
  </div>
</div>
        </div>
    );
};

export default Nav;