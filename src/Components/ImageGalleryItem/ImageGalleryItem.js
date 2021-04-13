import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({
  id,
  webformatURL,
  largeImageURL,
  tags,
  onOpen,
}) => {
  return (
    <li key={id} className={s.ImageGalleryItem}>
      <img
        src={webformatURL}
        largeimageurl={largeImageURL}
        alt={tags}
        className={s.ImageGalleryItem_image}
        onClick={() => onOpen(largeImageURL)}
      />
    </li>
  );
};
export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onOpen: PropTypes.func.isRequired,
};
