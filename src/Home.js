import React from 'react';
import './Home.css';
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className="home__image" src="https://i.ytimg.com/vi/Cwh9zmC7saE/maxresdefault.jpg" alt='amazon banner' />
                <div className="home__row">
                    <Product id='2019191' title='The Laptop:Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum' price={256} image='https://images.indianexpress.com/2020/06/feature.jpg'
                    rating={3}/>
                    <Product id='728282' title='The washing machin: Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum' price={100.99} image='https://images-na.ssl-images-amazon.com/images/I/61f6grHkHRL._SY741_.jpg'
                    rating={4}/>
                </div>
                <div className="home__row">
                     <Product id='72722' title='The TV: Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum' price={258} image='https://images.samsung.com/is/image/samsung/in-uhd-tv-tu8570-ua65tu8570uxxl-frontblack-226347499?$720_576_PNG$'
                    rating={2}/>
                     <Product id='635363' title='The Refrigerator: Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum' price={120} image='https://adityaretailonline.com/wp-content/uploads/2019/04/KA92NVS30I.jpg'
                    rating={5}/>
                     <Product id='45333' title='The Water tank: Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum' price={101} image='https://images-na.ssl-images-amazon.com/images/I/51kqPrijBKL._SX425_.jpg'
                    rating={3}/>
                </div>
                <div className="home__row">
                    <Product id='828282' title='The Tesla Car: This car is made Legend Elon musk and Tony stark this is automatic car with bullete proof galsses and fully bullet proof body this is automatic car with bullete proof galsses and fully bullet proof body this is automatic car with bullete proof galsses and fully bullet proof body' price={500} image='
                https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2021/Insight/non-VLP/02-Global-Nav/GMC-MY19-insight-nonVLP-global-nav-992x428.png'
                    rating={5}/>
                </div>
            </div>
        </div>
    )
}

export default Home
