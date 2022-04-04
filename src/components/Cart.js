import './Cart.css'

function Cart () {
    return(
        <section className='cart-item'>
            <a className='cart-title'>Cart</a>
            <div className="circle">
                <p className="product-count">0</p>
            </div>
        </section>
    )
}

export default Cart;