import React from 'react';
import './style.css';
const UnderLineSampleText=(props)=>{
return(
<span className = "under-line">
    {props.children}
</span>
);
}

export default UnderLineSampleText