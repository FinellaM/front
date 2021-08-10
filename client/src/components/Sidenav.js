import { Link } from 'react-router-dom';

const Sidenav = () => {

    const closeNav = (e) => {
        e.preventDefault();
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("mySidenav").style.boxShadow = "rgb(0 0 0 / 30%) 70px 0px 30px 50px";
    }
    
    const clickNav = (index) => {
        document.getElementsByClassName("nav-link")[0].style.color = "black";
        document.getElementsByClassName("nav-link")[1].style.color = "black";
        document.getElementsByClassName("nav-link")[2].style.color = "black";
        document.getElementsByClassName("nav-link")[3].style.color = "black";
        document.getElementsByClassName("nav-link")[4].style.color = "black";
        document.getElementsByClassName("nav-link")[index].style.color = "#e7e7e7";
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("mySidenav").style.boxShadow = "rgb(0 0 0 / 30%) 70px 0px 30px 50px";

        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div id="mySidenav" className="sidenav">
            <a href="" className="closebtn" onClick={(e) => closeNav(e)}>&times;</a>
            <Link to="/" className="nav-link" onClick={() => clickNav(0)}>Home</Link>
            <Link to="/shop" className="nav-link" onClick={() => clickNav(1)}>Shop</Link>
            <Link to="/about-us" className="nav-link" onClick={() => clickNav(2)}>About Us</Link>
            <Link to="/contact-us" className="nav-link" onClick={() => clickNav(3)}>Contact Us</Link>
            <Link to="/stockist" className="nav-link" onClick={() => clickNav(4)}>Stockists</Link>
        </div>
    );
}
 
export default Sidenav;