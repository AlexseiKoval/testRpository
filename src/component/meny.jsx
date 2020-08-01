import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Context } from ".././context";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Meny() {
  const classes = useStyles();
  const { setNavigateDate } = useContext(Context);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.root}>
            <Button
              color="inherit"
              variant="outlined"
              disabled={"/getGameInfo" === window.location.pathname}
              onClick={() => {
                setNavigateDate("/getGameInfo");
              }}
            >
              get Game Info
            </Button>
            <Button
              color="inherit"
              variant="outlined"
              disabled={"/getMostPopularGames" === window.location.pathname}
              onClick={() => {
                setNavigateDate("/getMostPopularGames");
              }}
            >
              get Most Popular Games
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
