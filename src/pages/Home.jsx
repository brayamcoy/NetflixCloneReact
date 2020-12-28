import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import MoviesList from "../components/MoviesList";
import Footer from "../components/Footer";
import Links from "../components/Links";
import { NotResults } from '../components/NotResults';
import { Loading } from '../components/Loading';

const api_key = "050acc481097509dbc630dbcb2dbbca9";
const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=es&page=1&limit=20`;

export default function Home() {
  const [data, setData] = useState([])
  const [results, setResults] = useState([])
  const [usedSearch, setusedSearch] = useState(false)

  useEffect(() => {
    getMovies();
  },[]);

  const getMovies = () => {
    fetch(url)
      .then((response) => response.json())
      .then((myJson) => {
        setData(myJson.results);
        console.log(myJson.results);
      })
      .catch((error) => console.log(error));
  };

  const handleResults = (results) => {
    setusedSearch(true);
    setResults(results);
  }

  const renderResults = () => {
      return results ==""
      ? < NotResults />
      : <MoviesList results={results} />
  }

  return (
    <div className="wrapper">
      <Navbar onResults={handleResults} />
      {
        usedSearch
        ? renderResults()
        : data.length >  0
          ? <MoviesList data={data}/>
          : < Loading />
      }
      < Links />
      < Footer />
    </div>
  );
}
