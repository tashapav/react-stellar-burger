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
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error('Ошибка при загрузке данных с сервера');
            }

            const data = (await response.json()).data;
            setIngredients(data);

            data.map((item) => setCountIngredients(countIngredients.set(item._id, 0)))
            
            addExampleForConstructor(data)
        } catch (err) {
            console.log(err.message);
        }
    }


    const addBun = (item) => {
        if (bun != null) {
            setCountIngredients(last => last.set(bun._id, 0))
            setTotalPrice(last => last - bun.price * 2)
        }
        setBun(item)
        setCountIngredients(last => last.set(item._id, 1))
        setTotalPrice(last => last + item.price * 2)
        
    }

    const addOtherIngregient = (item) => {
        setCountIngredients(last => new Map(last.set(item._id, last.get(item._id) + 1)))
        setChosedIngregients(last => [...last, item])
        setTotalPrice(last => last + item.price)
    }

    const addExampleForConstructor = (ingredients) => {
        addBun(ingredients[0])
        addOtherIngregient(ingredients[8])
        addOtherIngregient(ingredients[5])
        addOtherIngregient(ingredients[11])
        addOtherIngregient(ingredients[10])
        addOtherIngregient(ingredients[10])
        console.log(chosedIngregients)
    }


    useEffect(() => {
        ingredientsFromServer();
    }, []);



    return (
    <div className={styles.app}>
        <AppHeader></AppHeader>
        <main className={styles.appBody}>
            <BurgerIngredients ingredients={ingredients} countIngredients={countIngredients}/>
            <BurgerConstructor bun={bun} chosedIngregients={chosedIngregients} totalPrice={totalPrice}/>
        </main>
    </div>
    );
}

export default App;