import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import SubTotal from './SubTotal'


function Checkout() {
    const [{ basket }] = useStateValue()
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/CBCC_Aug2020/hero/Insta_NP_1x._CB406898951_.jpg"
                    alt="checkout banner" />

                {basket.length === 0 ? (
                    <div>
                        <h2>Your basket is empty</h2>
                        <p>You have no items in your basket. To buy one click on "add to basket" next to items</p>
                    </div>
                ) : (
                        <div>
                            <h2 className="checkout__title">Your shopping basket</h2>

                            {/* show the basket products */}
                            {basket.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))
                            }
                        </div>
                    )
                }
            </div>
            {basket.length && (
                <div className="checkout__right">
                    <SubTotal />
                </div>
            )}
        </div >
    )
}

export default Checkout
