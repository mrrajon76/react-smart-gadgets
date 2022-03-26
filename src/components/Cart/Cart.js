import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'

const Cart = (props) => {
    const { data, remove } = props;
    return (
        <div className='cart-item'>
            <img src={data.image} alt="" />
            <p>{data.name}</p>
            <p onClick={() => remove(data)}><FontAwesomeIcon icon={faTrash} /></p>
        </div>
    );
};

export default Cart;