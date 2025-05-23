import React from 'react'
import "./ProductCard.css"
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    
    return (
        <div onClick={()=>navigate(`/product/${product.id}`)} className='productCard w-[12rem] m-3 transitin-all cursor-pointer'>
            <div className='h-[20rem]'>
                <img className='h-full w-full object-cover object-left-top' src={product.imageUrl} alt=''></img>
            </div>
            <div className='textPart bg-white p-3'>
                <div>
                    <p className='font-bold opacity-60'>{product.brand}</p>
                    <p>{product.title}</p>
                </div>
                <div className='flex items-center space-x-2'>
                    <p className='font-semibold'>&#x20B9;{product.discountedPrice}</p>
                    <p className='line-through opacity-50'>&#x20B9;{product.price}</p>
                    <p className='text-green-600 font-semibold '>{product.discount}% off</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard