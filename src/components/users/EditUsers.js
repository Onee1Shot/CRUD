import React,{useState,useEffect} from "react";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";

const EditUser = () => {
    const [user,setuser] = useState({
        name:"",
        email:""
    });

    const Navigate = useNavigate();
    const {id} = useParams();
    const {name,email} = user;

    const onInputChange = e =>{
        setuser({...user,[e.target.name]:e.target.value});
    };

    useEffect(() => {
        loadUser();
}, []);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:8000/users/${id}`,user);
        Navigate("/");
    }

    const loadUser = async ()=>
    {
        const result = await axios.get(`http://localhost:8000/users/${id}`);
        setuser(result.data);
    }



    return ( 
    <div className="container">
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

            <button className="btn btn-primary" >
                Update
            </button>
            
            </form>
            </div>
            </div>
            
                 );
}
 
export default EditUser;
