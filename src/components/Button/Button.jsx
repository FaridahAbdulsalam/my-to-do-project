import React from 'react'

const Button = ({text}) => {

    const handleClick = () => {
       return console.log("This button was clicked");  
    };

  return (
    <div>
      <button onClick={handleClick}>
        {text}
      </button>
    </div>
  )
}

export default Button
