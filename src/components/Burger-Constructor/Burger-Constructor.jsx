import React, { useState} from 'react';
import styles from './Burger-Constructor.module.css';
import {ConstructorElement, Button, DragIcon, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import Modal from '../Modal/Modal';
import OrderDetails from '../Order-Details/Order-Details';
import ModalOverlay from '../Modal-Overlay/Modal-Overlay';
import PropTypes from "prop-types";

BurgerConstructor.propTypes = {
    ingredients: PropTypes.array, 
    countIngredients: PropTypes.instanceOf(Map), 
    bun: PropTypes.object, 
    chosedIngregients: PropTypes.array, 
    setChosedIngregients: PropTypes.func, 
    totalPrice: PropTypes.number, 
    setTotalPrice: PropTypes.func
};

function BurgerConstructor({ingredients, countIngredients, bun, chosedIngregients, setChosedIngregients, totalPrice, setTotalPrice}) {

    const [showModal, setShowModal] = useState(false)

    return (
        <div className={styles.burgerConstructor}>
            <div className={styles.elementTop}>
            {bun && <ConstructorElement
                key={'top'+ Math.random()}
                type="top"
                isLocked={true}
                text={bun.name + ' (верх)'}
                price={bun.price}
                thumbnail={bun.image}
            />}
            </div>
            <div className={styles.insideSection}>
                {chosedIngregients.map((item) => {
                    return <div className={styles.elementWrapper}>
                        <DragIcon type="primary" />
                        <ConstructorElement className={styles.elementInfo}
                            key={item.name + Math.random()}
                            text={item.name}
                            price={item.price}
                            thumbnail={item.image}
                        />
                    </div>})}
            </div>
            <div className={styles.elementBottom}>
                {bun && <ConstructorElement
                    key={'bottom' + Math.random()}
                    type="bottom"
                    isLocked={true}
                    text={bun.name + ' (низ)'}
                    price={bun.price}
                    thumbnail={bun.image}
                />}
            </div>
            <div className={styles.allContainer}>
                <p className={styles.price}>{totalPrice}</p>
                <CurrencyIcon type="primary" styles={{"margin-rigth": "40px"}}/>
                <Button htmlType="button" type="primary" size="medium" >Оформить заказ</Button>
            </div>
            {
                showModal && (
                    <>
                        <Modal title=" " setShowModal={setShowModal}>
                            <OrderDetails />
                        </Modal>
                        <ModalOverlay />
                    </> 
            )
        }
        </div>
    );
}

export default BurgerConstructor;