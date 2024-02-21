import React from 'react'
import AdressCard from '../AddressCard/AdressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
  return (
    <div className='px-5 lg:px-20'>
        <div  style={{"text-align": "left"}}>
            <h1 sx={{alignItems:"left"}} className='font-bold text-xl py-7'>Delivery Address</h1>
            <AdressCard />
        </div>
        <div className='py-20'>
            <OrderTracker activeStep={3}/>
        </div>
        <Grid className='space-y-5' container>
            {[1,1,1,1,1].map((item)=>
            <Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems:"center",justifyContent:"space-between"}}>
                <Grid item xs={6}>
                    <div className='flex items-center space-x-4'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top' src='https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/10331501/2023/8/31/68a5eb99-210a-4196-a52e-da62edd669551693465469757-US-Polo-Assn-Men-White--Grey-Colourblocked-Sneakers-48916934-11.jpg' alt=''/>
                        <div className='space-y-2 ml-5 ' style={{"text-align": "left"}}>
                            <p className='font-semibold'>Red Tape Mens White shoes</p>
                            <p className='space-x-5 opacity-50 text-xs font-semibold'><span>Color : White</span> <span>Size : UK7</span></p>
                            <p>Seller : Red Tape India</p>
                            <p>₹ 8377</p>
                        </div>
                    </div>
                </Grid>
                <Grid item >
                    <Box sx={{color:deepPurple[500]}}>
                        <StarBorderIcon sx={{fontSize:"2rem"}} className='px-2' />
                        <span>Rate & Review Product</span>
                    </Box>
                </Grid>
            </Grid>
            )}
        </Grid>
    </div>
  )
}

export default OrderDetails