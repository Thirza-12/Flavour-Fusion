const Cards3=(props)=>{
    return(
        <>
            <div className="card">
            <div className="food">
                <img src={props.img} alt="" />
            </div>
            <div className="head-desc">
                <h3 className="green-text">{props.heading}</h3>
                <p>{props.paragraph}</p>
            </div>
            <div className="read-more">
                <p>Read more</p>
            </div>
            </div>
        </>
    );

}
export default Cards3;