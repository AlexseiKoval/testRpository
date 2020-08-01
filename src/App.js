import React, { useEffect, useState } from 'react';
import { useRoutes, navigate, A } from 'hookrouter';
import Meny from './component/meny';
import GetGameInfo from './component/getGameInfo';
import GetMostPopularGames from './component/getMostPopularGames';
import ErrorRout from './component/errorRout';
import Typography from "@material-ui/core/Typography";

import { Context } from './context';
import './App.css';
import PaginationRanges from './component/pagination';
/*
const fullParametr = {
    getGameInfo: 'https://yyy-ps.omegasys.eu/ps/ips/getGameInfo',
  getMostPopularGames: 'https://yyy-ps.omegasys.eu/ps/ips/getMostPopularGames'
}
*/

const apiParametr = {
  getGameInfo: 'https://jsonplaceholder.typicode.com/comments',
  getMostPopularGames: 'https://jsonplaceholder.typicode.com/posts'
}


const path = 'https://yyy-ps.omegasys.eu/ps/ips'
const routes = {
  "/": () => <Typography variant="h1" component="h2"> HOME </Typography>,
  "/getGameInfo": () => <GetGameInfo />,
  "/getMostPopularGames": () => <GetMostPopularGames />,
  "/*": () => <ErrorRout />,
};

const objApiArray = {
  getGameInfo: [],
  getMostPopularGames: []
};

function App() {
  const routeResult = useRoutes(routes);

  const [data, setData] = useState([]);

  const [parametrPagination, setParametrPagination] = useState({
    currentPage: 1,
    age: 5,
    countPage: 0
  });

  const setNavigateDate = (currentPage) => {
    navigate(currentPage, true, [])
    setData(objApiArray[currentPage.slice(1)] || [])
  }

  useEffect(() => {
    setParametrPagination({ currentPage: 1, age: 5, countPage: data.length / parametrPagination.age })
  }, [data]);

  useEffect(() => {
    setParametrPagination({ ...parametrPagination, currentPage: 1, countPage: Math.ceil(data.length / parametrPagination.age) })
  }, [parametrPagination.age]);

  useEffect(() => {
    let urls = [
      apiParametr.getGameInfo,
      apiParametr.getMostPopularGames
    ];

    let requests = urls.map(url => fetch(url).then((response) => response.json()));
    Promise.all(requests)
      .then(responses => {
        objApiArray.getGameInfo = responses[0];
        objApiArray.getMostPopularGames = responses[1];
        setData(objApiArray[window.location.pathname.slice(1)] || [])
      })

  }, [])

  return (
    <div className="App">
      <Context.Provider value={{
        setNavigateDate,
        data,
        parametrPagination,
        setParametrPagination
      }}>
        <Meny />
        <hr />
        <PaginationRanges />
        {routeResult}
      </Context.Provider>
    </div>
  );
}

export default App;
