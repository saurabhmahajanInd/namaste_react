import React from "react";
import { Link } from "react-router-dom";

const restroStyle = {
  backgroundColor: "orange",
  width: "200px",
  padding: "5px",
  margin: "20px",
};

const RestroCard = (props) => {
  console.log(props);
  const { restroInfo } = props;
  console.log(props);
  const { name, deliveryTime, cuisines, ratings } = restroInfo;

  return (
    <React.Fragment>
      {/* <div>Tester</div> */}
      <div id="restro-card" style={restroStyle}>
    <Link to="/restro/1234"> 
        <img
          alt="restaurent image"
          src="https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.jpg?s=612x612&w=0&k=20&c=v48RE0ZNWpMZOlSp13KdF1yFDmidorO2pZTu2Idmd3M="
        />
        </Link>
        {/* <h2>Saurabh</h2> */}
        <h2>{name}</h2>
        <h4>Delivery in {deliveryTime} mins</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h5>{ratings}</h5>
        <div><Link to="/restro/123"> Details...</Link></div>
      </div>
    </React.Fragment>
  );
};

export const FnRestroCardwithLabel = (RestroCard) => {
  return((props)=> {
    return (
      <>      
        <label className="absolute bg-black rounded-2xl text-white py-4 px-5">Promoted</label>
        <RestroCard {...props}/>
      </>
    );
  })
}

export default RestroCard;