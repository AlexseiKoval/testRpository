import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import CssBaseline from "@material-ui/core/CssBaseline";

import Container from "@material-ui/core/Container";
import { Context } from ".././context";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function GetMostPopularGames() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const { data, parametrPagination } = useContext(Context);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        {data
          .slice(
            parametrPagination.currentPage - 1,
            parametrPagination.currentPage + parametrPagination.age - 1
          )
          .map((row, index) => (
            <Card className={classes.root} variant="outlined" key={index}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="h2">
                  {row.userId}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  {row.title}
                </Typography>
                <Typography variant="body2" component="p">
                  {row.body}
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          ))}
      </Container>
      <CssBaseline />
      <CssBaseline />
    </React.Fragment>
  );
}
export default GetMostPopularGames;
