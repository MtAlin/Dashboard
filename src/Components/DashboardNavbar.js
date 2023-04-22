import React from 'react'

function DashboardNavbar({title,color,icon}) {
  return (
    <header className={color} id='mainHeader'>
    <div className="container py-2 text-white ">
        <div className="d-inline-flex align-items-center">
        <h3><i className={icon}></i></h3>
      <a class="navbar-brand px-2" ><h2>
       {title}
      </h2>
      </a>
        </div>
    </div>
</header>
  )
}

export default DashboardNavbar