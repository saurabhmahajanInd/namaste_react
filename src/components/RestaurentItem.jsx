import React from 'react'

const RestaurentItem = ({data}) => {
  return (
    <div className="pb-2 mb-2 border border-solid border-gray-600 hover:bg-amber-700 cursor-pointer">
        <div className="font-bold">{data?.itemName} - {data?.price}</div>
        <div className="italic">{data?.description}</div>
    </div>
  )
}

export default RestaurentItem;