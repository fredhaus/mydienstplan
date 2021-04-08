import React from "react";
import { Link } from "react-router-dom";
import orange from '@material-ui/core/colors/orange';
import { Button } from "@material-ui/core";
import { HomeWrapper, HomeHeading, HomeButtonWrapper } from "../../App.styles";


function Home() {
  return (

      <HomeWrapper id="HomeWrapper">
        <HomeHeading>
          Instant <b >Employee Rosters</b>
        </HomeHeading>
        <div>
          The lightweight roster tools for universal work shift scheduling
        </div>
        <HomeButtonWrapper>
          <Link style={{textDecoration: "none"}}to="/input">
            {" "}
            <Button variant="contained" color="primary">
              {"CREATE A ROSTER >"}
            </Button>
          </Link>
        </HomeButtonWrapper>
      </HomeWrapper>

  );
}

export default Home;
