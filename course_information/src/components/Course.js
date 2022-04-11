import React from "react";

const Course = (props) => {
  return (
    <div>
      <h2>{props.courses[0].name}</h2>
      <Content
        part={props.courses[0].parts.map(({ name, exercises, id }) => (
          <p key={id}>
            {name} {exercises}
          </p>
        ))}
      />
      <Total
        total={props.courses[0].parts.reduce((previous, current) => {
          return previous + current.exercises;
        }, 0)}
      />
      <h2>{props.courses[1].name}</h2>
      <Content
        part={props.courses[1].parts.map(({ name, exercises, id }) => (
          <p key={id}>
            {name} {exercises}
          </p>
        ))}
      />
      <Total
        total={props.courses[1].parts.reduce((previous, current) => {
          return previous + current.exercises;
        }, 0)}
      />
    </div>
  );
};

const Content = (props) => {
  return <>{props.part}</>;
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
