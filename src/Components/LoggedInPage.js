import { useDispatch } from "react-redux";
import { authActions } from "../Store";
import '../Components/loggedOutPage.css';




const LoggedInPage =()=>
{
 const dispatch= useDispatch()

 const logOut =()=>{
     return dispatch(authActions.logOut())
 }

    return(
        <div className="loginForm">
      <h2>You are logged in </h2>  
        <h3>Welcome user</h3>
        <button onClick={logOut}>log out</button>
    </div>
    )
    
}

export default LoggedInPage;