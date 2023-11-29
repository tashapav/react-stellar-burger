import React, {useState} from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './Burger-Ingredients.module.css';
import BurgerIngredient from '../Burger-Ingredient/Burger-Ingredient';
import PropTypes from "prop-types";

BurgerIngredients.propTypes = {
    ingredients: PropTypes.array, 
    bun: PropTypes.object, 
    setBun: PropTypes.func, 
    countIngredients: PropTypes.instanceOf(Map), 
    setCountIngredients: PropTypes.func, 
    chosedIngregients: PropTypes.array, 
    setChosedIngregients: PropTypes.func, 
    totalPrice: PropTypes.number, 
    setTotalPrice: PropTypes.func,
};

function BurgerIngredients({ingredients, countIngredients}) {
    
    let [current, setCurrent] = useState('Булки')

    return (
    <div className={styles.burgerIngredients}>
        <h1 className={styles.title}>Соберите бургер</h1>
        <div style={{display: 'flex'}}>
            <Tab value="Булки" active={current === 'Булки'} onClick={() => setCurrent('Булки')}>
            Булки
            </Tab>
            <Tab value="Соусы" active={current === 'Соусы'} onClick={() => setCurrent('Соусы')}>
            Соусы
            </Tab>
            <Tab value="Начинки" active={current === 'Начинки'} onClick={() => setCurrent('Начинки')}>
            Начинки
            </Tab>
        </div>
        <div className={styles.ingrList}>
            <h2 className={styles.subTitle}>Булки</h2>
            <div className={styles.ingredientsSection}>
                {ingredients.map((item) => {
                    if (item.type === 'bun') {
                    return <BurgerIngredient key={item._id} item={item} countIngr={countIngredients.get(item._id)} />
                }
                })}
            </div>
            <h2 className={styles.subTitle}>Соусы</h2>
            <div className={styles.ingredientsSection}>
                {ingredients.map((item) => {
                    if (item.type === 'sauce') {
                    return <BurgerIngredient key={item._id} item={item} countIngr={countIngredients.get(item._id)} />
                }
                })}
            </div>
            <h2 className={styles.subTitle}>Начинки</h2>
            <div className={styles.ingredientsSection}>
                {ingredients.map((item) => {
                    if (item.type === 'main') {
                    return <BurgerIngredient key={item._id} item={item} countIngr={countIngredients.get(item._id)} />
                }
                })}
            </div>
        </div>
    </div>
    );
}

export default BurgerIngredients;