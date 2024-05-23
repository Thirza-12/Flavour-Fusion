import img from '../assets/food-item.png'
const item=(props)=>{
    return(
        <>
            <div className="item">
                <div className="food-logo">
                    <img src={img} alt="" />
                </div>
                <div className="food-desc">
                    <h5 className="green-text">{props.title}______${props.price}</h5>
                    <div className="green-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, ex.
                    </div>
                </div>
            </div>
        </>
    );

}
export default item;