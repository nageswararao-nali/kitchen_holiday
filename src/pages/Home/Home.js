import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import './App.css';
import Layout from '../../components/Layout/Layout';
import WhoChoose from '../../features/whochoose/whochoose';
import MainSlider from '../../features/mainslider/mainSlider';
import HowWorks from '../../features/howworks/howWorks';
import Review from '../../features/review/Review';
import Faq from '../../features/faq/faq';

function Home() {
  return (
    <Layout>
        <MainSlider />
        <WhoChoose />
        <HowWorks />
        <Review />
        <Faq />
    </Layout>
    
  );
}

export default Home;
