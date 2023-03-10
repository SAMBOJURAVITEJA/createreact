import './index.css'
const Welcome = props => {
  const {object} = props
  const {title, description, key, className, imgUrl} = object
  return (
    <li className={className} id="card">
      <h1 className="heading">{title}</h1>
      <p className="description">{description}</p>
      <div className="image-container">
        <img src={imgUrl} alt={title} />
      </div>
    </li>
  )
}
export default Welcome

