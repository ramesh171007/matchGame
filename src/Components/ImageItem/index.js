import './index.css'

const ImageItem = props => {
  const {imgDetails, imageClicked} = props
  const {id, imageUrl, category, thumbnailUrl} = imgDetails
  const onImageClick = () => {
    imageClicked(imageUrl)
  }
  return (
    <li className="li-container">
      <button className="img-button" type="button" onClick={onImageClick}>
        <img src={thumbnailUrl} alt="thumbnail" className="ls-image-style" />
      </button>
    </li>
  )
}

export default ImageItem
