import React from 'react'
import Content from './Content'
import Header from './Header'
import Total from './Total'

export default function Course({course}) {


  return (
    <div>
       <Header header={course.name}/>
       <Content course={course.parts}/>
       <Total exercises={course.parts.map(x => x['exercises'])}/>
    </div>
  )
}
