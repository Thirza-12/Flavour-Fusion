const Chef=(props)=>{
    return(
        <>
           <div className="chef">
            <img src={props.img} alt="" />
            <h4>{props.title}</h4>
            <p>Executive Chef</p>
           </div>
        </>
    );

}
export default Chef;