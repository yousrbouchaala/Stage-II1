import React from "react"; 
import './note.css'

function Note () {
    return (<div>

            <h3> Fiche Note </h3>
            
            <div id="form-outer">
                <h5> Stagiaire : </h5> <p ></p>
                <h5> Superviseur :</h5> <p ></p>
                <h5> N° sujet :</h5> <p ></p>
                <h5> Sujet: </h5> <p ></p>
            
        </div> 
        <p></p>
        <form>
        <div id="form-outer">
        <table className="table" >
            <tr> 
                        <td>
                            <span class="obligatoire">*</span>
                    Assiduité et sérieux 
                    
                </td>
                <td>
                    <input type="number" id="inpuuut" ></input> <h6> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  /5</h6>
                    
                </td>
            </tr>
            <tr> 
                        <td>
                            <span class="obligatoire">*</span>
                    Conception et adéquation de la solution 
                    
                </td>
                <td>
                    <input type="number" id="inpuuut" ></input> <h6> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  /5</h6>
                    
                </td>
            </tr>
            <tr> 
                        <td>
                    <span class="obligatoire">*</span>
                    Rapport et respect des délais
                    
                </td>
                <td>
                            <input type="number" id="inpuuut" >
                            </input> <h6> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  /5</h6>
                    
                </td>
            </tr>
            <tr> 
                        <td>
                            <span class="obligatoire">*</span>
                    Réalisation
                    
                </td>
                <td>
                    <input type="number" id="inpuuut" ></input> <h6> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  /5</h6>
                    
                </td>
            </tr> 
            <tr> 
                        <td>
                            <span class="obligatoire">*</span>
                    Note finale 
                    
                </td>
                <td>
                    <input type="number" id="inpuuut" ></input> <h6> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  /20</h6>
                    
                </td>
            </tr>
            </table> 
            <p></p>
            <p></p>
         <label for='justification'> <h4> justification de la note  </h4>
            
            </label>
            <p>
                <input type="text" value='' className="form-control form-control-lg" ></input>
                </p>
                
            

             <div className="text-center">
                        <input type="submit" id="submit" value="Valider" class="btn1" />
                </div>
                
            <h6><span class="obligatoire">* Champs obligatoire</span></h6>
          </div>      
        
        </form>
        
        </div>

 ) } 
export default Note