import './index.css'

const ListOfImgages = props => {
  const {details1, onIdOnClick} = props
  const {imageUrl, thumbnailUrl, id} = details1

  const sendIdOnClick = () => {
    onIdOnClick(id)
  }

  return (
    <li>
      <button onClick={sendIdOnClick} className="img-btn" type="button">
        <img className="imgg" src={imageUrl} alt={thumbnailUrl} />
      </button>
    </li>
  )
}

export default ListOfImgages
