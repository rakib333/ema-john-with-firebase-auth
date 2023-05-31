import React, { useContext, useState } from 'react';
import './Login.css';
import { AuthContext } from '../../providers/AuthProviders';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    const [show, setShow] = useState(false);

    const { loginUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    console.log(from)




    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message)
            })
    }


    return (
        <div className='login-main'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type={show ? "text" : "password"} name="password" id="password" />
                </div>
                <p onClick={() => setShow(!show)}>
                    {
                        show ? <span>Hide password</span> : <span>Show password</span>
                    }
                </p>
                <input type="submit" className='btn-submit' value="Login" />
            </form>
            <p>New here? <Link to='/signup'>Sign Up</Link></p>
        </div>
    );
};

export default Login;