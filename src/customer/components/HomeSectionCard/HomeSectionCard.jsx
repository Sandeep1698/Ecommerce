import React from 'react'

const HomeSectionCard = ({ product }) => {
    return (
        <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[12rem] mx-3 border' >
            <div className='h-[13rem] w-[10rem]'>
                <img className='object-cober object-top w-fill h-full' src={product.imageUrl} alt='' />
            </div>
            <div className='p-4'>
                <h3 className='text-lg font-medium text-gray-900'>{product.brand}</h3>
                <p className='mt-2 text-sm text-gray-500'>{product.title}</p>
            </div>
        </div>
    )
}

export default HomeSectionCard