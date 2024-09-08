import "../src/index.css";
import Employee from "./component/Employees";
import {useState} from 'react'

function App() {
  const showemployees = true;
  
  const [employees,setEmployees] = useState([
    
      {
        name: "alan",
        role: "dev",
        img: "https://images.pexels.com/photos/2505026/pexels-photo-2505026.jpeg?",
      },
      {
        name: "carl",
        role: "dev",
        img: "https://images.pexels.com/photos/2505026/pexels-photo-2505026.jpeg?",
      },
      {
        name: "nowa",
        role: "dev",
        img: "https://images.pexels.com/photos/2505026/pexels-photo-2505026.jpeg?",
      },
    ]);
  return (
    <div className="App">
      {showemployees ? (
        <>
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              return (
                <Employee
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p> not found </p>
      )}
    </div>
  );
}

export default App;
