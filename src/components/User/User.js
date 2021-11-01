import React from 'react';

const User = (props) => {
    const handledeleteuserorder = props.handledeleteuserorder;
    const user = props.user; 
    return (
        <div className='container mt-3 mb-3'>
            <h4>User Email: {user.email}</h4>
            <h4>User Ordered: {user.order.length}</h4>
            <button onClick={()=>handledeleteuserorder(user.email)} className='btn btn-danger'>Delete user all Orders</button>
        </div>
    );
};

export default User;