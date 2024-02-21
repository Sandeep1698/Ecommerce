import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

const HomeSectionCarosel = ({ data, sectionName }) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    };
    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);
    const syncActiveIndex = ({ item }) => setActiveIndex(item)

    const items = data.slice(0, 10).map((item) => <HomeSectionCard product={item} />)
    console.log("activeIndex",activeIndex);
    return (
        <div className="border">
            <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
            <div className="relative p-5">
            <AliceCarousel
                    items={items}
                    keyboardNavigation={true}
                    responsive={responsive}
                    disableDotsControls
                    renderPrevButton={()=>{
                        return (activeIndex !== 0 && <Button variant="contained" onClick={slidePrev}  sx={{ bgcolor: "white", color: "black", position: "absolute", top: "8rem", left: "0rem " }}><KeyboardArrowLeft /></Button>)
                    }}
                    renderNextButton={()=>{
                        return (activeIndex !== items.length - 5 && <Button variant="contained" onClick={slideNext} sx={{ bgcolor: "white", color: "black", position: "absolute", top: "8rem", right: "0rem" }}><KeyboardArrowRight /></Button>)
                    }}
                     />
            </div>
        </div>
    )
}

export default HomeSectionCarosel