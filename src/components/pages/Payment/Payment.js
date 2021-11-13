import React from 'react'
import "./Payment.css"

function Payment() {
    return (
        <div className="container">
            <h1 className="title">Payment Gateway</h1>
            <div className="container-box">
                <div className="heading">
                <h2 className="subtitle">Enter your card details</h2>
                </div>
            
                <div className="paymentForm">
                    <div className="svg">
                    <img src="images/credit-card.svg" alt="credit-card" width="60px"></img>
                    <img src="images/visa.svg" alt="visa" width="60px"></img>
                    <img src="images/mastercard.svg" alt="mastercard.svg" width="60px"></img>
                    <img src="images/amex.svg" alt="amex" width="60px"></img>
                    </div>
                    
                </div>
                <div className="MiddleForm">
                        <div className="cardForm">
                            <label className="cardlabel">Card Number</label>
                            <input className="cardInput" placeholder="Valid Card Number"/>
                        </div>
                        <div className="MiddleCardlayer">
                            <div className="cardForm">
                                <label className="cardlabel">EXP Date</label>
                                <input className="cardInput" placeholder="DD/MM/YYYY"/>
                            </div>
                            <div className="cardForm">
                                <label className="cardlabel">CVV Code</label>
                                <input className="cardInput" placeholder="CVC"/>
                            </div>
                        </div>
                        <div className="cardForm">
                            <label className="cardlabel">Card Owner</label>
                            <input className="cardInput" placeholder="Card Owner Name"/>
                        </div>
                        
                </div>
                    <div className="cardForm">
                        <div className="bottom">
                        <button className="payButton">Confirm Payment</button>
                        </div>
                        
                    </div>  
            </div>
                    
        </div>
    )
}

export default Payment
