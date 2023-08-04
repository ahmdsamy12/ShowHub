import React from 'react'
import { Link } from 'react-router-dom';

const MainPageHead = (props: {title: string}) => {
  return (
    <div className='main-page h-60 bg-100 bg-no-repeat w-full mb-10' style={{backgroundImage: "url('https://images.pexels.com/photos/109669/pexels-photo-109669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}>
        <div className="content w-full h-full flex justify-center items-center" >
            <Link to="/" className=' text-center text-second-color hover:text-gray-400 font-bold'>Home &gt; </Link>
            <span className=' text-second-color'>{props.title}</span>
        </div>
    </div>
  )
}

export default MainPageHead;