import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/imagegalleryitem/ImageGalleryItem';
import Button from 'components/button/Button';
import css from './ImageGallery.module.css';
import { useState, useEffect, useRef } from 'react';
import { fetchImagesFromAPI } from 'service';
import Loader from 'components/Loader/Loader';

const ImageGallery = ({
  searchQuery,
  currentPage,
  showLargePicture,
  showNextPage,
}) => {
  const images = useRef([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(false);

  useEffect(() => {
    const getImagesData = async () => {
      setIsLoading(true);
      const { hits, totalHits } = await fetchImagesFromAPI(
        searchQuery,
        currentPage
      );
      const fetchedImages = images.current.length + hits.length;
      const willHaveNextPage = fetchedImages < totalHits;

      const imagesToShow = hits.map(hit => {
        return {
          id: hit.id,
          webformatURL: hit.webformatURL,
          largeImageURL: hit.largeImageURL,
          tags: hit.tags,
        };
      });

      images.current = [...images.current, ...imagesToShow];

      setIsLoading(false);
      setHasNextPage(willHaveNextPage);
    };

    if (searchQuery.trim() === '') {
      images.current = [];
      setIsLoading(false);
      setHasNextPage(false);
    } else {
      if (currentPage === 1) {
        images.current = [];
      }
      getImagesData();
    }
  }, [searchQuery, currentPage]);

  return (
    <>
      {isLoading && <Loader />}
      <ul className={css.ImageGallery}>
        {images.current.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            src={webformatURL}
            alt={tags}
            largeImage={largeImageURL}
            onClick={showLargePicture}
          />
        ))}
      </ul>

      {hasNextPage && <Button showNextPage={showNextPage} />}
    </>
  );
};

ImageGallery.propTypes = {
  searchQuery: PropTypes.string,
  currentPage: PropTypes.number,
  showLargePicture: PropTypes.func,
  showNextPage: PropTypes.func,
};

export default ImageGallery;