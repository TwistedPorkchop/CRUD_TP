import { useState } from 'react';
import Swal from "sweetalert2";

const NewUser = ({onSave}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        if (!name && !email) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                name: 'Fill in your Users and date or close the form!'
            })
        } else if (!name && email) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                name: 'Fill in your Users!'
            })
        } else if (name && !email) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                name: 'Fill in your date!'
            })
        } else {
            onSave({ name, email });
        }
        setName('');
        setEmail('');
    }

    return(
        <form className="new_form" onSubmit={onSubmit}>
            <div className="form_ctrl">
                <label>Name</label>
                <input type="name" placeholder="add user" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form_ctrl">
                <label>Email</label>
                <input type="email" placeholder="add email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
        </form>
    )
}

const Button = ({onClick, text}) =>{
    return <button onClick={onClick} style={{backgroundColor: "purple"}} className="btn">{text}</button>
}

const Header = ({showForm, text}) =>{
    return(
        <header className="header">
            <h2 className="app_head">User List</h2>
            <Button onClick={showForm} text={text ? "Close" : "Add"}/>
        </header>
    )
}
const User = ({User, onDelete, onEdit}) =>{
    return (
        <div>
            <div className="Users">
                <div>
                    <p className="UsersName">
                        <span className="textBold">Users Name :</span>{User.text}
                    </p>
                </div>
            </div>
        </div>
    )
}
const Users =({Users, onDelete, onEdit})=>{
    return (
        <>
            {
            Users.map((User) =>(
                <Users key={User.id} Users={User} onDelete={onDelete} onEdit={onEdit} />
            ))
            }
        </>
    )
}

export {NewUser, Button, Header, User, Users}