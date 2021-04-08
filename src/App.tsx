import React, { FC } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { GlobalWrapper, Background, BackgroundOverlay, NavbarShadow} from "./App.styles";
import Home from "./routes/Home/Home";
import DataInput from "./routes/DataInput/DataInput";
import Navbar from "./globalComponents/Navbar";
import InputPositions from "./routes/DataInput/components/InputPositions/InputPositions/InputPositions";

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
                <Route path="/input" component={DataInput} />
                <Route path="/inputPositions" component={InputPositions} />
              </Switch>
            </GlobalWrapper>
          </BackgroundOverlay>
        </Background>
      </BrowserRouter>
    </div>
  );
};

export default App;
