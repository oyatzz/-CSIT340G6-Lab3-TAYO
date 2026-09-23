const Header = ({ course }) => {
  return <h1>{course}</h1>
}

const Part = ({ part }) => {
  return <p>{part.name} {part.exercises}</p>
}

const Content = ({ parts }) => {
  return (
    <div>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
    </div>
  )
}

const Total = ({ parts }) => {
  const total = parts[0].exercises + parts[1].exercises + parts[2].exercises
  return <p><strong>Total of {total} exercises</strong></p>
}

const App = () => {
  const course = {
    name: 'CSIT327 - Information Management 2',
    parts: [
      { name: 'CSIT321 - Applications Development and Emerging Technologies', exercises: 3 },
      { name: 'IT317 - Project Management for IT', exercises: 3 },
      { name: 'RIZAL031 - The Life and Works of Rizal', exercises: 3 }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App