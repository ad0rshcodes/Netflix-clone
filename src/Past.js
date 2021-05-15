import React from "react";
import History from "./History"
import "./Row.css";

// function show(){
//     return(
//         <ol>
//             {History.map((mov) => (
//                 <li>{mov}</li>
//             ))}
//         </ol>
//     )
// };

// function Show(){
//     <h4>
        
//     </h4>
// }
const Show = History;
function Past() {
    
    return Show.map((reptile) => <li>{reptile}</li>);
        
        
        // <div className="row">
        //     <h2>
        //         {/* <span>History</span> */}
        //         {/* {History.map((i) => (
        //             <li>{i}</li>
        //         ))}; */}

                
        //             {History.map((i) => {
        //             return {i};
        //             })}
                

        //     </h2>
        // </div>
    
}

export default Past;


// https://stackoverflow.com/questions/49919070/how-to-print-array-of-object-in-react

// function NameList(props) {  
//     const myLists = props.myLists;  
//     const listItems = myLists.map((myList) =>  
//       <li>{myList}</li>  
//     );  
//     return (  
//       <div>  
//             <h2>React Map Example</h2>  
//                 <ul>{listItems}</ul>  
//       </div>  
//     );  
//   }  
//   const myLists = ['A', 'B', 'C', 'D', 'D'];   
//   ReactDOM.render(  
//     <NameList myLists={myLists} />,  
//     document.getElementById('app')  
//   );  
