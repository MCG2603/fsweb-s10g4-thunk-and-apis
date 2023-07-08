import React from 'react'
import { useSelector } from 'react-redux';


function Item() {
  const data= useSelector(store=>store.data);


  return (
    <div>
    {data && <div className='shadow-md bg-white text-center'>
      <p className='text-2xl p-10'>{data}</p>
    </div>}
    </div>
  )
}

export default Item