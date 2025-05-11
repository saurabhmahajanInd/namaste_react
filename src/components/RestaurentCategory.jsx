import React, { useState } from 'react'
import RestaurentItem from '../components/RestaurentItem';

const RestaurentCategory = ({menuCategory, showItem, setExpansion}) => {

 //const [showItem, setShowItem] = useState(false);

  return (
    <>  
    <div className="p-3 mx-auto w-1/2">
        <div className="shadow flex place-content-between cursor-pointer" onClick={()=> { setExpansion()}}>
            { menuCategory?.menuTitle } ({ menuCategory?.menuItems?.length }) 
            <span>O/C</span>
        </div>

        
        { showItem && <div className="text-left my-2 px-2">
            {
                menuCategory?.menuItems?.map((foodItem) => {
                    return <RestaurentItem key={foodItem?.itemName} data={foodItem} />;
                })
            }
            </div>
        }
       
    </div>
   
      
       
    </>
  )
}

export default RestaurentCategory;