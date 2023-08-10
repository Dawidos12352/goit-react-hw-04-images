import css from './Button.module.css';
import PropTypes from "prop-types"

export const Button = ({ showNextPage }) => {
  return (
    <button type="button" className={css.Button} onClick={showNextPage}>
      Load more
    </button>
  );
};

Button.propTypes = {
  showNextPage: PropTypes.func,
};

export default Button;