import { NavLink } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footer justify-items-center bg-base-200 text-base-content p-10">
            <aside> 
                <NavLink to={'/'}><h4 className="logo-font">Gadget Store</h4></NavLink>
            </aside>

            <nav className="uppercase font-mono font-bold">
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Shop</a>
                <a className="link link-hover">cart</a>
                <a className="link link-hover">products</a>
                <a className="link link-hover">brands</a>
            </nav>
            <nav className="uppercase font-mono font-bold">
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">career</a>
                <a className="link link-hover">location</a>
            </nav>
            <nav className="uppercase font-mono font-bold">
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    )
}

export default Footer;