import React, {Component} from "react";
import './Hello.css';

class Hello extends Component {
    render() {
        return (
            <div>
                <h1>Hello World!!!</h1>
                <p>I am here</p>
            </div>
        );
    }
}


/*
// props - properties that to accept from parent
// Simple way to implement the component
// JSX - allows to use the similar HTML tags
const Hello = (props)=>{
    return (
      <div>
          <h1>Hello World!!!</h1>
          <p>{props.greeting}</p>
      </div>  
    );
}*/

export default Hello;