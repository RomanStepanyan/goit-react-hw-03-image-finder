import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

const ImageGallery = ({ searchResult, onOpen }) => {
  return (
    <ul className={s.ImageGallery}>
      {searchResult.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          id={id}
          tags={tags}
          onOpen={onOpen}
        />
      ))}
    </ul>
  );
};
export default ImageGallery;

ImageGallery.propTypes = {
  searchResult: PropTypes.array.isRequired,
  onOpen: PropTypes.func.isRequired,
};
