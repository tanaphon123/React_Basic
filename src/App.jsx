import logo from "./logo.svg";
import "./Style.css";
import { useState, useEffect } from "react";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <h2>Hellow World</h2>
//     </div>
//   );
// }

// ประกาศตัวแปร css แบบ object
const header = {
  color: "blue",
  fontSize: "40px",
};

// Arrow Function
const App = () => {
  // Create Variable
  const fname = "John Doe";
  const age = 25;

  // สร้าง state Age
  const [count, setCount] = useState(10);
  const [timer, setTimer] = useState(0);

  // การใช้ useEffect ในการทำงานหลังจาก render แล้ว
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("time: ", timer);
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {/* css แบบ object ใน file */}
      <h1 style={header}>Hello world</h1>

      {/* เขียน css แบบ inline style */}
      <h1 style={{ color: "red" }}>Hello world</h1>

      {/* css แบบ import ผ่านไฟล์ style.css */}
      <p className={["myContent myStyle"]}>Test My style</p>

      <p>Hello {fname}</p>
      <p>Age {age}</p>

      {/* use state */}
      <h1>State {count}</h1>
      <button className={["myButton me-1"]} onClick={() => setCount(count + 1)}>
        Plus
      </button>
      <button className={["myButton"]} onClick={() => setCount(count - 1)}>
        Minus
      </button>

      <h1>{timer}</h1>
    </div>
  );
};

export default App;
