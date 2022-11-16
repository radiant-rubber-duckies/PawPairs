import React, { useEffect, useState } from 'react';
import { Main } from './style';
import axios from 'axios';

const Search = () => {
const [zips, setZips] = useState([])

useEffect(() => {
    zipGetter().then(response => {
        setZips(response)
    })
}, [])

const zipGetter = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5001/`)
      console.log(data)
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Main className="search">
      <form>
        <input placeholder={'zipcode'}></input>
        <button onClick={() => {}}>Search</button>
      </form>
        {zips.map((zip, i) => {return <p key={i}>{zip.location}</p>})}
    </Main>
  );
};

export default Search;
