import React from 'react'
import { Link } from 'react-router-dom'

function AdminNavbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark  ">
    <div className="container">
      <Link to="/" className='text-decoration-none'> <a class="navbar-brand" href="#">
      Blogen
      </a></Link>
      <button
        class="navbar-toggler fs"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
          <Link to="/" className='text-decoration-none'>  <a class="nav-link active" aria-current="page" >
            Dashboard
            </a></Link>
          </li>
          <li class="nav-item">
          <Link to="/Posts" className='text-decoration-none'><a class="nav-link" >
             Posts
            </a></Link>
          </li>
          <li class="nav-item">
            <Link to="/Categories" className='text-decoration-none'><a class="nav-link" >
              Categories
            </a></Link>
          </li>
          <li class="nav-item  ">
            <Link to="/Users" className='text-decoration-none'>  <a class="nav-link " href="Users.html">
              Users
            </a></Link>
          </li>
        </ul>
        <ul class="navbar-nav ml ">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          ><i class="fa-solid fa-user mr-5"></i>
            Welcome Brad
          </a>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" ><i class="fa-solid fa-user mr-5"></i>
                Profile
              </a>
            </li>
            <li>
              <a class="dropdown-item" ><i class="fa-solid fa-gear mr-5"></i>
                  Settings
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="fa-solid fa-user-plus mr-5"></i>
           Logout
          </a>
        </li>
      </ul>
      </div>
    </div>
  </nav>
  )
}

export default AdminNavbar
