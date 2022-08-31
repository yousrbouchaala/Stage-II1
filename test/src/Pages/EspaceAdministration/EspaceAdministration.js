import React from 'react'
import './styles.css'
import { useState } from 'react';
import axios from 'axios';

function EspaceAdministration()
  { const [nom , setNom ] = useState("");
    const [numero , setNumero] = useState("");
    const [titre , setTitre] = useState("");
    const [organisme , setOrganisme] = useState("");
    const [saved, setSup] = useState(false);
  
  const handleSubmit = (e) => {
    // set configurations
    const configuration = {
      method: "post",
      url: "http://localhost:3001/AffectSujet",
      data: {
          nom,
          numero,
          titre,
          organisme,
      },
    };
   axios(configuration)
      .then((_result) => {
        setSup(true);
      })
      .catch((error) => {
        error = new Error();
      });
 
    e.preventDefault();
   
    
  }
    return (
        <div >
            
          <div id='form-outer'>
            <form formId="user-profile" onSubmit={(e)=>handleSubmit(e)}  className='mx-auto mt-30'>
                
                            <h2>Affectation des sujets</h2>
                            
                <div>
                    <label ><span class="obligatoire">*</span> Nom de l'étudiant en autsuggestion</label><br/>
                    <input type="text"   required className='form-control' onChange={(e) => setNom(e.target.value)}/>
                </div>
                <div>
                    <label ><span class="obligatoire">*</span> Numéro de sujet</label><br/>
                    <input type="text"   required className='form-control' onChange={(e) => setNumero(e.target.value)}/>
                </div>
                <div>
                    <label ><span class="obligatoire">*</span> Titre de sujet</label><br/>
                    <input type="text"   required className='form-control' onChange={(e) => setTitre(e.target.value)}/>
                </div>
                <div>
                    <label ><span class="obligatoire">*</span> Organisme d'accueil</label><br/>
                    <input type="text"   required className='form-control' onChange={(e) => setOrganisme(e.target.value)} />
                </div>
                
               
                    <button type='submit' className='btn btn-success btn-block mt-3' m id='submit' onClick={(e) => handleSubmit(e)} > Valider </button>

                        {/* display success message */}
        {saved ? (
          <p className="text-success">enregsitré !</p>
        ) : (
          <p className="text-danger">non enregistré ! </p>
        )} 
            </form>
          </div>
            <br/> 
            <div>
        <div id='form-outer'>
            <form action='' className='mx-auto mt-30' method='post'>
                <div>
                    <h2>
                        Affectation des superviseurs
                    </h2>
                    </div> 
            <div>
                <label htmlFor=''> <span class="obligatoire">*</span> Nom de l'étudiant en autosuggestion</label>
                <input type="text" className='form-control'/> 
            </div>
            <div>
                <label htmlFor=''> <span class="obligatoire">* </span>Nom du superviseur en autosuggestion</label>
                <input type="text" className='form-control'/> 
            
                
            </div>
            
           
            
            <button className='btn btn-success btn-block mt-3' m id='submit'>
                Valider
            </button>
            
            
                    </form>
                    
                </div>
                <br/> 
      </div>
    
        
            
        <div id='form-outer'>
            <form action='' className='mx-auto mt-30' method='post'>
                <div>
                    <h2>
                        Affectation des jurys
                    </h2>
                    </div> 
            <div>
                <label htmlFor=''> <span class="obligatoire">*</span> Nom de l'étudiant en autosuggestion</label>
                <input type="text" className='form-control'/> 
            </div>
            <div>
                <label htmlFor=''> <span class="obligatoire">* </span>Nom de Président en autosuggestion</label>
                <input type="text" className='form-control'/> 
            
                <label htmlFor=''> <span class="obligatoire">* </span>  Nom Membre 1 en autosuggestion</label>
                <input type="text" className='form-control'/> 
            </div>
            <div>
                <label htmlFor=''> <span class="obligatoire">* </span> Nom Membre 2 en autosuggestion</label>
                <input type="text" className='form-control'/> 
            
                <label htmlFor=''> <span class="obligatoire">* </span> calendrier pour choisir date soutenance </label>
                <input type="date" className='form-control'/> 
            </div>
            <div>
                <label htmlFor=''> <span class="obligatoire">* </span> Heure soutenance </label>
                <input type="time" className='form-control'/> 
            </div>
            <button className='btn btn-success btn-block mt-3' m id='submit'>
                Valider
            </button>
            
            
            </form>
        </div>
      </div>
    )
  }
  export default EspaceAdministration