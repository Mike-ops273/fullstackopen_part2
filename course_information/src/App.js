const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
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
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <div>
      <h1>Web development curriculum</h1>
      {/*sending the whole data structure to <Course>*/}
      <Course courses={courses} />
    </div>
  );
};

const Course = (props) => {
  return (
    <div>
      <h2>{props.courses[0].name}</h2>
      {/*sending just the first parts array to <Content>*/}
      <Content1 parts1={props.courses[0].parts} />
      {console.log(props.courses[1].parts)}
      <h2>{props.courses[1].name}</h2>
      <Content2 parts2={props.courses[1].parts} />
    </div>
  );
};

const Content1 = (props) => (
  <>
    {props.parts1.map(({ name, exercises, id }) => (
      <p key={id}>
        {name} {exercises}
      </p>
    ))}
    <Total
      total={props.parts1.reduce((previous, current) => {
        return previous + current.exercises;
      }, 0)}
    />
  </>
);
const Content2 = (props) => {
  return (
    <>
      {props.parts2.map(({ name, exercises, id }) => (
        <p key={id}>
          {name} {exercises}
        </p>
      ))}
      <Total
        total={props.parts2.reduce((previous, current) => {
          return previous + current.exercises;
        }, 0)}
      />
    </>
  );
};

const Total = (props) => {
  return (
    <>
      <p>
        <b>Total of {props.total} exercises</b>
      </p>
    </>
  );
};

export default App;
