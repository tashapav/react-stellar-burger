import React from 'react';
import styles from './Order-Details.module.css';
import { ReactComponent as DoneSVG } from "../../images/done.svg";


function OrderDetails() {

    return (
    <div className={styles.orderDetails}>
        <span className={styles.orderNumber}>034536</span>
        <span className={styles.text1}>Идентификатор заказа</span>
        <DoneSVG />
        <span className={styles.text2}>Ваш заказ начали готовить</span>
        <span className={styles.text3}>Дождитесь готовности на орбитальной станции</span>
    </div>
    );
}

export default OrderDetails;