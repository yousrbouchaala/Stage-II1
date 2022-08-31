import React from 'react';
import { Link } from 'react-router-dom';

 

export default function Jury() {
  
    return (
      <div>
        <div id='form-outer'>
            
       <h3>Espace Jury </h3> <br/>
       
        <h4> Jury Date jj/mm/aaaa</h4>  
        <table >
         <tr>
         <th>
          N°</th> 
          <th>Opt.</th>
          <th>Eléve-ingenieur</th>
          <th>N1 Encadrant</th>
          <th>N2 Rapporteur</th>
          <th>N3 Superviseur</th>
         <th>N4 Qualité</th> 
         <th>N5 Question</th>
         <th>Moyenne</th>
         <th>Publiable</th>
         </tr> 
         <tr>
          <td><form>
                <input type="text" size ="5"/>
              </form>
            </td><form>
                <input type="text" size ="5"/>
              </form>
            <td><form>
                <input type="text" size ="5"/>
              </form>
            </td>  
            <td><form>
                <input type="text"size ="5"/>
              </form>
            </td>
            <td> 
<form>
                  <div id="boutton">
                    <Link to="/pages/fiche%20note/fiche" >
  <button  className='btn btn-success btn-block mt-33' m id='submit'>
                Note
                      </button>
                      </Link>
            </div></form> </td>
            <td> <form>
                <input type="text" size ="5"   placeholder='*' />
              </form>   </td>
            <td>   <form>
                <input type="text" size ="5" placeholder='*'/>
              </form> </td>
            <td>   <form>
                <input type="text" size ="5" placeholder='*'/>
              </form> </td>
            <td>   <form>
                <input type="text" size ="5"placeholder='*'/>
              </form></td>
            <td>
              <form>
                <input type="text" size ="5"/>
              </form>
            </td>
            <td>
              <form>
                <input type="checkbox"  size ="5"   />
            </form></td> 
            </tr></table> 
            
             <span class="obligatoire">* champs obligatoires </span>
        
          <form>
            <Link to="/procesverbale"  >
            <button  className='btn btn-success btn-block mt-3' m  id='submit'>
                Valider
              </button> 
              </Link> 
</form> Moyenne =N1+N2+N3+N4+N5/5
        </div>
        </div>
      
    )
  }