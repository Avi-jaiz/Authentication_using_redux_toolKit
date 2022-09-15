import { createStore } from "redux";
import {configureStore, createSlice} from '@reduxjs/toolkit'; 

const initialState = {
     counter:0,
     showCounter:true,
}

const counterSlice = createSlice(
     {
          name:'counter',
          initialState: initialState,
          reducers: {
               increment(state) {
                    state.counter++;
               },
               decrement(state) {
                    state.counter--
               },
               increaseByValue(state,actions) {
                    state.counter = state.counter+actions.payload;
               },
               toggleCounter(state) {
                      state.showCounter = !state.showCounter;
               }
          }

     }
)

const initialAuthState ={
     isAuthenticated:false,
}

const authSlice = createSlice({
     name:'auth',
     initialState:initialAuthState,
     reducers:{
          logIn(state)
          {
               state.isAuthenticated = true;
          } ,
                
          logOut(state)
          {
                  state.isAuthenticated = false;
          }
     }
})

// const  counterReducer =(state=initialState,actions)=>
// {
//      if(actions.type==="INCREMENT")
//      {
//        return { counter:state.counter+1 ,
//           showCounter:state.showCounter
             
//      }
//      }

//      if(actions.type==='INCREASEYVALUE')
//      {
//           return {counter:state.counter+actions.payload,
//                showCounter:state.showCounter, 
                
//           }
//      }
// if(actions.type==="DECREMENT")
// {
//      return{
//         counter:state.counter-1,
//         showCounter:state.showCounter
//      }

    
// }

// if(actions.type==='TOGGLE')
// {
//      return {
//           showCounter:!state.showCounter,
//           counter:state.counter,
//      }
// }

// return state;

// }





const store = configureStore({
     reducer: {counter: counterSlice.reducer , authentication : authSlice.reducer}
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;





