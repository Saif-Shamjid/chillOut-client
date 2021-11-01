import React, { useEffect, useState } from 'react';
import UpgradeableOrder from '../../components/UpgradeableOrder/UpgradeableOrder';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const [orders,setOrders] = useState([]);
    const { user } = useAuth();
    const email = user.email;
    const uri = `https://creepy-fangs-19725.herokuapp.com/singleuserorders`
    useEffect(()=>{
        fetch(uri,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify({email})
        })
        .then(res=>res.json())
        .then(data=>setOrders(data?.order))
    },[])


    const handleOrderDelete = (id) =>{
        const cho = window.confirm('Are your sure');
        if(cho){
            let newOrder = orders.filter(order=> order!==id)
        // console.log(id);
        // console.log(newOrder);
        fetch('https://creepy-fangs-19725.herokuapp.com/setorderex',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify({email,order:newOrder})
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.modifiedCount>0){
                alert('delete successfully')
                setOrders(newOrder);

            }
        })
        }
    }

    return (
        <div>
        {orders ? <div className='container mt-5'>
        <h2>MY Orders {orders.length}</h2>
        {
            orders.map(order=><UpgradeableOrder handleOrderDelete={handleOrderDelete} orderId={order}></UpgradeableOrder>)
        }
    </div>: <div className='container'><p>Please Buy something! Nothing to show</p></div>

        }
        </div>
    );
};

export default MyOrders;