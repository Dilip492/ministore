import image from "../images/single-image1.png";

const Sale = ()=>{
    return (
        <div>

            <div className="sale-container">
                <div className="left-sale">
                    <div>

                   <h3>10% off</h3>
                    </div>
                   <h1>NEW YEAR<br></br>SALE</h1>

                   <button className="shop-btn">SHOP SALE</button>


                </div>
                <div className="right-sale">
  
                    <img src={image} alt="img" />

                </div>
                
            </div>

        </div>
    )



}

export default Sale;
