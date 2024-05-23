import logo from '../assets/logo-2.png'
const Footer=()=>{
    return(
        <>
            <div className="footer" id='contact'>
                <div className="flex-1">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="white-text">Happiness is</div>
                    <div className="pink-text">Homemade</div>
                    <div className="lorem">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, amet.</div>
                </div>
                <div className="flex-2">
                    <div className="pink-text-1">Explore</div>
                    <div className="nav-items">
                        <a href="">Home</a>
                        <a href="">About Us</a>
                        <a href="">Menu</a>
                        <a href="">Reservations</a>
                        <a href="">News</a>
                        <a href="">Contact</a>
                    </div>
                </div>
                <div className="flex-3">
                    <div className="pink-text-1">Reserve Now</div>
                    <div className="address">123 Anywhere St., Any City, ST 12345</div>
                    <div className="number">+123-456-7890</div>
                    <div className="mail-1">hello@brunchplace.com</div>
                    <div className="mail-2">www.brunchplace.com</div>
                </div>
            </div>
        </>
    );

}
export default Footer;