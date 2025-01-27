import './App.css'
import {UserList} from './userList/UserList'

export const App=()=>{
     return(
         <div className="Background">
           <h1 className='heading'>User Management</h1>
           <div>
         <UserList/>
           </div>
         </div>
     )
}