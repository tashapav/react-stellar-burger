import React from 'react';
import { BurgerIcon, ProfileIcon, ListIcon, Logo,  } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './App-Header.module.css';

function AppHeader() {

    return (
    <header className={styles.appHeader}>
        <div className={styles.buttonsWrapper}>
            <div className={styles.partInterface}>
                <BurgerIcon type="primary" />
                <span className={styles.buttonText}>Конструктор</span>
            </div>
            <div className={styles.listButton}>
                <ListIcon type="secondary" />
                <span className={styles.buttonText}>Лента заказов</span>
            </div>
        </div>
        <Logo />
        <div className={styles.inactiveButton}>
            <ProfileIcon type="secondary" />
            <span className={styles.buttonText}>Личный кабинет</span>
        </div>
        
    </header>
    );
}

export default AppHeader;