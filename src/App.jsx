import { useEffect, useState } from "react";
import Countries from "./json/countries.json";
import Nigeria_states from "./json/nigerstate.json";

function App() {

const [country, setCountry] = useState([]);
const [states, setStates] = useState([]);
const [local, setLocal] = useState([]);

const nigerlga = Nigeria_states;

useEffect(() => {
  console.log(Countries)
  setCountry(Countries)
}, []) 

const showStates = (ev) => {
  let[sel_states] = country.filter((f) => f.name === ev.currentTarget.value);
  setStates(sel_states.states)
}


const showLga = (ev) => {
  let[sel_lga] = nigerlga.filter((f) => f.name === ev.currentTarget.value);
  setLocal(sel_lga.locals)
}


  return (
    <div className="App">

              {/* for country */}

     <label htmlFor="">Countries</label>
     <select onChange={(ev) => showStates (ev)} >
       {country.map((item, index) => (
         <option key={index} value={item.name}> {item.name} </option>
       
         ))}
       
     </select>
     <br /> <br />

            {/* for states */}

     <label htmlFor="">States</label>
     <select onChange={(ev) => showLga(ev)}>

       {states.map((item, index) => (

         <option key={index} value={item.name}> {item.name}</option>
       
         ))}
       
     </select>

     <br /> <br />

  {/* for nigeriaLocalGovt */}

  <label htmlFor="">LGA</label>

  <select>

{local.map((item, index) => ( 

  <option key={index} value={item.name}> {item.name} {"LGA"} </option>

  ))}

</select>
    </div>
  );
}

export default App;
