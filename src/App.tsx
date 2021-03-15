import React, { FC } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import InputContainer from "./components/InputContainer";

const App: FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/input" component={InputContainer} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
