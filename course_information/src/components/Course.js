import React from "react";

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

export default Course;
