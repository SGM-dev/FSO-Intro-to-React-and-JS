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
      <Part part={props.pat2} exercises={props.ex2} />
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
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  return (
    <>
      <Header course={course} />
      <Content par1={part1} par2={part2} par3={part3} ex1={exercises1} ex2={exercises2} ex3={exercises3}/>
      <Total ex1={exercises1}  ex2={exercises2}  ex3={exercises3} />
    </>
  );
};

export default App;
