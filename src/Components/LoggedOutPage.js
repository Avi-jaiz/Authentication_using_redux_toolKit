import { useDispatch } from "react-redux";
import { authActions } from "../Store";

import '../Components/loggedOutPage.css';


const LoggedOutPage =()=>
{
    const dispatch =useDispatch()

    const logIn =()=>
    {
        return dispatch(authActions.logIn())
    }
    return(
    <div className="loggedOutPage">
      <h2>You are logged out </h2>  
        <h3>Click below to login</h3>
        <form className="loginForm">
            <input type='text' placeholder="type your user name"  />
            <input type="password" placeholder="password"/>
            <button onClick={logIn}>Log in</button>
        </form>
        
    </div>)
}

export default LoggedOutPage;