import React from 'react'
import { FcLike } from 'react-icons/fc'

const Card = (props) => {
    let course = props.course;
  return (
    <div className='w-[300px] bg-[#22223a] bg-opacity-80 rounded-md overflow-hidden'>
        <div>
            <img src={course.image.url}></img>
        </div>
        <div>
            <button>
                <FcLike fontSize = "1.75rem"/>
            </button>
        </div>
        
        <div>
            <p>{course.title}</p>
            <p>{course.description}</p>
        </div>
    </div>
  )
}

export default Card