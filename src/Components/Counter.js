import { useDispatch, useSelector } from "react-redux";
import { counterActions  } from "../Store/index";


const Counter =()=>
{
    
 
const counter=    useSelector(state=>state.counter);
const toggleCounter= useSelector(state=>state.showCounter);




const dispatch = useDispatch(); 



const increase =()=>
{
    return dispatch(counterActions.increment())
}
const decrease =()=> {
 return     dispatch(counterActions.decrement())
};

const increaseByValue = ()=> 
{
 return   dispatch(counterActions.increaseByValue(5))
}
const toggle  =()=> {
    
   return  dispatch(counterActions.toggleCounter())    
}


 return(


    <div className="counter">
 Counter:  

 {toggleCounter&& <h2>{counter}</h2>}
 
<div>
<button onClick={increase}>plus</button>
<button onClick={decrease}>minus</button>

<button onClick={increaseByValue}>plus by 10</button>

<button onClick={toggle}>Toggle to hide</button>
{!toggleCounter && <h3>Counter is hidden</h3>}



</div> 


    </div>
 )
}

export default Counter;