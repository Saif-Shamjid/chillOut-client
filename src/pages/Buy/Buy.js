import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BuyPlan from '../../components/BuyPlan/BuyPlan';
import Plan from '../../components/Plan/Plan';

const Buy = () => {
    let { key } = useParams();
    console.log(key);
    const [plan,setPlan] = useState({});
    useEffect(()=>{
        axios.post('https://creepy-fangs-19725.herokuapp.com/plan/byKeys',{key})
        .then(data=>setPlan(data.data))
    },[])
    return (
        <div className='container d-flex justify-content-center'>
        <div className='container'>
            {
                plan.name ? <BuyPlan singleplan={plan}></BuyPlan> : <></>
            }
        </div>
        </div>
    );
};

export default Buy;