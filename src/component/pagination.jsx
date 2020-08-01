import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import { Context } from ".././context";

export default function PaginationRanges() {
  const { parametrPagination, setParametrPagination } = useContext(Context);

  const handleChange = (event) => {
    setParametrPagination({
      ...parametrPagination,
      age: Number(event.target.value),
    });
  };

  const handleChangePagination = (event, value) => {
    setParametrPagination({
      ...parametrPagination,
      currentPage: Number(value),
    });
  };

  return (
    <>
      <Grid container>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}>
          <Pagination
            count={parametrPagination.countPage}
            defaultPage={6}
            siblingCount={0}
            boundaryCount={2}
            onChange={handleChangePagination}
          />
        </Grid>
        <Grid item xs={2}></Grid>
        <div> Entries per page : </div>
        <Grid item xs={1}>
          <Select
            native
            value={parametrPagination.age}
            onChange={handleChange}
            inputProps={{
              name: "age",
              id: "age-native-simple",
            }}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </Select>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
      <br />
    </>
  );
}
