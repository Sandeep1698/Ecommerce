import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate = useNavigate();

    return (
        <div onClick={()=>navigate('/account/order/${5}')} className='p-5 shadow-md shadow-black hover:shadow-2xl'>
            <Grid container spacing={2} sx={"space-between"}>
                <Grid item xs={6}>
                    <div className='flex cursor-pointer'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top' src='https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/10331501/2023/8/31/68a5eb99-210a-4196-a52e-da62edd669551693465469757-US-Polo-Assn-Men-White--Grey-Colourblocked-Sneakers-48916934-11.jpg' alt='' />
                        <div className='ml-5 space-y-2'>
                            <p className=''>Mens Shoes White</p>
                            <p className='opacity-50 text-xs font-semibold'>Size : UK7</p>
                            <p className='opacity-50 text-xs font-semibold'>Color : White</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <p>₹8377</p>
                </Grid>
                <Grid item xs={4}>
                    {true && <div>
                    <p>
                        <AdjustIcon sx={{width:"15px",height:"15px"}} className='text-green-600 mr-2 text-sm'/>
                        <span>Delivered On March 03</span>
                    </p>
                    <p className='text-xs'>Your Item Has Been Delivered</p>
                    </div>}
                    {false && <p>
                        <span>Expected delivery on Mar 03</span>
                    </p>}
                </Grid>
            </Grid>
        </div>
    )
}

export default OrderCard