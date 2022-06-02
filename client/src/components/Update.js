import React,{useState,useEffect} from 'react';
import axios from 'axios'

function Update(props) {
    const [detail,setDetail] = useState({});
    const changeHandler = (e)=>{
        e.preventDefault();
        const {name,value} = e.target;
        setDetail({...detail,[name]:value})
    }

    useEffect(()=>{
      let urlElements = window.location.href.split('/')
      urlElements.reverse();
      const id = urlElements[0]
      axios.get(`http://localhost:5000/crudapi/details/${id}`).then((res) => {
        if (res.data.success) {
        const data = {
          name: res.data.persons.name,
          job: res.data.persons.job,
          company: res.data.persons.company,
          salary:res.data.persons.salary
        };
        setDetail(data)
      }
    });
    },[])

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
            let urlElements = window.location.href.split('/')
            urlElements.reverse();
            const id = urlElements[0]
            axios.put(`http://localhost:5000/crudapi/update/${id}`, data).then((res) => {
              if (res.data.success) {
                alert("Edited successfully");
              }
            });

        }
        else{
            alert("Please Enter all the Fields");
        }
        
    }
  return (
    <div className='add'>
        <div className='heading'>
            <h1>Edit Detail Here</h1>
        </div>
        <form className='add-form'>
            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" value = {detail.name} name="name" id="name" placeholder="Enter Name Here" onChange={changeHandler} autoComplete="off" />
            </div>
            <div className="form-group">
                <label>Job</label>
                <input type="text" className="form-control" value = {detail.job} name="job" id="job" placeholder="Enter Job Here" onChange={changeHandler} autoComplete="off" />
            </div>
            <div className="form-group">
                <label>Company</label>
                <input type="text" className="form-control" value = {detail.company} name="company" id="company" placeholder="Enter Company Name Here" onChange={changeHandler} autoComplete="off"/>
            </div>
            <div className="form-group">
                <label>Salary</label>
                <input type="number" className="form-control" value = {detail.salary} name="salary" id="salary" placeholder="Enter Salary Here" onChange={changeHandler} autoComplete="off"/>
            </div>
            <button onClick={onSubmit} className='btn btn-primary'>Update</button>
        </form>
    </div>
  )
}

export default Update;
