import './App.css'
import Navbar from "/components/Navbar"
import FirstPage from '/components/First-Page'
import SecondPage from '/components/Second-Page'
import Headings3 from  '/components/Headings-3'
import Cards3 from '/components/Cards-3'
import First_Card_Image from '/assets/card-1-3.png'
import Second_Card_Image from '/assets/card-2-3.png'
import Third_Card_Image from '/assets/card-3-3.png'
import FourthPage from '/components/Fourth-Page'
import Menu from '/components/Menu'
import Menudesc from '/components/Menu-desc'
import Chefcard from '/components/Chef-card'
import Chef1 from '/assets/Chef-1.png'
import Chef2 from '/assets/Chef-2.png'
import Chef3 from '/assets/Chef-3.png'
import Reshead from '/components/Reservation-head'
import Resdesc from '/components/Reservation-desc'
import EighthPage from '/components/Eighth-page'
import Cards9 from '/components/Cards-9'
import Foot from '/components/Footer'
function App() {

  return (
    <>
  <div className="main-container">

    {/* ---------------First Page----------------- */}

    <div className="first-page" id='home'>
      <Navbar/>
      <FirstPage/>
    </div>

    {/* ----------------Second Page------------------- */}

    <div className="second-page" id='aboutus'>
      <SecondPage/>
    </div>

    {/* ---------------Third Page----------------------- */}

    <div className="third-page">
      <Headings3/>
      <div className="cards-3">
      <Cards3 heading="Old Fashioned Oatmeal" paragraph="Unlike quick-cooking oats, old-fashioned oatmeal has time to turn extra-creamy and luscious with just a few minutes more of cooking time." img={First_Card_Image}/>
      <Cards3 heading="Cranberry Pancake" paragraph="Start your day off right with these easy pancakes, packed with cranberry's sour spike. One of you can make the coffee and heat the maple syrup while the other makes the pancakes." img={Second_Card_Image}/>
      <Cards3 heading="Classic Omelette" paragraph="Here's how to make an omelette! This French technique makes an omelette recipe just the way Julia Child would and it cooks up in seconds" img={Third_Card_Image}/>
      </div>
    </div>

    {/* -------------Fourth Page---------------------- */}

    <div className="fourth-page">
      <FourthPage/>
    </div>

    {/* -------------Fifth Page--------------------- */}

    <div className="fifth-page" id='menu'>
      <div className="menu-box">
        <div className="menu-heading">
          <h1 className="green-text">Delicious Menu</h1>
        </div>
        <div className="menu-items">
          <div className="left-menu">
            <Menu title="Classic Omelette" price="15.00"/>
            <Menu title="Cranberry Pancake" price="10.00"/>
            <Menu title="Classic Pesto" price="11.50"/>
            <Menu title="Spaghetti Indian Style" price="12.13"/>
          </div>
          <div className="right-menu">
            <Menu title="Classic Omelette" price="15.00"/>
            <Menu title="Cranberry Pancake" price="10.00"/>
            <Menu title="Classic Pesto" price="11.50"/>
            <Menu title="Spaghetti Indian Style" price="12.13"/>
          </div>
        </div>
      </div>
      <Menudesc/>
    </div>

    {/* -------------Sixth Page---------------------- */}

    <div className="sixth-page">
      <div className="chef-heading">
        <h1 className='pink-text'>Our Chefs</h1>
        <p className='green-text'>Talent and experience member</p>
      </div>
      <div className="chefs">
        <Chefcard title="Dan Larrson" img={Chef1}/>
        <Chefcard title="Dana Sonlar" img={Chef2}/>
        <Chefcard title="Deane Lars" img={Chef3}/>
      </div>
    </div>

    {/* ------------Seventh page--------------------- */}

    <div className="seventh-page" id='reservation'>
      <div className="reservation-heading">
        <Reshead/>
      </div>
      <div className="reservation-desc">
        <Resdesc/>
      </div>
    </div>

    {/* ------------Eighth page------------------------ */}

    <div className="eighth-page">
      <EighthPage/>
    </div>

    {/* ------------Ninth page------------------------- */}

    <div className="ninth-page" id='news'>
      <div className="heading-9">
        <h1>Latest Food and Recipe news</h1>
      </div>
      <div className="cards-9">
        <Cards9 heading="Cooking Perfect Fried Rice in minutes" img={First_Card_Image} paragraph="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, nihil?"/>
        <Cards9 heading="Secret of making heart shaped eggs" img={Second_Card_Image} paragraph="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, nihil?"/>
        <Cards9 heading="How to check steak if it is tender or not" img={Third_Card_Image} paragraph="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, nihil?"/>
      </div>
    </div>

    <hr />

    {/* ---------------Footer-------------------------- */}

    <Foot />

  </div>
</>
  )
}

export default App
