import './App.css';
import Employee from './component/Employees';
import {useState} from 'react'

function App() {
  const showemployees=true
  const [Role,setRule] = useState();
  return (
    
    <div className="App">
      {showemployees ? (
        <>
          <input type='text' onChange={(e)=>{

            setRule(e.target.value);


          }}></input>
          
          <Employee name='abby' role='designer'/>
          <Employee name='alan' role='dev'/>
          <Employee name='jake' role={Role}/>
          <Employee name='lana' role=''/>
        </>
        ) : (<p> not found </p>)}
    </div>
  );
}

export default App;
