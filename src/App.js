
import '../src/App.css';


import LoggedInPage from "./Components/LoggedInPage";
import LoggedOutPage from "./Components/LoggedOutPage";

import {useSelector , useDispatch} from 'react-redux';

function App() {

  const authenticated = useSelector(state=>state.authentication.isAuthenticated)  

  console.log(authenticated)

  return (
    <div className="App">

{authenticated ? <LoggedInPage/> : <LoggedOutPage />}



    </div>
  );
}

export default App;
