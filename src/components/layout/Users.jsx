import { useState } from 'react';
import Header from '../helpers/Header';

export const Users = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <section className='header__section'>
            < Header />
            <form action="" className='user__form'>
                <input type="text" onChange={(e) => setName(e.target.value)} placeholder='Enter your name'/>
                <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email'/>
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='*********'/>
                <input type="button" value="send" />
            </form>
            <div className="cards__container">
                <div className="card">
                    <h3>User</h3>
                    <p>{name}</p>
                    <p>{email}</p>
                </div>
            </div>
        </section>
    )
}

export default Users