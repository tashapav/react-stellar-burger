import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from "prop-types";
import ModalOverlay from '../Modal-Overlay/Modal-Overlay';

Modal.propTypes = {
  title: PropTypes.string,
  setShowModal: PropTypes.func,
  children: PropTypes.element,
};

function Modal({title, setShowModal, children}) {

  const forClose = useRef();
  const portal = document.getElementById("modals");
  
  const handleCloseOverlay = (e) => {
    if (forClose.current.contains(e.target)) {
      setShowModal(false)
    }
  };
  const handleCloseEsc = (e) => {
    if (e.code === "Escape") {
      setShowModal(false)
    }
  };
  
  useEffect(() => {
    document.addEventListener("click", handleCloseOverlay);
    document.addEventListener("keydown", handleCloseEsc);
    return () => {
      document.removeEventListener('click', handleCloseOverlay);
      document.removeEventListener("keydown", handleCloseEsc);
    }
  }, []);

    return createPortal(
    <div className={styles.modal} ref={forClose}>
      <div>
        <div className={styles.modalHeader}>
          <span className={styles.title}>{title}</span>
          <CloseIcon type="primary" onClick={(e) => {e.stopPropagation(); setShowModal(false)}}/>
        </div>
        {children}
      </div>
      <ModalOverlay />
    </div>,
    portal
    );
}

export default Modal;