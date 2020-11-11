import React from 'react'


function Hello(props){
    function DoThis(a){
        alert(a)
    }
    return (
        <div>
            <button onClick={DoThis.bind(this,"Hello I am from para")}>Functional Button</button>
            <h1>Hello {props.name}, You are awesome at {props.age}</h1>
        </div>


    );
}

export default Hello;