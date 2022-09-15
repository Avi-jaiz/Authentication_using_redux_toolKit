// import { Component } from "react";
// import {connect} from 'react-redux'


// class CounterClass extends Component 
// {
//     increment()
//     {
//         this.props.increment;
//     };
//     decrement()
//     {
//         this.props.decrement;
//     };
//     render()
//         {
//             return(
//                 <div>
//                 Counter:  <h3>{this.props.counter}</h3>

//                 <div>
//                     <button onClick={this.increment.bind(this)}>Plus</button>
//                     <button onClick={this.decrement.bind(this)}>minus</button>
//                 </div>
//                 </div>
//             )
//         }
    
// }

// const mapStateToProps = state=>
// {
//     return{
//         counter:counter.state,
//     }
// }

// const mapDispatchToProps = dispatch=>
// {
//     return{
//         increment:()=>dispatch({type:'INCREMENT'}),
//         decrement:  ()=>dispatch({type:'DECREMENT'}),
//     }
// }

// export default connect()(CounterClass);