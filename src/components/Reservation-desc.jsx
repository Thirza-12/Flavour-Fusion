const Resdesc=()=>{
    return(
        <>
            <div className="res-desc">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque et repudiandae quasi numquam laudantium laborum nostrum, qui recusandae officia libero.</p>
            </div>
            <div className="res-items">
                <div className="res-item-1">
                    <div className="people">
                        <p>People</p>
                        <label htmlFor="People"></label>
                        <select name="people" id="people">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div className="date">
                        <p>Date</p>
                        <label htmlFor="date"></label>
                        <input type="date" name="date" id="date" />
                    </div>

                </div>
                <div className="res-item-2">
                    <div className="time">
                        <p>Time</p>
                        <label htmlFor="time"></label>
                        <input type="time" name="time" id="time" />
                    </div>
                    <div className="book-table-2">
                        <div><a href="#"className="green-text">Book a Table</a></div>
                    </div>
                </div>
            </div>
        </>
    );

}
export default Resdesc;