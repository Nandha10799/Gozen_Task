import React,{ useState } from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";

const Login = ({ token,setToken }) => {
    const [userName,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');

    const loginHandler = () => {
        axios({
            method: 'POST',
            url: 'https://fakestoreapi.com/auth/login',
            data:{
                username:userName,
                password:password
            },
        }).then((res) => {
            console.log(res.data.token);
            setToken(res.data.token);
            localStorage.setItem('userToken',res.data.token);
        }).catch((err) => {
            console.log(err.response.data);
            setError(err.response.data);
        })
    }
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="outerDiv">
                        <div className="innerDiv">
                            <div className="login_header_section">
                                <div className="login_header_data">
                                    <h4>Login Page</h4>
                                </div>
                                <div className="col-lg-12">
                                    <input type= 'text' name='User_name' value={userName} placeholder="Enter UserName" className="login_input_box form-control p-2 mt-4 w-100" onChange={(event) => setUsername(event.target.value)}/>
                                    <small>username: " mor_2314 "</small>
                                </div>
                                <div className="col-lg-12">
                                    <input type="password" name='Password' value={password} placeholder="Enter Your Password" className="login_input_box form-control p-2 w-100" onChange={(event) => setPassword(event.target.value)}/>
                                    <small>password: " 83r5^_ "</small>
                                </div>
                                <div className=" text-left col-lg-12">
                                    {error && <small className="text-danger">{error}</small>}
                                </div>
                                <div className="col-lg-12">
                                    <button className="w-100 p-2 btn btn-primary mt-3 mb-3" onClick={loginHandler}>Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;