import React from 'react'
import { useFormik } from 'formik'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import {menuDetails} from '../../helpers/admin-helpers'


function AddMenu() {
    const navigate=useNavigate()
    const formik=useFormik({
     initialValues:{
        name:'',
        foodOne:'',
        foodTwo:'',
        foodThree:''
     },
     validateOnBlur:false,
     validateOnChange:false,
     onSubmit:async values=>{
        console.log(values,'namma values');
        let Details=menuDetails(values)
        toast.promise(Details,{
            loading:'creating...',
            success:<b>menu added</b>,
            error:<b>something went wrong</b>
        })
        Details.then((data)=>{
            navigate('/admin/landing-page')
        })
     }
    })
  return (
    <div>
      <div className='p-10'>
      

        <form onSubmit={formik.handleSubmit} className="mx-auto max-w-lg">
      <label className="block font-medium text-gray-700 mb-2" htmlFor="name">
       catagory
      </label>
      <input
      name='name'
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.name}
        className="w-full border border-gray-400 p-2 rounded-md mb-4"
        type="text"
        id="name"
      
      />
     
   
       
        <label className="block font-medium text-gray-700 mb-2" htmlFor="name">
      firstDish
      </label>
      <input
         name='foodOne'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.foodOne}
        className="w-full border border-gray-400 p-2 rounded-md mb-4"
        type="text"
        id="name"
     
      
      />
       
       <label className="block font-medium text-gray-700 mb-2" htmlFor="name">
       secondDish
      </label>
      <input
         name='foodTwo'
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.foodTwo}
        className="w-full border border-gray-400 p-2 rounded-md mb-4"
        type="text"
        id="name"
     
      
      />
       
       <label className="block font-medium text-gray-700 mb-2" htmlFor="name">
       thirdDish
      </label>
      <input
         name='foodThree'
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.foodThree}
        className="w-full border border-gray-400 p-2 rounded-md mb-4"
        type="text"
        id="name"
     
      
      />





<div className='space-x-5'>


      <button className= " bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700" type="submit">
      Submit
      </button>
    
      <button 
      type='submit'
      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700" >
      
      Back
      </button>
      
</div>
      
    </form>
    </div>
    </div>
  )
}

export default AddMenu
