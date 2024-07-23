import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import './App.css';
import Layout from '../../components/Layout/Layout';

function Privacy() {
  return (
    <Layout>
        <section id="about" className="about section">

            <div className="container section-title" data-aos="fade-up">
            <h1>Privacy Policy<br /></h1>
            </div>

            <div className="container">

                <div className="row gy-4">
                    <p className="fst-italic">
                        Privacy policy content
                    </p>
                </div>

            </div>

        </section>
    </Layout>
    
  );
}

export default Privacy;
