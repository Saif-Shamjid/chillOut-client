import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";


const AddAplan = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://creepy-fangs-19725.herokuapp.com/addplan',data)
        .then(res => {
            if(res.data.insertedId){
                alert('added successfully');
                reset();
            }
        })
    };
    return (
        <div className='container'>
            
            <form className='p-5' onSubmit={handleSubmit(onSubmit)}>
            <h3>Please Add A Plan: </h3>
        <input className='mt-3 mb-3 p-2' {...register("name", { required: true, maxLength: 20 })} placeholder='Name' />
        <br />
        <textarea className='mt-3 mb-3 p-2' {...register("about")} placeholder='Description' />
        <br />
        <input className='mt-3 mb-3 p-2' placeholder='Price' type="number" {...register("balance")} />
        <br />
        <input className='mt-3 mb-3 p-2' placeholder='Give me Image Url' {...register("picture")} />
        <br />
        <input className='btn btn-primary' type="submit" />
            </form>
        </div>
    );
};

export default AddAplan;