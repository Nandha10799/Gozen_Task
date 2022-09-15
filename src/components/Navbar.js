import React from 'react';
import '../App.css';
import "bootstrap/dist/css/bootstrap.css";

const Navbar = ({setToken}) => {

  const logOutHandler = () => {
    setToken('');
    localStorage.clear();
  };
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-12 p-0'>
          <div className='head_navbar'>
            <div className='container text-center'>
              <div className='row'>
                <h1 style={{fontSize:'30px',fontWeight:'bold'}}>Online Shopping App</h1>
                <button className='btn btn-secondary ml-auto' onClick={logOutHandler}>LogOut</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;