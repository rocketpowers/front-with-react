import React from 'react';
import ReactDom from 'react-dom';


//sem jsx
const elemento=React.createElement('h1',{}, 'sem jsx');
ReactDom.render(elemento, document.getElementById('root'));


//com sfx
ReactDom.render(<h1>com jsx</h1>,document.getElementById('root'));