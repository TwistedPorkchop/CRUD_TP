import { useState } from "react";
import Cart from "./views/Tp1V2/Cart/Cart";
import ProductList from "./views/Tp1V2/ProductList";
import UserForm from "./views/Tp2/Form";
import {NewUser, Button, Header, User, Users} from "./views/TP3/crud";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from 'uuid';
/*
function App() {
  const [displayForm, setDisplayForm] = useState(true);
  return (
    <>
      <ProductList />
      <Cart />
      <button onClick={() => setDisplayForm(!displayForm)}>Display</button>
      {displayForm && <UserForm />}
      {displayForm && (
        <UserForm
          user={{
            firstname: "myfirst",
            lastname: "mylast",
            email: "myfirst.mylast@email.com",
            password: "",
            skills: [],
            rgpd: false,
          }}
        />
      )}
    </>
  );
}
*/

function App() {
  const [users, setUsers] = useState([]);
  const [showAddUser, setShowAddUser] = useState(false);

  const addUser = (user) => {
    const id = uuidv4();
    const newuser = { id, ...user }
    setUsers([...users, newuser]);
    Swal.fire({
        icon: 'success',
        title: 'Yay...',
        text: 'You have successfully added a new user!'
    })
  }
  const deleteTask = (id) => {
    const deleteTask = users.filter((task) => task.id !== id);
    setUsers(deleteTask);
    Swal.fire({
        icon: 'success',
        title: 'Oops...',
        text: 'You have successfully deleted a task!'
    })
  }

  return (
    <>
      <div className="container">
        <Header showForm={() => setShowAddUser(!showAddUser)} text={showAddUser} />
        {showAddUser && <NewUser onSave={addUser} />}

        {
          users.length > 0 ?
            (<users users={users} />) :
            ("No Users Found!")
        }
        <p><FaTimes onClick={() => onDelete(task.id)} className="delIcon" /></p>
      </div>
    </>

  )
}

export default App;