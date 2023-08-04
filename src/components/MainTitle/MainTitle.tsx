import React from 'react'

const MainTitle = (props: {title: string}) => {
  return (
    <div className='mt-6'>
        <h2 className='mb-7 font-bold relative pl-10 before:absolute before:content-[""] before:top-1/2 before:left-0 before:w-6 before:ml-2 before:h-px before:bg-black after:absolute after:conten-[""] after:top-1/2 after:w-7/12 after:ml-2 after:h-px after:bg-black'>{props.title}</h2>
    </div>
  )
}

export default MainTitle;