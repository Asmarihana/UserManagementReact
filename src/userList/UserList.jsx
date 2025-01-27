
import React, { useState, useEffect } from 'react';
import { Form } from './Form'

export const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false)
  const[editingUser ,setEditingUser]=useState(null)
  const errorButton={color:"red", fontWeight:"bold",fontSize:"40px",margin:"5px"}
  const AddButton={color:"blue",margin:"5px",padding:"10px",backgroundColor:"pink",fontSize:"20px", borderRadius:"5px"}
  // Fetch users from API
  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError('Failed to fetch users details');
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete=(id)=>{
    setUsers(users.filter((i)=>i.id!==id))
  }
  // const handleDelete = async (id) => {
  //   try {
  //     await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { method: 'DELETE' });
  //     setUsers(users.filter(user => user.id !== id));
  //   } catch (err) {
  //     console.error('Failed to delete user');
  //   }
  // };
  const handleEdit=(user)=>{
      setEditingUser (user);
      setShowForm(false) // Set the user to be edited
  }
  const handleAddUser = () => {
    setEditingUser(null);
    setShowForm(true); 
  };

  return (
      <div>
        {error ? <p style={errorButton}>{error}</p> :<button onClick={handleAddUser} style={AddButton}>Add User</button>}
        <div>
         {editingUser && <Form setUsers={setUsers} setEditingUser={setEditingUser} editingUser ={editingUser}/>}  
        </div>
        <div>
          {showForm && <Form setUsers={setUsers} setEditingUser={setEditingUser} editingUser ={editingUser} setShowForm={setShowForm} />}
        </div>
        <table>
           <thead>
             <tr>
               <th>ID</th>
               <th>Name</th>
               <th>Username</th>
               <th>Email</th>
               <th>Phone number</th>
               <th>Actions</th>
            </tr>
         </thead>
         <tbody>
          {users.map(user => (
           <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>
              <button onClick={() => handleEdit(user)} style={{backgroundColor:"royalblue"}}>Edit</button>
              <button onClick={() => handleDelete(user.id)}style={{backgroundColor:"red"}}>Delete</button>
            </td>
           </tr>
        ))}
      </tbody>
    </table> 
  </div>
  )}


   
