import React from 'react';
import { Card } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className='container'>
            <Card className=" text-black">
  <Card.Img src="https://freshysites.com/wp-content/uploads/travel-and-tourism.jpg" alt="Card image card-img img-fluid" />
  <Card.ImgOverlay className=' d-flex flex-column justify-content-end p-3'>
    <Card.Title> <h1>Chill is Everything!</h1> </Card.Title>
    <Card.Text>
      <h6>This is a wider card with supporting text <br />  below as a natural lead-in to
      additional content. <br />This content is a little bit longer.</h6>
    </Card.Text>
  </Card.ImgOverlay>
</Card>
        </div>
    );
};

export default Banner;