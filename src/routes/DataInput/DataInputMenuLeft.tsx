import React from "react";
import Paper from "@material-ui/core/Paper";

import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import DataInputLogic from "./DataInputLogic";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    paper: {
      marginRight: theme.spacing(2),
    },
  })
);

export default function MenuListComposition() {
  const { changeTab } = DataInputLogic();
  const navMenuItems = [
    "Positions",
    "Shifts",
    "Employees",
    "Availability",
    "Month",
  ];
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <MenuList>
          {navMenuItems.map((elem) => (
            <MenuItem key={elem} onClick={() => changeTab(elem)}>
              {elem}
            </MenuItem>
          ))}
        </MenuList>
      </Paper>
    </div>
  );
}
