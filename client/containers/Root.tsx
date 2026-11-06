import { Outlet } from 'react-router-dom'

import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

const Root = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Root
