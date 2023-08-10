import PropTypes from "prop-types";
import css from './Modal.module.css';
import { useEffect, useRef } from 'react';

const Modal = ({ hideModal, picture }) => {
  const overlay = useRef();

  useEffect(() => {
    overlay.current.focus();
  }, []);

  const handleKeyDown = e => {
    if (e.keyCode === 27) {
      hideModal();
    }
  };

  return (
    <div
      ref={overlay}
      tabIndex={0}
      className={css.Overlay}
      onClick={hideModal}
      onKeyDown={handleKeyDown}
    >
      <div className={css.Modal} tabIndex={0} onKeyDown={handleKeyDown}>
        <img src={picture} alt="img" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  hideModal: PropTypes.func,
  picture: PropTypes.string,
};
export default Modal;