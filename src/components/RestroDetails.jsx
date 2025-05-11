
/*
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useRestaurentDetails from '../utils/useRestaurentDetails';

const RestroDetails = () => {
  //const [restaurentData, setRestaurentData] = useState(null);

//   useEffect(() => {
//     //const { resId}  = useParams();
//     const restroData = fetchData();
//   }, []);

//   const fetchData = async () => {
//     const data = await fetch("https://raw.githubusercontent.com/saurabhmahajanInd/mockdata/refs/heads/main/menu.json?"+ new Date() );
//     const result = await data.json();
//      setRestaurentData(result.data);
//   }

// This is a custom hook
const restaurentData = useRestaurentDetails(); 

 if(restaurentData == null)  return <div>No Data....</div>  
 
   return (
    <>
    <div>Data Here</div>
    {restaurentData.map((menu) => {
       return <div key={menu.menuId}>{menu.menuItem}</div>
    })}
     
      </>
    )
}

export default RestroDetails

*/




import React, {useState} from 'react';
import useRestaurentDetails from '../utils/useRestaurentDetails';
import RestaurentCategory from '../components/RestaurentCategory';


const RestroDetails = () => {

  const restaurantData = useRestaurentDetails();
  const [expandedCategory, setExpandedCategory] = useState(1);
  console.log(restaurantData)

  const setCategoryExpansion = (idx) => {
    // debugger;
    if(idx == expandedCategory) {
      idx = null;
    }
    setExpandedCategory(idx);
  }

  if(restaurantData == null) {
    return <>Loading...</>
  } else {
    return (
      <>
      <div className="font-bold text-2xl text-center">{restaurantData?.restaurentName}</div>
      <div className="text-center">
          {
            restaurantData?.menuCategory?.map((menuCategory, index)=> {
              return <RestaurentCategory key={menuCategory?.menuCategoryId} menuCategory={menuCategory} 
              showItem={index === expandedCategory} setExpansion={ () => { setCategoryExpansion(index) }}  />
            })
          }
      </div>
      </>
    )
  }
}

export default RestroDetails