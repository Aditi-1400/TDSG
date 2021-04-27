import "./styles/leadership.css";


function Leadership(){

    return(
      <div id = "leadership" class = "container">
		<a href="#" id="scroll" style={{display: "none"}}><span></span></a>

      <h1> Leadership</h1>
        <div class = "leadership row">
          <div class="card m-5 col-lg-3" style={{width: "23rem"}}>
            <img src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="..."></img>
              <h4 className = "leader-name">Leader Name</h4>
              <div className="card-body">
                <p class="card-text designation">Leader Designation</p>
                <button class="read-more hvr-bounce-to-right">Read More ></button> 
            </div>
          </div>

          <div class="card m-5 col-lg-3" style={{width: "23rem"}}>
            <img src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="..."></img>
              <h4 className = "leader-name">Leader Name</h4>
              <div className="card-body">
                <p class="card-text designation">Leader Designation</p>
                <button class="read-more hvr-bounce-to-right">Read More ></button> 
            </div>
          </div>
          <div class="card m-5 col-lg-3" style={{width: "23rem"}}>
            <img src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="..."></img>
              <h4 className = "leader-name">Leader Name</h4>
              <div className="card-body">
                <p class="card-text designation">Leader Designation</p>
                <button class="read-more hvr-bounce-to-right">Read More ></button> 
            </div>
          </div>
    </div>
    </div>

    );
}

export default Leadership;