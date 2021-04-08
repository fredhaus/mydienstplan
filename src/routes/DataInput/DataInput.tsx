import React from "react";
import { Store } from "../../utils/Store";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import DataInputMenuLeft from "./DataInputMenuLeft";
import { DataInputWrapper, DataInputFields } from "../../App.styles";
import DataInputLogic from "./DataInputLogic";
function DataInput() {
  const { state, dispatch } = React.useContext(Store);
  const { renderSwitch } = DataInputLogic();

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
      },
    })
  );

  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <DataInputMenuLeft />
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper className={classes.paper}>
              <DataInputWrapper>
                <DataInputFields>
                  {renderSwitch(state.dataInputTab)}
                </DataInputFields>
              </DataInputWrapper>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default DataInput;
