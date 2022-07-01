import React from 'react'
import Part from './Part'

export default function Content({course}) {
  return (
    <div>
         {course.map(course=>  
            <Part key={course.id} part={course}/>
        )}
    </div>
  )
}
