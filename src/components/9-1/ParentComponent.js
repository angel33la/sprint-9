export default function ParentComponent() {
  // count is stored as a local variable
  // and passed it as a prop to the ChildComponent
  let count = 0;
  console.log("App render: " + count);

  return (
    <div className="App">
      <h1>React Re-render!</h1>
      <h2>Click on the button below</h2>
      <button onClick={() => count++}>Increment Count</button>
      <ChildComponent count={count} />
    </div>
  );
}

const ChildComponent = (props) => {
  console.log("CountKeeper render: " + props.count);
  return <div>Current count: {props.count}</div>;
};
