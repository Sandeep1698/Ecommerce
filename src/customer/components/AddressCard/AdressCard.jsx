import React from 'react'

const AdressCard = ({address}) => {
  console.log("adress:",address);
  return (
    <div>
        <div className='space-y-3'>
            <p className='font-semibold text-left'>{address?.firstName+" "+address?.lastName}</p>
            <p className='text-left'>{address?.streetAddress},{address?.city},{address?.state},{address?.zipCode}</p>
            <div className='space-y-1'>
                <p className='font-semibold text-left'>Phone Number :</p>
                <p className='text-left'>{address?.mobile}</p>
            </div>
        </div>
    </div>
  )
}

export default AdressCard