import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import {getMenu} from '../../helpers/admin-helpers'

function Menu() {
    const [menus,setMenus]=useState([])
    
    useEffect(()=>{
      getMenu().then((menu)=>{
        console.log(menu.data.menu,'axios menu');
        setMenus(menu.data.menu)
       
      })
    },[])
  return (
    <div className='p-5'>
    <div className='px-10 space-x-2'>
     <Link to={'/admin/add-menu'}>
     <button
    className=" rounded-md border border-green-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-green-600 hover:bg-green-300">
 Add Dishes
  </button></Link>
 
  </div>
   <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
 
 
{
  menus.map((data)=>{

return(
      <div
        key='id'
        className="rounded overflow-hidden shadow-lg dark:shadow-gray-800"
      >

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{data.name}</div>
        
          {/* <p className="text-gray-700 dark:text-gray-300 text-base">
       price
          </p> */}

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

export default Menu
