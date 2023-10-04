import PropTypes from "prop-types"

export default function Feature({ image, alt, title, content }) {
  return (
    <div className="feature-item">
      <img src={image} alt={alt} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{content}</p>
    </div>
  )
}

Feature.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string
}

Feature.defaultProps = {
  image: "image",
  title: "title",
  alt: "image description"
}
