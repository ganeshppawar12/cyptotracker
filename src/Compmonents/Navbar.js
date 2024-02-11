import React, { useState } from "react";
import './Navbar.css'
import { MenuItem, Select } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import { CryptoState } from "../CryptoContext";
import MenuIcon from '@mui/icons-material/Menu';

import CloseIcon from '@mui/icons-material/Close';






const Navbar = ({setSearch, setCurrency,currency})=>{
    const history = useNavigate();
  const [toggel, setToggel] = useState(false)
   
  // const currency = CryptoState()
  // console.log(CryptoState)
    return (
        <>
        <div className="NavbarComtainer">
            <div className="NavBarLogo">
                <p onClick={()=> history('/')}>crpto</p>
            </div>

            <div className="navInput">
              <input type="text" placeholder="Search..." onChange={(e)=> setSearch(e.target.value)}></input>
            </div>
            <div className={toggel ? "NavbarOption2" : "NavbarOption"}>
           
                <ul>

                    <li>Home</li>
                    <li>About As</li>

                <li>
                {/* <InputLabel id="demo-simple-select-label">INR</InputLabel> */}
              <Select 
              variant="outlined"
              style={{
                width:100,
                height:30,
               backgroundColor:"#0039a6",
                color:'#F4BB58',
                
               


              }}
              value={currency} 
              onChange={(e)=> setCurrency(e.target.value)}
              >
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"INR"}>INR</MenuItem>

              </Select>
              </li>
              </ul>
            </div>
            <div className="hamburger" onClick={()=>setToggel(!toggel)}>
              {toggel ? <CloseIcon></CloseIcon> : <MenuIcon></MenuIcon>}
            </div>
        </div>
        </>
    )
}

export default Navbar;