import React, { useState } from 'react';
import styles from './Burger-Ingredient.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import Modal from '../Modal/Modal';
import IngredientDetails from '../Ingredient-Details/Ingredient-Details';
import ModalOverlay from '../Modal-Overlay/Modal-Overlay';
import PropTypes from "prop-types";

BurgerIngredient.propTypes = {
    item: PropTypes.object,
    countIngr: PropTypes.number,
};

function BurgerIngredient({item, countIngr}) {
    const [showModal, setShowModal] = useState(false)

    return (
    <div className={styles.burgerIngredient} onClick={() => {setShowModal(true); console.log(showModal)}}>
        {(countIngr !== 0) && <Counter count={countIngr} size="default" extraClass="m-1" />}
        <img src={item.image} alt={item.name}/>
        <span className={styles.price}>
            {item.price}
            <CurrencyIcon type="primary"/>
        </span>
        <p className={styles.name}>{item.name}</p>
        {
            showModal && (
                <>
                <Modal title="Детали ингредиента" setShowModal={setShowModal}>
                    <IngredientDetails item={item}/>
                </Modal>
                <ModalOverlay />
                </>
                
            )
        }
    </div>
    );
}

export default BurgerIngredient;