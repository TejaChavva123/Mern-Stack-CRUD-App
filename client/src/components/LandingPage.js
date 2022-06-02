import React,{useState,useEffect} from 'react';
import axios from 'axios';

function LandingPage() {
  const [person,setperson] = useState([]);
  const onDelete =(id)=> {
    axios.delete(`http://localhost:5000/crudapi/delete/${id}`).then((res) => {
      console.log("deleted");
      // alert("Deleted successfully");
    });
  };
  useEffect(()=>{
    axios.get('http://localhost:5000/crudapi').then(res=>{
      setperson(res.data.persons)
    }).catch(err=>{
      console.log("Error Obtained");
    })
  },[person]);
  return (
    <div>
      <h1 className='heading'>Management System</h1>
      <button className='btn btn-success'><a href="/add">Add New Detail</a></button>
    <div className="App">
      <table className="table table-hover">
        <thead className="table-dark">
          <tr>
          <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Job</th>
            <th scope="col">Company</th>
            <th scope="col">Salary</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
             person.map((p,index)=>
             <tr key={index}>
               <th scope="row">{index}</th>
               <td>{p.name}</td>
               <td>{p.job}</td>
               <td>{p.company}</td>
               <td>{p.salary}</td>
               <td className='action'>
                 <a className='btn btn-warning' href={`/update/${p._id}`}>
                   <i className='fas fa-edit'></i>&nbsp;Edit
                 </a>
                 <a className='btn btn-danger' hred="#" onClick={()=>onDelete(p._id)}>
                   <i className='fas fa-trash'></i>&nbsp;Delete
                 </a>
               </td>
             </tr>)
          }
        </tbody>
        
      </table>
    </div>
    </div>
  );
}

export default LandingPage;
