import React from 'react';
import styles from './Modal.module.css';
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from "prop-types";

Modal.propTypes = {
  title: PropTypes.string,
  setShowModal: PropTypes.func,
  children: PropTypes.element,
};

function Modal({title, setShowModal, children}) {

    return (
    <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <span className={styles.title}>{title}</span>
          <CloseIcon type="primary" onClick={(e) => {e.stopPropagation(); setShowModal(false)}}/>
        </div>
        {children}
    </div>
    );
}

export default Modal;