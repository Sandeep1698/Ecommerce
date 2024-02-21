import React, { useEffect } from 'react'
import AdressCard from '../AddressCard/AdressCard'
import { Button } from '@mui/material'
import CartItem from '../Cart/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById } from '../../../Redux/Customers/Order/Action'
import { useLocation } from 'react-router-dom'
import { createPayment } from '../../../Redux/Customers/Payment/Action'

const OrderSummary = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const orderId = searchParams.get("order_id")
    const {order} = useSelector(store=>store)
    console.log("order",order.order?.orderItems);
    useEffect(()=>{
        dispatch(getOrderById(orderId))
    },[orderId])

    const handleCheckout=()=>{
        dispatch(createPayment(orderId ))
    }

  return (
    <div>
        <div className='p-5 shadow-lg rounded-s-md border'>
            <AdressCard address={order.order?.shippingAddress}/>
            <div className='p-10'>
            <div className='lg:grid grid-cols-3 relative'>
                <div className='col-span-2'>
                    {order.order?.orderItems?.map((item)=>(<CartItem item={item} showButton={false}/>))}
                </div>
                <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                    <div className='border p-5'>
                        <p className='uppercase font-bold opacity pb-4'>Price Details</p>
                        <hr />
                        <div className='space-y-3 font-semibold mb-10'>
                            <div className='flex justify-between pt-3 text-black'>
                                <span>Price</span>
                                <span>₹{order.order?.totalPrice}</span>
                            </div>
                            <div className='flex justify-between pt-3 '>
                                <span>Discount</span>
                                <span className='text-green-600'>-₹{order.order?.discount}</span>
                            </div>
                            <div className='flex justify-between pt-3 '>
                                <span>Delivery Charges</span>
                                <span className='text-green-600'>₹0</span>
                            </div>
                            <hr />
                            <div className='flex justify-between pt-3 font-bold'>
                                <span>Total Amount</span>
                                <span className='text-green-600 '>₹{order.order?.totalDiscountedPrice}</span>
                            </div>
                        </div>
                        <Button onClick={handleCheckout} variant='contained' className='w-full mt-5' sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd" }}>
                            Checkout
                        </Button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default OrderSummary