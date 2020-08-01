import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export default function errorRout() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography variant="h1" component="h2">
          Page not found
        </Typography>
      </Container>
    </React.Fragment>
  );
}
