import React from 'react';
import styles from './Ingredient-Details.module.css';
import PropTypes from "prop-types";

IngredientDetails.propTypes = {
    item: PropTypes.object,
};

function IngredientDetails({item}) {

    return (
    <div className={styles.ingredientDetails}>
        <img src={item.image_large} className={styles.image} alt={item.name}/>
        <span className={styles.name}>{item.name}</span>
        <div className={styles.composition}>
            <div className={styles.compositionItem}>
                <span>Калории, ккал</span>
                <span>{item.calories}</span>
            </div>
            <div className={styles.compositionItem}>
                <span>Белки, г</span>
                <span>{item.proteins}</span>
            </div>
            <div className={styles.compositionItem}>
                <span>Жиры, г</span>
                <span>{item.fat}</span>
            </div>
            <div className={styles.compositionItem}>
                <span>Углеводы, г</span>
                <span>{item.carbohydrates}</span>
            </div>
        </div>
        {console.log(item)}
    </div>
    );
}

export default IngredientDetails;