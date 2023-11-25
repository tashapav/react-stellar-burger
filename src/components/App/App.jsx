import React, { useState, useEffect } from 'react';
import AppHeader from '../App-Header/App-Header';
import styles from './App.module.css';
import BurgerConstructor from '../Burger-Constructor/Burger-Constructor';
import BurgerIngredients from '../Burger-Ingredients/Burger-Ingredients';

const API_URL = 'https://norma.nomoreparties.space/api/ingredients';

function App() {
    const [ingredients, setIngredients] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [countIngredients, setCountIngredients] = useState(new Map())
    const [chosedIngregients, setChosedIngregients] = useState([]);
    const [bun, setBun] = useState(null)

    const ingredientsFromServer = async () => {
        try {
            let response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error('Ошибка при загрузке данных с сервера');
            }

            let data = (await response.json()).data;
            setIngredients(data);
            data.map((item) => setCountIngredients(countIngredients.set(item._id, 0)))
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        ingredientsFromServer()
        
    }, []);

    useEffect(() => {
        console.log(countIngredients)}, []);

    return (
    <div className={styles.app}>
        <AppHeader></AppHeader>
        <div className={styles.appBody}>
            <BurgerIngredients ingredients={ingredients} bun={bun} setBun={setBun} countIngredients={countIngredients} 
            setCountIngredients={setCountIngredients} chosedIngregients={chosedIngregients} setChosedIngregients={setChosedIngregients} 
            totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>
            <BurgerConstructor ingredients={ingredients} countIngredients={countIngredients} setCountIngredients={setCountIngredients} 
            bun={bun} chosedIngregients={chosedIngregients} setChosedIngregients={setChosedIngregients} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>
        </div>
    </div>
    );
}

export default App;