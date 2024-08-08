import logo from "../images/main-logo.png";
import cart from "../images/cart.png"
import user from "../images/user.png"
import search from "../images/search.png"
// import ham from "../images/ham.png"
// import wrong from "../images/wrong.png"
import { Link as ScrollLink } from 'react-scroll';
import { useNavigate } from "react-router-dom";
import { useCart } from '../context/CartContext';


const Navbar = () => {

    const {count} = useCart();

    // const navigateOn = () => {
    //     const ul = document.querySelector("ul");

    //     // const hidden = document.querySelector(".hidden");

    //     // hidden.style.transform = "translateX(0)";

    //     ul.classList.add("hide");
    //     document.querySelector(".ham").style.display = "none";
    //     document.querySelector(".wrong").style.display = "block";

    // }
    // const navigateOff = () => {
    //     const ul = document.querySelector("ul");

    //     // const hidden = document.querySelector(".hidden");

    //     // hidden.style.transform = "translateX(500%)";

    //     ul.classList.remove("hide");
    //     document.querySelector(".ham").style.display = "block";
    //     document.querySelector(".wrong").style.display = "none";
    // }

    
            const navigate = useNavigate();
    
    
           const   click = ()=>{
    
              navigate("/")
            }
    return (
        <div>

            {/* <nav className="nav">
                <div className="logo">
                    <img className="mx-3" src={logo} alt="img-logo" />
                </div>

                <ul className="navbar">
                    <li ><Link to="container"  smooth={true} duration={500}>Home</Link></li>
                    <li><Link to="container-service" smooth={true} duration={500}>Services</Link></li>
                    <li><Link to="product-container" smooth={true} duration={500}>Products</Link></li>
                    <li><Link to="watch-header" smooth={true} duration={500}>Watches</Link></li>
                    <li><Link to="sale-container" smooth={true} duration={500} >Sale</Link></li>
                    <li><Link to="blog-container" smooth={true} duration={500} >Blog</Link></li>
                    <li><a href="/">Page</a></li>
                    <div className="flex my-1.5">

                        <li><img className="h-4   cursor-pointer" src={search} alt="img" /></li>
                        <li><img className="h-4  cursor-pointer" src={user} alt="img" /></li>
                        <li><img className="h-4  cursor-pointer" src={cart} alt="img" /></li>

                    </div>
                </ul>

           
                <img className="ham" onClick={navigateOn} src={ham} alt="img" />
                <img className="wrong " onClick={navigateOff} src={wrong} alt="img" />


            </nav> */}


            <div className="navbar">

                <div className="logo">
                    <img onClick={click} src={logo} alt="img" />
                </div>

                <ul>
                    <li><ScrollLink to="main" smooth={true} duration={300}  >HOME</ScrollLink></li>
                    <li><ScrollLink to="container-service" smooth={true} duration={300}>SERVICES</ScrollLink></li>
                    <li><ScrollLink to="product-container" smooth={true} duration={300}>PRODUCTS</ScrollLink></li>
                    <li><ScrollLink to="watch-header" smooth={true} duration={300}>WATCHES</ScrollLink></li>
                    <li><ScrollLink to="sale-container" smooth={true} duration={300}>SALE</ScrollLink></li>
                    <li><ScrollLink to="blog-container" smooth={true} duration={300}>BLOG</ScrollLink></li>

                    <div className="user-item">
                        <img src={search} alt="img" />
                        <img onClick={()=>{ navigate("/login")}} src={user} alt="img" />
                        <div className="cart-btn-icon">

                        <img onClick={()=>{navigate("/cart")}} src={cart} alt="img" />
                        <span className="badge">{count}</span>
                        </div>


                    </div>
                </ul>



            </div>
            

        </div>
    )
}

export default Navbar;