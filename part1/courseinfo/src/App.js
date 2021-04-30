import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content p1={part1.name} p2={part2.name} p3={part3.name} e1={part1.exercises} e2={part2.exercises} e3={part3.exercises} />
      <Total te={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

// course = course;
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

// p# = part #; e# = exercise #;
const Content = (props) => {
  return (
    <>
    <Part p={props.p1} e={props.e1}/>
    <Part p={props.p2} e={props.e2}/>
    <Part p={props.p3} e={props.e3}/>
    </>
  )
}

// p = part; e = exercise;
const Part = (props) => {
  return (
    <p>{props.p} {props.e}</p>
  )
}

// te = total exercises;
const Total = (props) => {
  return (
    <p>Number of exercises {props.te}</p>
  )
}

export default App