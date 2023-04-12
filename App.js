import React from "react";
import  ReactDOM from 'react-dom/client';

//.....................................................
//HMR hotmodule reloading using file watcher 
//algorithm is done by parcel 
//which is written in c++
//parcel minifying file
//clears console.log
//imageoptimization
//caching while development
//compile with older version of browser
//HTTPS on dev
//Tree shaking -Removing un wanted code
// Note Create React app 
//uses web pack along with bable
//configure package to remove console.log() i,e b
//able plugin tranform remove console
//https://babeljs.io/docs/babel-plugin-transform-remove-console/
//something updating in the dome is called render
// in import React from "react";
//React is comming from react and 
//react is comming from node module
// const heading1=React.createElement(
//     "h1",
//     {
//         id:"id1",
//         key:"key1"
//     },
//     "Heading 1"
// );
// console.log(heading1);
// const heading2=React.createElement(
//     "h1",
//     {
//         id:"id2",
//         key:"key2"
//     },
//     "Heading 2"
// );
// const container=React.createElement(
//     "div",
//     {
//         id:"container",
//     },
//     [heading1,heading2]

// )
//...............................................................

// import { createElement } from "react";
// const heading1=createElement(
//     "h1",
//     {
//         id:"id1",
//         key:"key1"
//     },
//     "Heading 1"
// );
// console.log(heading1);
// const heading2=createElement(
//     "h1",
//     {
//         id:"id2",
//         key:"key2"
//     },
//     "Heading 2"
// );
// const container=createElement(
//     "div",
//     {
//         id:"container",
//     },
//     [heading1,heading2]

// )

//.......................................................

// import { createElement as ce } from "react";
// const heading1=ce(
//     "h1",
//     {
//         id:"id1",
//         key:"key1"
//     },
//     "Heading 1"
// );
// console.log(heading1);
// const heading2=ce(
//     "h1",
//     {
//         id:"id2",
//         key:"key2"
//     },
//     "Heading 2"
// );
// const container=ce(
//     "div",
//     {
//         id:"container",
//     },
//     [heading1,heading2]

// )
//........................................................

//JSX is made by facebook developers....
//JSX =>React.createElement=>Object=>HTML(DOM)
//advantages of jsx readability
//is JSX is html inside java script
//ans NO but why??
//<h1 id="id1" key={key1}>Heading1</h1>
// it is not but it html like syntax
//in one line
//React.createElement=>object=>HTML(DOM)

//..............................................................
const Title=()=>{
    return(
    <h1>Title</h1>
    )
}
//const mallaciousdata=api.getData();

const Heading1=<h1 id="id1" key="key1">Heading1</h1>
// in multiple line
const Heading2=(<h1 id="id2" className="c2"
key="key2" >
Heading2</h1>);
const container=(<div id="container">
    {Heading1}
    {Heading2}
    {<Title/>}
    {Title()}
 </div>);
//..................................................................

// React Components
// Class component
// functional component
// name of functional component must start with capital letter
//component composition ->component inside component
const HeaderComponent=()=>{
    return (
        <>
        {2+5}
        {console.log("any Js code")}
              {<Title/>}
              {Title()}
               {container}
            <h1>Functional Component</h1>
            <h1>Lets us understand</h1>


{/* cross site sript attack is possible but itsis secure due to JSX by sanitisation of data */}
            {/* {mallaciousdata} */}
            
        </>
        
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);

//....................................................................




// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(container);