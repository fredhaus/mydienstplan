import React, { FC, useEffect, useState } from "react";
import InputEmployees from "./components/InputEmployees";
import InputShifts from "./components/InputShifts";

const App: FC = () => {
  const test = { test: "moin" };

  return (
    <div className="App">
      <h1>MyDienstplan</h1>
      <InputShifts {...test} />

      <InputEmployees />
    </div>
  );
};

export default App;
