const Cards9=(props)=>{
    return(
        <>
            <div className="ninth-card">
                <div className="ninth-food">
                    <img src={props.img} alt="" />
                </div>
                <div className="head-desc-9">
                    <h3 className="pink-text">{props.heading}</h3>
                    <p className="white-text">{props.paragraph}</p>
                </div>
                <div className="pink-text">
                    <p>Feb 24,2020 | Category | 4 comments</p>
                </div>
            </div>

        </>
    );

}
export default Cards9;