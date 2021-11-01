import React from 'react';
import { useHistory} from 'react-router';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const BuyPlan = (props) => {
    const history = useHistory();
    const{_id,picture,name,about,balance} = props.singleplan;

    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        
        data.order = [_id];
        
        fetch('https://creepy-fangs-19725.herokuapp.com/setorder',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result);
            if(result.modifiedCount>=0){
                alert('Order added successfully')
                history.push('/');
            }
        })
    };
    
    return (
        <div className=''>
        <div className="card border-success mb-3 p-3 rounded shadow-lg" >
            <div className="card-header d-flex justify-content-center">
                <div>
                <img className='img-fluid' src={picture} alt="" />
                </div>
            </div>
            <div className="card-body">
            <h5 className="card-title color-cp">{name}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <h5 className="card-title color-cp">Price: {balance}$</h5>
            {/* <div className="card-footer"><Link to='/' className='coustom-btn'>Buy</Link></div> */}

            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                <input className='p-2 mt-3 mb-3' defaultValue={user.displayName} {...register("name")} />
                <br />
                <input className='p-2 mt-3 mb-3' defaultValue={user.email} {...register("email", { required: true })} />
                <br />
                {errors.email && <span className="error">This field is required</span>}
                <input className='p-2 mt-3 mb-3' placeholder="Address" defaultValue="" {...register("address")} />
                <br />
                <input className='p-2 mt-3 mb-3' placeholder="City" defaultValue="" {...register("city")} />
                <br />
                <input className='p-2 mt-3 mb-3' placeholder="phone number" defaultValue="" {...register("phone")} />

                <br />
                <input className='p-2 mt-3 mb-3 btn btn-primary' type="submit" value="Order Now" />

            </form>
        </div>
    </div>
    );
};

export default BuyPlan;