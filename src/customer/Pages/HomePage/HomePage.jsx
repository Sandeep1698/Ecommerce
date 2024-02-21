import React from 'react'
import MainCarosel from '../../components/HomeCarosel/MainCarosel'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel'
import {mens_shirt} from '../../../Data/mens_shirt'
import {mens_shoes} from '../../../Data/mens_shoes'

const HomePage = () => {
  const jwt = localStorage.getItem("jwt");
  return (
    <div>
        <MainCarosel />
        {jwt && <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
          <HomeSectionCarosel data={mens_shirt} sectionName={"Men's Shirt"}/>
          <HomeSectionCarosel data={mens_shoes} sectionName={"Men's Shoes"}/>
          <HomeSectionCarosel data={mens_shirt} sectionName={"Men's Kurta"}/>
          <HomeSectionCarosel data={mens_shirt} sectionName={"Women's Saree"}/>
        </div>}
    </div>
  )
}

export default HomePage