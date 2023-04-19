import React from 'react'

function Genre({icon, name, specialCase, changeCategory }) {
  return (
      <div className='flex items-center gap-2 ml-5 mb-3 cursor-pointer'
          onClick={() => {
            let category = ((specialCase || name).toLowerCase().split(' ').join('-'))
            changeCategory(category)
          }}
      >
          <button className='text-white p-2 bg-base-light rounded transform transition duration-200 scale-100 hover:scale-105 hover:text-black hover:bg-white'>
            {icon}
          </button> 
          <p className='text-xl font-medium hover:text-gray-300 items-center hidden sm:block genre'>
            {name}
          </p>
      </div>
  )
}

export default Genre