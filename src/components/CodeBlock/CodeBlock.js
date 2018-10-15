import React from 'react';
import './CodeBlock.css';

const CodeBlock = (props) => {
    return (
        <div className="code-block">
            {props.code}
        </div>
    )
}

export default CodeBlock;