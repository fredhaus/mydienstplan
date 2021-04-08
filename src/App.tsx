import React, { FC } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { GlobalWrapper, Background, BackgroundOverlay} from "./App.styles";
import Home from "./routes/Home/Home";
import Navbar from "./globalComponents/Navbar";
import CreateRoster from "./routes/CreateRoster/CreateRoster"

const App: FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        
        <Background>
          <BackgroundOverlay>
            <GlobalWrapper>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/createRoster" component={CreateRoster} />
              </Switch>
            </GlobalWrapper>
          </BackgroundOverlay>
        </Background>
      </BrowserRouter>
    </div>
  );
};

export default App;
