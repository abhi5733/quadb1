import React from 'react'
import {Route,Routes} from "react-router-dom"
import Summary from '../Pages/Summary'
import Main from '../Pages/Main'
const AllRoutes = () => {
  return (
   
    <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/summary" element={<Summary/>} />
    </Routes>
    

  )
}

export default AllRoutes
