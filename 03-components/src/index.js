import React from 'react';
import ReactDOM from 'react-dom';


class MyComponent extends React.Component {

    render() {

        return <h1>my first component</h1>;


    }
}

ReactDOM.render(<MyComponent />, document.getElementById('root'));


