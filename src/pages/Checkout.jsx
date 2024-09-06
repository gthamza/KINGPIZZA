import React from 'react'

function Checkout() {
  return (
   <>
   <div id="page" className="page">
                <div id="about-page" className="page-hero-section division" style={{ backgroundImage: 'url("")' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="hero-txt text-center white-color">
                                    <div id="breadcrumb">
                                        <div className="row">
                                            <div className="col">
                                                <div className="breadcrumb-nav">
                                                    <nav aria-label="breadcrumb">
                                                        <ol className="breadcrumb">
                                                            <Link to='/home'>
                                                                <li className="breadcrumb-item"><a href="">Home</a></li>
                                                            </Link>
                                                            <p className='breadcrumb-item'></p>
                                                            <li className="breadcrumb-item active" aria-current="page">Checkout</li>
                                                        </ol>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h2 className="h2-xl">CHECKOUT</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="product-1" className="pt-100 pb-100 single-product division">
                <div className="container">
                    <CouponSection warnings={warnings} showBilling={showBilling} discount={discount} setDiscount={setDiscount} subTotalPrice={subTotalPrice} couponCode={couponCode} setCouponCode={setCouponCode} />
                    <div className="checkout-content-box">
                        <div className="row1">
                            
                                <div className="col-lg-6 col-12">
                                    <div className="checkout-from-wrapper">
                                        <h3>BILLING</h3>
                                        {showBilling && (
                                        <div className="">
                                            <div id="" style={{ width: '100%', height: '450px' }}>
                                            <APIProvider 
                                                apiKey={GOOGLE_MAPS_API_KEY} 
                                                onLoad={(map) => { setMap(map); }}
                                            >
                                                <Map
                                                    mapId='1'
                                                    onClick={handleMapClick}
                                                    defaultZoom={17}
                                                    defaultCenter={ { lat:42.8724925, lng: 74.6121651 } }
                                                    onCameraChanged={ (ev) => {
                                                        setMap(ev.map)
                                                    }}
                                                    >
                                                        <AdvancedMarker
                                                            key="User"
                                                            position={userMarker}>
                                                        </AdvancedMarker>
                                                </Map>
                                                </APIProvider>
                                            </div>
                                        </div>
                                        )}
                                        <div className="checkout-from">
                                            <form>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="input-wrap">
                                                            <label>Email address <span>*</span></label>
                                                            <input type="email" name="email" value={formData.email} onChange={handleChange} />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-12">
                                                        <div className="input-wrap">
                                                            <label>First name <span>*</span></label>
                                                            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-12">
                                                        <div className="input-wrap">
                                                            <label>Last name <span>*</span></label>
                                                            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                                                        </div>
                                                    </div>
                                                    {showBilling && (
                                                    <div className="col-lg-12 col-12">
                                                        <div className="input-wrap">
                                                            <label>Country / Region <span>*</span></label>
                                                            <p>Kyrgyzstan</p>
                                                        </div>
                                                    </div>
                                                    )}
                                                    <div className="col-lg-12">
                                                        <div className="input-wrap">
                                                            <label>Street address <span>*</span></label>
                                                            <input type="text" placeholder="House number and street name" name="streetAddress" value={formData.streetAddress} onChange={handleChange} />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="input-wrap">
                                                            <label>Phone <span>*</span></label>
                                                            <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 col-12">
                                                        <h3 className="mb-3">ADDITIONAL INFORMATION</h3>
                                                        <div className="input-wrap">
                                                            <label>Order notes (optional)</label>
                                                            <textarea rows="5" cols="10" placeholder={showBilling ? "Notes about your order, e.g special notes for delivery." : "Notes about your order, e.g special notes for pickup."} name="orderNotes" value={formData.orderNotes} onChange={handleChange}></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            <div className="col-lg-6 col-12">
                                <div className="checkout-container">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <td style={{ borderTop: 'none' }}>
                                                    <label className='sizeLabel' htmlFor="shipping">Shipping</label>
                                                </td>
                                                <td style={{ borderTop: 'none' }}>
                                                    <select className='select-shipping' value={selectedShipping} onChange={handleShippingChange}>
                                                        <option value="delivery">Deliver</option>
                                                        <option value="point">Local pickup</option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Product</th>
                                                <th className="text-right">Subtotal</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {basket.map((item, index) => (
                                                <tr key={index}>
                                                    <td>{`${item.title} × ${item.quantity}`}</td>
                                                    <td className="text-right">{(item.price * item.quantity).toFixed(2)}som</td>
                                                </tr>
                                            ))}
                                            <tr>
                                                <td>Subtotal</td>
                                                <td className="text-right">
                                                    <CurrencyFormat
                                                        value={subTotalPrice()}
                                                        displayType={'text'}
                                                        thousandSeparator={true}
                                                        suffix={'som'}
                                                        renderText={value => <div>{value}</div>}
                                                    />
                                                </td>
                                            </tr>
                                            {selectedShipping === 'delivery' && (
                                                <tr>
                                                    <td>Shipping</td>
                                                    <td className="text-right">
                                                        <span className="">{shippingCost.toFixed(2)}som</span>
                                                    </td>
                                                </tr>
                                            )}
                                            
                                            <tr>
                                                <td>Discount</td>
                                                <td className="text-right">
                                                    <span className="">{discount.toFixed(2)}som</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Total</td>
                                                <td className="text-right total">
                                                    <CurrencyFormat
                                                        value={totalPrice()}
                                                        displayType={'text'}
                                                        thousandSeparator={true}
                                                        suffix={'som'}
                                                        renderText={value => <div>{value}</div>}
                                                    />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    {(showBilling) ? 
                                        <div className="payment-method-wrapper">
                                        <div className="payment-method">
                                            <div className="payment-method-title">Cash on delivery</div>
                                            <p>Pay with cash upon delivery.</p>
                                        </div>
                                        <div className="privacy-policy-wrap">
                                            <p className="privacy-policy">
                                                Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="#">privacy policy</a>.
                                            </p>
                                            <button className="place-order-btn" onClick={placeOrder}>Place order</button>
                                        </div>
                                    </div>
                                    : (
                                        <div className="payment-method-wrapper">
                                        <div className="payment-method">
                                            <div className="payment-method-title">Pickup Address</div>
                                            <p><strong>Mac Burger & Pizza</strong><br/>
                                            137 Yusup Abdrahmanov Str. Crossing Toktogul, Bishkek, Kyrgyzstan</p>
                                        </div>
                                        <div className="privacy-policy-wrap">
                                            <button className="place-order-btn" onClick={placeOrder}>Place order</button>
                                        </div>
                                    </div> 
                                    )}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Checkout