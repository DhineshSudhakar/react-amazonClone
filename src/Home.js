import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
                alt="main banner" />

            {/* creating the products */}
            <div className="home__row">
                <Product
                    id={12457}
                    title="Attitude Is Everything: Change Your Attitude ... Change Your Life!"
                    price={250}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41F8ATXoMOL._SX317_BO1,204,203,200_.jpg" />

                <Product
                    id={12457}
                    title="Attitude Is Everything: Change Your Attitude ... Change Your Life!"
                    price={250}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41F8ATXoMOL._SX317_BO1,204,203,200_.jpg" />
            </div>

            <div className="home__row">
                <Product
                    id={12457}
                    title="Attitude Is Everything: Change Your Attitude ... Change Your Life!"
                    price={250}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41F8ATXoMOL._SX317_BO1,204,203,200_.jpg" />

                <Product
                    id={12457}
                    title="Attitude Is Everything: Change Your Attitude ... Change Your Life!"
                    price={250}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41F8ATXoMOL._SX317_BO1,204,203,200_.jpg" />

                <Product
                    id={12457}
                    title="Attitude Is Everything: Change Your Attitude ... Change Your Life!"
                    price={250}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41F8ATXoMOL._SX317_BO1,204,203,200_.jpg" />
            </div>

            <div className="home__row">
                <Product
                    id={12457}
                    title="Attitude Is Everything: Change Your Attitude ... Change Your Life!"
                    price={250}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41F8ATXoMOL._SX317_BO1,204,203,200_.jpg" />
            </div>


        </div>
    )
}

export default Home;