import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Plan from '../Plan/Plan';

const Plans = () => {
    const [plans,setPlans] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3030/plans')
        .then(res=>res.json())
        .then(data=>setPlans(data))
    },[])

    return (
        <div>
        {
            plans ? <div className='container mt-5'>
            <h1>Top <span className='color-black'>Plans</span></h1>
            <div className="row g-3 mt-5">
            {
                plans.map(plan => <Plan singleplan={plan}></Plan>)
            }
            </div></div>: <Spinner animation="border" variant="success" /> 
        
        }
        </div>
    );
};

export default Plans;