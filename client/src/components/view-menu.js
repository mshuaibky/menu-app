import React,{useEffect,useState} from 'react'
import {getMenu} from '../helpers/admin-helpers'


function ViewMenu() {
    const [item,setItems]=useState([])
    console.log(item,'namma item');
    useEffect(()=>{
        getMenu().then((menu)=>{
          
          setItems(menu.data.menu)
         
        })
      },[])
  return (
    <div className='p-5'>
    <div className='px-10 space-x-2'>
   
 
  </div>
   <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
 
 
{
    item.map((data)=>{
     return(
      <div
        key='id'
        className="rounded overflow-hidden shadow-lg dark:shadow-gray-800"
      >

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{data.name}</div>
        
        

        </div>
        <div className="px-6 pt-2 pb-2">
        
            <span
              key='tag'
              className="inline-block bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2"
            >
     {data.foodOne}
            </span>
          
        </div>
        <div className="px-6 pt-2 pb-2">
        
        <span
          key='tag'
          className="inline-block bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2"
        >
   {data.foodTwo}
        </span>
      
    </div>
    <div className="px-6 pt-2 pb-2">
        
        <span
          key='tag'
          className="inline-block bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2"
        >
   {data.foodThree}
        </span>
      
    </div>
        <div className='px-6 py-2 space-x-2'>

       

        </div>
      </div>)
 
 
})
}
  </div>
  </div>
  )
}

export default ViewMenu
