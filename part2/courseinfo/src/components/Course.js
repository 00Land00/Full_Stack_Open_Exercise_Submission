import React from 'react'

const Header = ({ course }) => {
  return (
    <h2>{course.name}</h2>
  )
}

const Total = ({ course }) => {
  const sum = course.parts.reduce((acc, val) => acc + val.exercises, 0)
  return (
    <p><strong>Number of exercises {sum}</strong></p>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = ({ course }) => {
  let partToPart = part => course.parts.find(p => p.id === part.id)
  const parts = course.parts.map(part => <Part part={partToPart(part)} key={part.id} />)

  return (
    <div>
      {parts}
    </div>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default Course