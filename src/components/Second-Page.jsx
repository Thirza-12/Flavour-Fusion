import SecondPage1 from '../assets/second-page-1.png'
import SecondPage2 from '../assets/second-page-2.png'
const SecondPage=()=>{
    return (
        <>
    <div className="s-img-1">
        <img src={SecondPage1} alt="" />
    </div>
    <div className="s-img-1-h1">
        <h1>The</h1>
        <h2>Restaurant</h2>
    </div>
    <div className="s-img-2">
        <img src={SecondPage2} alt="" />
    </div>
    <div className="s-desc">
        <p>
        Indulge in culinary excellence at our restaurant, where every dish tells a
        story of passion and flavor. Savor unforgettable moments in an ambiance
        that merges elegance with warmth, creating a dining experience to cherish.
        </p>
        <div className="b-1">Read More</div>
    </div>
    </>
    );
}
export default SecondPage;