import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const Home = () => {
    const[user,setuser]=useState([]);
    useEffect(() => {
        loadUsers();
    },[]);
    const loadUsers = async() => {
        const results= await axios.get("http://localhost:8000/users");
        setuser(results.data);
    };
    const deleteUser = async id => {
         await axios.delete(`http://localhost:8000/users/${id}`);
        loadUsers();
    };
    return (
        <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table class ="table border shadow">
            <thead class ="head-dark">
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {user.map((user,index) => (
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                <Link class="btn btn-primary me-3" to={`/users/ViewUsers/${user.id}`}>
                                View
                                </Link>
                                <Link class="btn btn-outline-primary me-3" to={`/users/EditUsers/${user.id}`}>
                                Edit 
                                </Link>
                                <Link class="btn btn-danger me-3" onClick={() => deleteUser(user.id)}>
                                Delete
                                </Link>
                                </td>
                            </tr>
                             ))}
                    </tbody>

        
        </table>
    
      </div>
    </div>
  );
};
export default Home;