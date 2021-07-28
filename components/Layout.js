
import Footer from './Footer'
import Navbar from './Navbar/Navbar'

const Layout = ({children}) => {
  return (
    <div className="bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen text-white font-patrick">
      <Navbar />
        {children}
      <Footer />
     </div> 
  )
}

export default Layout
