const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };
  const map1 = course.parts.map((items) => items);
  return (
    <div>
      <Course course={course} />
      {course.parts.map((part) => (
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>
      ))}
    </div>
  );
};

const Course = (props) => {
  return (
    <div>
      <Header title={props.course.name} />
      <Content parts={props.course.parts} />
    </div>
  );
};

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      content component testing map
      <Part
        partName={props.parts[0].name}
        partExercises={props.parts[0].exercises}
      />
      <Part
        partName={props.parts[1].name}
        partExercises={props.parts[1].exercises}
      />
      <Part
        partName={props.parts[2].name}
        partExercises={props.parts[2].exercises}
      />
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.partName} {props.partExercises}
      </p>
    </div>
  );
};

export default App;
