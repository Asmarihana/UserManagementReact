import { useState ,useEffect} from "react";
export const Form = ({setUsers,editingUser ,setEditingUser}) => {
  
    const [formData,setFormData]=useState({name:"",username:"",email:"",phone:""})
   
    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  useEffect(() => {
    if (editingUser ) {
      setFormData(editingUser ); // fill form with editing user data
    } else {
      setFormData({ name: "", username: "", email: "", phone: "" }); // Reset form
    }
  }, [editingUser]); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingUser) {
        // Update existing user
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${editingUser.id}`, {
          method: 'PUT',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const updatedUser  = await response.json();
        setUsers((prev) => prev.map(user => (user.id === updatedUser.id ? updatedUser  : user)));
        setEditingUser (null); // Reset editing user
      } else {
        // Add new user
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
          method: 'POST',
          body: JSON.stringify(formData),
          // body: JSON.stringify({ ...formData, id: editingUser .id }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const newUser  = await response.json();
        setUsers((prev) => [...prev, newUser ]);
      }
      setFormData({ name: "", username: "", email: "", phone: "" }); // Reset form
      
    } catch (err) {
      console.error('Failed to add/update user');
    }
  };
   
  return (
    
    <form onSubmit={handleSubmit} className="form-container">
       <h2 class="form-title">User Form</h2>
        <div class="mb-4">
            <label for="name" class="form-label">First Name</label>
            <input
                type="text"
                name="name"
                id="name"
                placeholder="First Name"
                value={formData.name}
                onChange={handleChange}
                required
                class="form-input"
            />
        </div>
        <div class="mb-4">
            <label for="username" class="form-label">User Name</label>
            <input
                type="text"
                name="username"
                id="username"
                placeholder="User Name"
                value={formData.username}
                onChange={handleChange}
                required
                class="form-input"
            />
        </div>
        <div class="mb-4">
            <label for="email" class="form-label">Email</label>
            <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                class="form-input"
            />
        </div>
        <div class="mb-4">
            <label for="phone" class="form-label">Phone Number</label>
            <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                class="form-input"
            />
        </div>
      <button  type="submit"  class="form-button">{editingUser ? "Update" : "Submit"}</button> 
    </form>
  );
};


   