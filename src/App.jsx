import React, { useState } from "react";
import Header from "./components/Header";
import { Dropdown } from "./components/Dropdown";

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
];

const App = () => {
  const [value1, setValue1] = useState([]);
  const [value2, setValue2] = useState(options[0]);
  return (
    <div className="min-h-dvh bg-violet-100">
      <Header />
      <div className="container m-auto p-4">
        <Dropdown
          multiple
          options={options}
          value={value1}
          onChange={(o) => setValue1(o)}
        />
        <br />
        <Dropdown
          options={options}
          value={value2}
          onChange={(o) => setValue2(o)}
        />
      </div>
    </div>
  );
};

export default App;
