const Header = ({ course }) => {
  return <h1>{course.name}</h1>
}

const Part = ({ part }) => {
  return <p>{part.name} {part.exercises}</p>
}

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map(part =>
        <Part key={part.name} part={part} />
      )}
    </div>
  )
}

const Total = ({ course }) => {
  let total = 0

  for (let i = 0; i < course.parts.length; i++) {
    total += course.parts[i].exercises
  }

  return <p><strong>Total of {total} exercises</strong></p>
}

const Footer = ({ name, courseCode, section }) => {
  return (
    <footer>
      <p>{name}</p>
      <p>{courseCode} - {section}</p>
    </footer>
  )
}

const App = () => {
  const course = {
    name: 'CSIT327 - Information Management 2',
    parts: [
      { name: 'CSIT321 - Applications Development and Emerging Technologies', exercises: 3 },
      { name: 'IT317 - Project Management for IT', exercises: 3 },
      { name: 'RIZAL031 - The Life and Works of Rizal', exercises: 3 },
      { name: 'CSIT340 - Web Development', exercises: 3 }
    ]
  }

  return (
  <div className="app">
    <Header course={course} />
    <Content course={course} />
    <Total course={course} />
    <Footer
      name="Clarence Matthew D. Tayo"
      courseCode="CSIT340"
      section="G6"
    />
  </div>
  )
}

export default App