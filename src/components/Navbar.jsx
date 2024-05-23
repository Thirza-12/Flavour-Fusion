import logo from "../assets/logo.png";
const Navbar=()=>{
    return (
    <>
      <nav>
        <div className="logo-img">
          <img src={logo} alt="" />
        </div>
        <div className="navbar">
          <a href="#home">Home</a>
          <a href="#aboutus">About us</a>
          <a href="#menu">menu</a>
          <a href="#news">news</a>
          <a href="#reservation">reservations</a>
          <a href="#contact">contact</a>
        </div>
      </nav>
    </>
    );
};
export default Navbar;