import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content p1={part1} p2={part2} p3={part3} e1={exercises1} e2={exercises2} e3={exercises3} />
      <Total te={exercises1 + exercises2 + exercises3} />
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
    <p>{props.p1} {props.e1}</p>
    <p>{props.p2} {props.e2}</p>
    <p>{props.p3} {props.e3}</p>
    </>
  )
}

// te = total exercises;
const Total = (props) => {
  return (
    <p>Number of exercises {props.te}</p>
  )
}

export default App