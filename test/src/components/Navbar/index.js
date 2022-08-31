import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
 
  return (
    <>
      <Nav>
        <NavMenu>
           <NavLink to="/" activeStyle> 
          Accueil 
          </NavLink>
          
        <NavLink to="/Espace_administration/authentification" activeStyle >
            Espace Administration 
          </NavLink>
          <NavLink to="/Espace_superviseur/authentification" activeStyle>
           Espace Superviseur 
          </NavLink>
            
          
          <NavLink to="/Espace_jurys" activeStyle >
            Espace Jurys 
          </NavLink>
        
         
          
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;