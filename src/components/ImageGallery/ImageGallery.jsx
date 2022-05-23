import styles from "./ImageGallery.module.css";
import PropTypes from "prop-types";
import ImageGalleryItem from "./ImageGalleryItem";

function ImageGallery({ pictures, onClick }) {
  const element = pictures.map((picture) => (
    <ImageGalleryItem onClick={onClick} picture={picture} key={picture.id} />
  ));
  return <ul className={styles.imageGallery}>{element}</ul>;
}

ImageGallery.defaultProps = {
  pictures: [],
};

ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};
export default ImageGallery;
