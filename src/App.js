import './App.css';
import {useState} from 'react';
import  Axios from 'axios';

function App() {
  const  [name ,setName]= useState("");
  const  [age,setAge]= useState(0);
  const  [country ,setCountry]= useState("");
  const  [position ,setPosition]= useState("");
  const  [ctc ,setCtc]= useState(0);
  

const [employeeList, setEmployeeList] = useState([]);

  const  addEmployee = () =>{
    Axios.post('http://localhost:3001/create',{
      name:name,
       age:age,
        country:country,
         position:position,
          ctc:ctc
        }).then(()=>{
         setEmployeeList([...employeeList,
          {
          name:name,
          age:age,
          country:country,
          position:position,
          ctc:ctc,
          },
        ]);
        });
      };
  

  
const getEmployees = () => {
  Axios.get('http://localhost:3001/employees').then((response) => {
        setEmployeeList(response.data)
      });
};

  
  return (
      <div className="App">
      <div className="information">
      <label>Name:</label>
      <input type="text"
      onChange={(event)=>{
        setName(event.target.value);
      }}
       />
      <label>Age:</label>
      <input type="number"
      onChange={(event)=>{
        setAge(event.target.value);
      }}/>
      <label>Country:</label>
      <input type="text"
      onChange={(event)=>{
        setCountry(event.target.value);
      }}/>
      <label>Position:</label>
      <input type="text"onChange={(event)=>{
        setPosition(event.target.value);
      }}/>
      <label>Salary ($):</label>
      <input type="number"onChange={(event)=>{
        setCtc(event.target.value);
      }}/>
      <button onClick={addEmployee}>Add Employee</button>
      </div><br/>

      <div className='employees'>
    <button onClick={getEmployees}>Show Employee</button>
    
    {employeeList.map((val, key) => {
           return (
          <div className="employee">
            
              <h3>Name: {val.Name}</h3>
              <h3>Age: {val.Age}</h3>
              <h3>Country: {val.Country}</h3>
              <h3>Position: {val.Position}</h3>
              <h3>CTC:{val.CTC}</h3>
            </div>
            );
    } )}
    
    </div>
   </div>
  );
}
    



export default App;
