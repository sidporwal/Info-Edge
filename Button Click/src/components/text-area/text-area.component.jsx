import React from 'react';

export default props => (
    <div className='text' style={{listStyle: "none"}}>
        {props.arr.map( item => (
            <li>{item}</li>
        ))}
        <h1 className='text'>Value: {props.count}</h1>
    </div>
);

//export default TextArea;
