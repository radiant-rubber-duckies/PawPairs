import React, { useEffect, useState } from 'react';
import { Main } from './style';
import axios from 'axios';

const Search = () => {
// const [zips, setZips] = useState([])

useEffect(() => {
    return zipGetter
}, [])

const zipGetter = async () => {
    try {
      const { data } = await axios.get(`localhost/5001`)
      console.log(data)
      return data;
    } catch (err) {
      console.error('zips error!!!');
    }
  };

  return (
    <Main className="search">
      <form>
        <input placeholder={'zipcode'}></input>
        <button onClick={() => {}}>Search</button>
      </form>
        {/* {zips.map((zip, i) => {return <p key={i}>{zip.location}</p>})} */}
    </Main>
  );
};

export default Search;
