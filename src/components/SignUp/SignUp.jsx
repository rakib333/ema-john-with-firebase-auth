import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import { AuthContext } from '../../providers/AuthProviders';

const SignUp = () => {

    const [error, setError] = useState('');

    const { createUser } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPass.value;
        console.log(email, password, confirmPassword)

        if (password !== confirmPassword) {
            setError('Password did not match')
        }

        else if (password.length < 6) {
            setError('Password must be 6 characters')
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                form.reset()
            })

            .catch(error => {
                console.log(error)
                setError(error.message)
            })

    }



    return (
        <div className='login-main'>
            <h2 className='form-title'>Sign up here</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div className="form-control">
                    <label htmlFor="confirmPass">Confirm Password</label>
                    <input type="password" name="confirmPass" id="confirmPass" />
                </div>
                <input type="submit" className='btn-submit' value="Sign Up" />
            </form>

            <p>Already have an account? <Link to='/login'>Login</Link></p>

            <p>{error}</p>
        </div>
    );
};

export default SignUp;