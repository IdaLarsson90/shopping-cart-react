import './Header.css'
import Cart from "./Cart";

function Header () {
    return(
        <header>
            <img className='logo' src="https://images.unsplash.com/photo-1500145588304-deb802b4af76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"></img>
            <Cart />
        </header>
    )
}

export default Header;