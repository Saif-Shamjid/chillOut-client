import React, { useEffect, useState } from 'react';
import User from '../../components/User/User';

const AllOrders = () => {
    const [allUsers,setAllUsers] = useState([]);

    useEffect(()=>{
        fetch('https://creepy-fangs-19725.herokuapp.com/alluserinfo')
        .then(res=>res.json())
        .then(data=>setAllUsers(data))
    },[])

    const handledeleteuserorder = email =>{
        
        const cho = window.confirm("Are your sure?");
        if(cho){
            fetch('https://creepy-fangs-19725.herokuapp.com/deleteuserorder',{
            method:'DELETE',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify({email})
        })
        .then(res=>res.json())
        .then(data=>setAllUsers(data))
        }
    }

    return (
        <div className='container'>
            <h2>All Users Order</h2>
            <h3>Item ordered user found: {allUsers.length}</h3>
            {
                allUsers.map(user => <User handledeleteuserorder={handledeleteuserorder} user={user}></User>)
            }
        </div>
    );
};

export default AllOrders;