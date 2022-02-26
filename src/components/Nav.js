import Navbar from './Navbar'
import NAvpublic from './NAvpublic'
import {useState} from 'react'
const Nav = ({isAuthenticated,setIsAuthenticated}) => {
    
    setIsAuthenticated( localStorage.getItem("token"))
    return(<>
    {isAuthenticated?<Navbar setIsAuthenticated={setIsAuthenticated} />:<NAvpublic/>}
    

    </>)

}
 
export default Nav;