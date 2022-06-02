import React,{useState,useEffect} from 'react';
import axios from 'axios'

function Add() {
    const [detail,setDetail] = useState({});
    const changeHandler = (e)=>{
        e.preventDefault();
        const {name,value} = e.target;
        setDetail({...detail,[name]:value})
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        const {name,job,company,salary} = detail;
        if (name&&job&&company&&salary){
            const data={
                name:name,
                job:job,
                company:company,
                salary:salary
            }
            axios.post("http://localhost:5000/crudapi/add",data).then(res=>{
                if (res.data.success){
                    alert("Data Added Successfully");
                    document.getElementById("name").value = ""
                    document.getElementById("job").value = ""
                    document.getElementById("company").value = ""
                    document.getElementById("salary").value = ""
                }
            })

        }
        else{
            alert("Please Enter all the Fields");
        }
        
    }
  return (
    <div className='add'>
        <div className='heading'>
            <h1>Add New Detail Here</h1>
        </div>
        <form className='add-form'>
            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" name="name" id="name" placeholder="Enter Name Here" onChange={changeHandler} autoComplete="off" />
            </div>
            <div className="form-group">
                <label>Job</label>
                <input type="text" className="form-control" name="job" id="job" placeholder="Enter Job Here" onChange={changeHandler} autoComplete="off" />
            </div>
            <div className="form-group">
                <label>Company</label>
                <input type="text" className="form-control" name="company" id="company" placeholder="Enter Company Name Here" onChange={changeHandler} autoComplete="off"/>
            </div>
            <div className="form-group">
                <label>Salary</label>
                <input type="number" className="form-control" name="salary" id="salary" placeholder="Enter Salary Here" onChange={changeHandler} autoComplete="off"/>
            </div>
            <button onClick={onSubmit} className='btn btn-primary'>ADD THIS</button>
        </form>
    </div>
  )
}

export default Add