import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {setIsLoading,setUser,signInWithGoogle,user,error,processLogin,setError} = useAuth();

    const location  = useLocation();
    const history = useHistory();

    const redirect_uri = location.state?.from || '/' ;

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();


        if(!email){
            setError("You must input your Email");
            return;
        }

        if(!password){
            setError("You must input your Password");
            return;
        }

        processLogin(email,password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            // ...
            history.push(redirect_uri)
            setError('')
          })
          .catch(error => {
            setError(`${error}`)
          })
    }

    const handleSignIn = () => {
        signInWithGoogle()
        .then(res=>{
            setUser(res.user);
            history.push(redirect_uri)
            console.log(res.user);
        })
        .finally(()=> setIsLoading(false))
    }


    const handleChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    return (
        <div className='cos-login-container'>
        <div className='container'>
            <h2>{user.displayName}</h2>

            <form onSubmit={handleLogin}>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                    <input onBlur={handleChange} type="email" className="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                    <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" />
                    </div>
                </div>
                
                <div className="row mb-3 text-danger">{error}</div>
                <button type="submit" className="btn btn-primary">Login</button>
                
            </form>
            <div className='my-5'>
                <h3>Or Login Using Google</h3>
                
                <button className='btn btn-info' onClick={handleSignIn}><FontAwesomeIcon icon={['fab', 'google']} />Google</button>
            </div>
        </div>
        </div>
    );
};

export default Login;