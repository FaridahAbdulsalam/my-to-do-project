import "./CatPosts.css"
import Button from '../Button/Button'

const CatPosts = ({handleClick, cats}) => {
  return (
    <>
    <div className="catPost-container">
      <h1>
        Click here for some Kitty Lovin'
      </h1>
      {cats.map((cat) => (
        <img className="catPost-image" key={cat.id} src={cat.url} alt="picture of a kittycat"/>
      ))}
      <Button text={"Click Me!"} handleClick={handleClick}/>
    </div>
    </>
  )
}

export default CatPosts
