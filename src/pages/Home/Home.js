import React from 'react';
import Banner from '../../components/Banner/Banner';
import Faq from '../../components/Faq/Faq';
import Plans from '../../components/Plans/Plans';
import Subscribe from '../../components/Subscribe/Subscribe';
// import Banner from '../../components/Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Plans></Plans>
            <Subscribe></Subscribe>
            <Faq></Faq>
        </div>
    );
};

export default Home;