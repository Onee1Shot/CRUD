import React,{useState,useEffect} from "react";
import axios from "axios";
import { useParams,Link } from "react-router-dom";

const View = () => {
    const [user,setuser] = useState({
        name:"",
        email:""
    });

    
    const {id} = useParams();
    

    
    useEffect(() => {
        loadUser();
}, []);

const loadUser = async ()=>
    {
        const result = await axios.get(`http://localhost:8000/users/${id}`);
        setuser(result.data);
    }

return(

    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {user.name}</li>
        
        <li className="list-group-item">email: {user.email}</li>
        
      </ul>
    </div>

    );
};

export default View;