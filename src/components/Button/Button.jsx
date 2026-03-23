import "./Button.css"

const Button = ({text, handleClick}) => {

  return (
    <div>
      <button className='button' onClick={handleClick}>
        {text}
      </button>
    </div>
  )
}

export default Button
