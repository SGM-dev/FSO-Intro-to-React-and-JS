const Header = (props) => {
  console.log(props);
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  console.log(props);
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

const Content = (props) => {
  return (
    <>
      <Part part={props.par1} exercises={props.ex1} />
      <Part part={props.par2} exercises={props.ex2} />
      <Part part={props.par3} exercises={props.ex3} />
    </>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of exercises{" "}
      {props.ex1 + props.ex2 + props.ex3}
    </p>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = {name:"Fundamentals of React", exercises: 10}
  const part2 = {name:"Using props to pass data", exercises: 7}
  const part3 = {name:"State of a component", exercises: 14}
  return (
    <>
      <Header course={course} />
      <Content par1={part1.name} par2={part2.name} par3={part3.name} ex1={part1.exercises} ex2={part2.exercises} ex3={part3.exercises}/>
      <Total ex1={part1.exercises}  ex2={part2.exercises}  ex3={part2.exercises} />
    </>
  );
};

export default App;
