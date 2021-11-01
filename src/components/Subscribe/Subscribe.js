import React from 'react';

const Subscribe = () => {
    return (
        <div className='container mt-5 p-3'>
            <h3><span className='color-black'>Subscribe</span> US</h3>
            <form className='p-3'>
            <div class="form-group mt-3 mb-3">
            <label className='p-3' for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            <small  id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
  
  <button type="submit" class="btn btn-primary">Subscribe</button>
</form>
        </div>
    );
};

export default Subscribe;