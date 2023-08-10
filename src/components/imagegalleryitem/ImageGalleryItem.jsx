
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

 const ImageGalleryItem = ({ src, alt, onClick, largeImage }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItemImage}
        src={src}
        alt={alt}
        onClick={() => onClick(largeImage)}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  onClick: PropTypes.func,
  largeImage: PropTypes.string,
};
export default ImageGalleryItem;
