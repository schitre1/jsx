import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText(){
    return 'Click on Me!';
}
//create react component
const App = () => {
    const buttonText = 'Click Me!';
    return <div>
        <label className="label" for="name">Enter name:</label>
        <input id="name" type="text"/>
        <button style={{backgroundColor: 'blue', color: 'white'}}>
            {getButtonText()}
        </button>
    </div>
};


//take the component and show it on screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);