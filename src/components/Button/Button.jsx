import "./Button.css"

const Button = ({text}) => {

    const handleClick = () => {
       return console.log("This button was clicked");  
    };

  return (
    <div>
      <button className='button' onClick={handleClick}>
        {text}
      </button>
    </div>
  )
}

export default Button
