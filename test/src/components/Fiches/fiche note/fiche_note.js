import React from 'react'
import { Link } from 'react-router-dom'



export default function Fiche()
  {
    return (
      <div>
        <div id='form-outer'>
                <h3>fiche note encadrant de l entreprise</h3>
                <br/> <br/> 
        <table className="table">
            <tr>
                <th>critére
                </th>
                <th>TM
                </th><th>M
                </th><th>M
                </th><th>AB
                </th><th>B
                </th><th>TB
                </th><th>NOTE
                </th></tr>

<tr>
    <td>Assiduité</td>
    <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td>
    <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td> <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td> <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td> <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td> <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td>
    <td>
    <form>
            <input type="number"  id='inpuuut'/>
        </form>
    </td>


</tr>
<tr>
<td>Integration</td>
    <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td>
    <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td> <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td> <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td> <td> <form>
            <input type="checkbox"/>
        </form>
    </td>
    <td> <form>
            <input type="checkbox"/>
        </form>
    </td>
    <td >
    <form>
            <input type="text" id='inpuuut' />
        </form>
    </td>

</tr>
<tr>
<td>Facilité</td>
    <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td>
    <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td> <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td> <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td> <td> <form> <input type="checkbox"/>
        </form>
    </td><td> <form>
            <input type="checkbox"  />
        </form>
    </td>
    <td>
    <form>
            <input type="number" id='inpuuut' />
        </form>
    </td>
</tr>
<tr>
<td>Niveau</td>
    <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td>
    <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td> <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td> <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td> <td> <form> <input type="checkbox"/>
        </form>
    </td><td> <form>
            <input type="checkbox"/>
        </form>
    </td>
    <td>
    <form>
            <input type="number" id='inpuuut'/>
        </form>
    </td>
</tr>
<tr>
<td>Compétences</td>
    <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td>
    <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td> <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td> <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td> <td> <form> <input type="checkbox"/>
        </form>
    </td><td> <form>
            <input type="checkbox"/>
        </form>
    </td>
    <td><form>
            <input type="number" id='inpuuut' />
        </form>
    </td>
</tr>
<tr>
<td>Conception</td>
    <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td>
    <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td> <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td> <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td> <td> <form> <input type="checkbox"/>
        </form>
    </td><td> <form>
            <input type="checkbox"/>
        </form>
    </td>
    <td><form>
            <input type="number" id='inpuuut' />
        </form>
    </td>
</tr>
<tr>
<td>Réalisation</td>
    <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td>
    <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td> <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td> <td>
        <form>
            <input type="checkbox"/></form>
    </td> <td> <form> <input type="checkbox"/>
        </form>
    </td><td> <form>
            <input type="checkbox"/>
        </form>
    </td>
    <td><form>
            <input type="number"  id='inpuuut'/>
        </form>
    </td>
</tr>

<tr>
    <td colSpan={7} className="td">note finale</td>
    <td><form>
            <input type="number" id='inpuuut' />
        </form>
    </td>
</tr>
        </table>
         <Link to="/Espace_jurys"> 
        <button  className='btn btn-success btn-block mt-3' m id='submit'>
                Valider
                    </button>
                    </Link> 
        <pre>
             En cochant sur TM  --la note est de<span class="obligatoire"/></pre>
      </div>
      </div>
    )
  }