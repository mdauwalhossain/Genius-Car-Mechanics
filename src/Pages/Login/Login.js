import React from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInWithGoogle} = useAuth();
    // console.log(signInWithGoogle);
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={signInWithGoogle} className="btn btn-warning">Google Sign In</button>
        </div>
    );
};

export default Login;