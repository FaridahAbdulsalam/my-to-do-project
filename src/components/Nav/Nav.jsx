import "./Nav.css"
import Button from "../Button/Button"

const Nav = ({header, handleClick}) => {
  return (
    <>
      <div className="navbar">
        <h1 className="navbar-header">{header}</h1>
        <Button text="Reset" handleClick={handleClick} />
      </div>
    </>
  )
}

export default Nav
