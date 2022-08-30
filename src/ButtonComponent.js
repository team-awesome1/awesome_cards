import React from 'react';

// export default function ButtonComponent(props) {
//     const myButton = `button ${props.type}`

//     return(
//         <button className={myButton} onClick={props.handleClick}>{props.children}</button>
//     )
// }

export default function ButtonComponent({
    width,
    height,
    backgroundColor,
    color,
    border,
    fontSize,
    children,
    margin,
}) {
  return (
    <button style={{width, height, backgroundColor, color, border, fontSize, margin}}>
        {children}
      </button>
  );
}
