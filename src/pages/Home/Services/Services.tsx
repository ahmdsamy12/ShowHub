import React from 'react'
import MainTitle from '../../../components/MainTitle/MainTitle'


const Services = () => {
  return (
    <div className='service px-10 bg-gray-100 pt-5'>
      <MainTitle title='principal service' />
      <div className='service-card grid grid-cols-grid-260 gap-8'>
        <div className="box bg-second-color">
          <h3 className=' bg-prim-color text-second-color text-center p-3 rounded-2xl'>basic</h3>
          <p className=' py-3 px-3 leading-10'>
            Watch all you want. Ad-free. <br />
            Recommendations just for you. <br />
            Change or cancel your plan anytime. <br />
            Resolution          <span className=' ml-10'>480p</span>  <br />
            Video quality        <span className=' ml-10'>Good</span>  <br />
            Monthly price         <span className='ml-10'>MAD65</span>
          </p>
          <a href="#" className='bg-prim-color text-second-color text-center p-3 rounded-2xl w-full block'>buy</a>
        </div>
        <div className="box bg-second-color">
          <h3 className=' bg-prim-color text-second-color text-center p-3 rounded-2xl'>standard</h3>
          <p className='py-3 px-3 leading-10'>
            Watch all you want. Ad-free. <br />
            Recommendations just for you. <br />
            Change or cancel your plan anytime. <br />
            Resolution          <span className=' ml-10'>1080p</span>  <br />
            Video quality        <span className=' ml-10'>Better</span>  <br />
            Monthly price         <span className='ml-10'>MAD100</span>
          </p>
          <a href="#" className='bg-prim-color text-second-color text-center p-3 rounded-2xl w-full block'>buy</a>
        </div><div className="box bg-second-color">
          <h3 className=' bg-prim-color text-second-color text-center p-3 rounded-2xl'>premuim</h3>
          <p className='py-3 px-3 leading-10'>
            Watch all you want. Ad-free. <br />
            Recommendations just for you. <br />
            Change or cancel your plan anytime. <br />
            Resolution          <span className=' ml-10'>4K+HDR</span>  <br />
            Video quality        <span className=' ml-10'>Best</span>  <br />
            Monthly price         <span className='ml-10'>MAD125</span>
          </p>
          <a href="#" className='bg-prim-color text-second-color text-center p-3 rounded-2xl w-full block'>buy</a>
        </div>
      </div>
    </div>
  )
}

export default Services