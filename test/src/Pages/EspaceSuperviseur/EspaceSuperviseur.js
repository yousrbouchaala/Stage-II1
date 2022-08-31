import React from 'react'

import { Link  } from 'react-router-dom';    



import './styles.css'


const EspaceSuperviseur = () => {

  return (
      <div>
     <p></p>
      
        <div id='form-outer'> 
<table className='table table-sm'>
  <thead>
    <th>Nom &amp; Prénom de l'étudiant supervisé  </th>
    <th>Visite 1</th>
    <th>Visite2</th>
    <th>Note</th>
  </thead>
  
        
  <tbody>
  <tr>
    <td>
  
    </td>
    <td>  <Link to="/Espace_superviseur/Fiche1" target="_blank">
              
      <button >
        Fiche1 
      </button>  
            </Link>
            </td>
        
    <td> < Link to="/Espace_superviseur/Fiche2" target="_blank">
              
      <button >
        Fiche2 
      </button>  
            </Link> </td>
    <td>< Link to="/Espace_superviseur/Note" target="_blank">
              
      <button >
        Note 
      </button>  
            </Link></td>
  </tr>
  <tr>
    <td> </td>
    <td> <button onClick="test.js">Fiche1</button> </td>
    <td><button onClick="test.js">Fiche2</button></td>
    <td><button onClick="test.js">Note</button></td>
  </tr>
  </tbody>
  
</table>
<div id="test"> </div>
      </div>
      </div>


    ) 
  
} 
export default EspaceSuperviseur