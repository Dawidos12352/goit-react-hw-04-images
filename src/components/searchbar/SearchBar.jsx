
import PropTypes from 'prop-types';
import css from './SearchBar.module.css';

const SearchBar = ({ handleSubmit }) => {
  const searchImages = e => {
    e.preventDefault();
    handleSubmit(e.target.searchQuery.value);
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={searchImages}>
        <button type="submit" className={css.SearchFormButton}>
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>
        <input
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="searchQuery"
        />
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  handleSubmit: PropTypes.func,
};

export default SearchBar;