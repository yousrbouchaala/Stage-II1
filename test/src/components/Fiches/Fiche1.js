import React from "react"; 
import './Fiche.css'
function Fiche1 () {
    return (<div>

            <h3> Fiche Visite 1 </h3>
            
            <div id="form-outer">
                <h5> Stagiaire : </h5> <p ></p>
                <h5> Superviseur :</h5> <p ></p>
                <h5> N° sujet :</h5> <p ></p>
                <h5> Sujet: </h5> <p ></p>
            
        </div> 
        <p></p>
         <div id="form-outer">
                <form>

                    <fieldset>
                        <legend>   Conception </legend>

                        <div className="row">
                            <div>
                                <label for="Situation" className="col-sm-2 col-form-label col-form-label-lg"> <h6> <span class="obligatoire">*</span> Situation</h6> </label>
                                    
                            </div>

                            <div className="col-sm-10">
                                <input type="text" id="Situation" className="form-control form-control-lg" />
                            </div>

                        </div>

                        <div className="row">
                            <div>  <label for="methode" className="col-sm-2 col-form-label col-form-label-lg"> <h6> <span class="obligatoire">*</span> Méthode</h6></label>
                            </div>
                            <div className="col-sm-10">
                                <input type="text" id="methode" className="form-control form-control-lg" />
                            </div>
                        </div>
                        <div className="row">
                            <div>  <label for="rapport" class="col-sm-2 col-form-label col-form-label-lg" ><h6> <span class="obligatoire">*</span> Rapport </h6></label>
                            </div>
                            <div className="col-sm-10">
                                <input type="text" id="rapport" className="form-control form-control-lg" />
                            </div>
                        </div><div className="row">
                            <div>  <label for="remarque" class="col-sm-2 col-form-label col-form-label-lg" ><h6> <span class="obligatoire">*</span> Remarques </h6></label>
                            </div><div className="col-sm-10">
                                <input type="text" id="remarque" className="form-control form-control-lg" />
                            </div>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>   Réalisation </legend>
                        <div className="row">
                            <div>  <label for="Situation" className="col-sm-2 col-form-label col-form-label-lg"> <h6> <span class="obligatoire">*</span> Situation</h6></label>
                            </div>
                            <div className="col-sm-10">
                                <input type="text" id="Situation" className="form-control form-control-lg" />
                            </div>
                        </div>
                        <div className="row">
                            <div>  <label for="methode" className="col-sm-2 col-form-label col-form-label-lg"><h6> <span class="obligatoire">*</span> Matériel/systeme</h6></label>
                            </div>
                            <div className="col-sm-10">
                                <input type="text" id="methode" className="form-control form-control-lg" />
                            </div>
                        </div>
                        <div className="row">
                            <div>  <label for="rapport" className="col-sm-2 col-form-label col-form-label-lg"><h6> <span class="obligatoire">*</span> Langage </h6></label>
                            </div>
                            <div className="col-sm-10">
                                <input type="text" id="rapport" className="form-control form-control-lg" />
                            </div>
                        </div>
                        <div className="row">
                            <div>  <label for="remarque" className="col-sm-2 col-form-label col-form-label-lg"><h6> <span class="obligatoire">*</span> Remarques </h6></label>
                            </div>
                            <div className="col-sm-10">
                                <input type="text" id="remarque" className="form-control form-control-lg" />
                            </div>
                        
                        </div>
                       
        
        
                       
                       
                    </fieldset>
        
                    <fieldset>
                        <legend>   Divers </legend>
            
                        <div className="row">
                            <div>  <label for="Situation" className="col-sm-2 col-form-label col-form-label-lg"><h6> <span class="obligatoire">*</span> Situation</h6></label>
                            </div>
                            <div className="col-sm-10">
                                <input type="text" id="Situation" class="form-control form-control-lg" />
                            </div>
                        </div>
                        <div className="row">
                            <div>  <label for="methode" class="col-sm-2 col-form-label col-form-label-lg"><h6> <span class="obligatoire">*</span> Méthode</h6></label>
                            </div>
                            <div className="col-sm-10">
                                <input type="text" id="methode" className="form-control form-control-lg" />
                            </div>
                        </div>
                        <div className="row">
                            <div>  <label for="rapport" class="col-sm-2 col-form-label col-form-label-lg"><h6> <span class="obligatoire">*</span> Rapport </h6></label>
                            </div>
                            <div class="col-sm-10">
                                <input type="text" id="rapport" className="form-control form-control-lg" />
                            </div>
                        </div>
                        <div className="row">
                            <div>  <label for="remarque" class="col-sm-2 col-form-label col-form-label-lg"><h6> <span class="obligatoire">*</span> Remarques </h6></label>
                            </div>
                            <div className="col-sm-10">
                                <input type="text" id="remarque" class="form-control form-control-lg" />
                            </div>
                        </div>
                     
               
              
              
                    </fieldset>
             
             
                    <div className="text-center">
                        <input type="submit" id="submit" value="Valider" class="btn1" />
                </div>
                 <h6><span class="obligatoire">* Champs obligatoire</span></h6>
            
           
                </form>
            </div>
            
          
        </div> )
    
        ;
 } 
    

export default Fiche1 ;