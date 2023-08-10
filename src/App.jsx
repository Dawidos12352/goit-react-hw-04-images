import React, { useState} from "react";

import SearchBar from 'components/searchbar/SearchBar';
import ImageGallery from 'components/imagegallery/ImageGallery';
import Modal from 'components/modal/Modal';

import css from "App.module.css"


export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [largePicture, setLargePicture] = useState(null);

  const updateSearchQuery = newSearchQuery => {
    if (searchQuery !== newSearchQuery) {
      setSearchQuery(newSearchQuery);
      setPageNumber(1);
    }
  };

  const loadNextPage = () => {
    setPageNumber(prevPageNumber => prevPageNumber + 1);
  };

  const hideModal = () => {
    setLargePicture(null);
  };

  return (
    <div className={css.App}>
      <SearchBar handleSubmit={updateSearchQuery} />
      <ImageGallery
        searchQuery={searchQuery}
        currentPage={pageNumber}
        showNextPage={loadNextPage}
        showLargePicture={setLargePicture}
      />
      {largePicture !== null && (
        <Modal picture={largePicture} hideModal={hideModal} />
      )}
    </div>
  );
};