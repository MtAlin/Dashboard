import React from 'react'
import DashboardNavbar from './DashboardNavbar'
import Modal from './Modal'
import Table from './Table'
function Blogen({Navlnk}) {
  return (
    <div>
       <DashboardNavbar title={Navlnk.dashboard} color={Navlnk.primary} icon={Navlnk.gear}/>
       <Modal/>
       <Table/>
    </div>
  )
}

export default Blogen