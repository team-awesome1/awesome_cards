import React from 'react';

export default function ButtonComponent({
    onClick,
    width,
    height,
    backgroundColor,
    color,
    borderRadius,
    fontSize,
    children,
    margin,
}) {
  return (
    <button onClick={onClick} style={{width, height, backgroundColor, color, borderRadius, fontSize, margin}}>
        {children}
      </button>
  );
}

// export default function ButtonComponent(props) {

//     return(
//         <button className='button' onClick={props.handleClick}>{props.children}</button>
//     )
// }
