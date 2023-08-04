import React from 'react'
import img1 from "./gay-watching-movie-5365080-4491740 (1) 1.png";

const HeaderHome = () => {
  return (
    <div className="bg-gradient-to-r from-pink-500 to-pink-300  mx-10 rounded-border-100">
    <div className="">
        <div className="grid grid-cols-grid-260">
            <div className='flex justify-center flex-col relative h-80'>
                <h1 className=' text-prim-color font-bold text-3xl pl-10 mb-5'>ShowHub</h1>
                <span className='pl-10 text-second-color lg:leading-3 lg:tracking-widest text-3xl pb-4'>enjoy watching</span>
                <p className=' lg:pl-20 max-sm:px-6 text-second-color lg:pt-10 text-sm align-middle'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti modi nam ullam ut! Tempora doloribus sunt eveniet deleniti, dicta obcaecati soluta cupiditate</p>
                <a href="" className='py-2 lg:mt-4 max-sm:m-0 flex flex-row-reverse px-8 bg-black text-second-color rounded-lg mb-4 w-fit absolute bottom-0 lg:right-0'>start now</a>
            </div>
            <div className='relative'>
                <img src={img1} alt="" className=' w-11/12 flex justify-center items-center '/>
            </div>
        </div>
    </div>
</div>
  )
}

export default HeaderHome;