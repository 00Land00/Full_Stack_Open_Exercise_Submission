import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ course }) => {
  return (
    <h2>{course.name}</h2>
  )
}

const Total = ({ course }) => {
  const sum = course.parts.reduce((acc, val) => acc + val.exercises, 0)
  return(
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

const Course = ({course}) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  let courseToCourse = course => courses.find(c => c.id === course.id)
  const courseList = courses.map(course => <Course course={courseToCourse(course)} key={course.id} />)

  return (
    <div>
      <h1>Web development curriculum</h1>
      {courseList}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))