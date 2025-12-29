import { useFlow } from "./hooks/use-flow";

function App() {
  const squareStyle = useFlow("square", {
    backgroundColor: "blue",
    size: 100,
  });
  const rectangleStyle = useFlow("rectangle", {
    backgroundColor: "green",
    width: 150,
    height: 100,
  });
  const circleStyle = useFlow("circle", {
    backgroundColor: "red",
    size: 100,
  });
  const cylinderStyle = useFlow("cylinder", {
    backgroundColor: "purple",
    size: 120,
  });

  return (
    <div
      style={{
        display: "flex",
        gap: "50px",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={squareStyle}></div>
      <div style={rectangleStyle}></div>
      <div style={circleStyle}></div>
      <div style={cylinderStyle}></div>
    </div>
  );
}

export default App;
