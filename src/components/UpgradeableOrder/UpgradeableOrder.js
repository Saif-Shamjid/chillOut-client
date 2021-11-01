import React, { useEffect, useState } from 'react';

const UpgradeableOrder = (props) => {
    const orderId = props.orderId;
    const handleOrderDelete = props.handleOrderDelete;
    const [order,setOrder] = useState({})
    const uri = `https://creepy-fangs-19725.herokuapp.com/orderinfo/${orderId}`
    useEffect(()=>{
        fetch(uri)
        .then(res=>res.json())
        .then(data=>setOrder(data))
    },[])
    return (

        <li className='mt-3 mb-3'>Order Name: {order.name} <button className='btn btn-danger' onClick={()=>handleOrderDelete(order._id)}>Delete</button></li>
    );
};

export default UpgradeableOrder;