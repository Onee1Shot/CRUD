import axios from "axios";
import React,{useState} from "react";
import {useNavigate} from "react-router-dom";

const AddUser = () => { 
    let Navigate=useNavigate()
    const [user,setuser] =useState({
        name:"",
        email:""
    });

    const{name,email} = user;
    
    
    const onInputChange = e =>
    {
        setuser({...user,[e.target.name]:e.target.value});
    }
    
    const onSubmit = async e =>{
        e.preventDefault();
        await axios.post("http://localhost:8000/users",user);
        Navigate("/",{replace:true});
    }

    return ( <div className="container">
        <div className="shadow">
            <h2 className="center">Add a User</h2>
            <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                <input type="text"
                className="form-control"
                placeholder="Enter the Name"
                name="name"
                value={name}
                onChange={e => onInputChange(e)}
                />
                </div>
                <div className="form0">
                    <input type="email"
                    className="form-control-1"
                    placeholder="Enter Your Email Address"
                    name="email"
                    value={email}
                    onChange={e => onInputChange(e)}
                    />
                    </div>
                    <button className="btn btn-primary">Add User</button>
                </form>
            </div>
        </div>
      );
}
 
export default AddUser;