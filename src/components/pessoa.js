import React, { useEffect, useState } from "react"
export default function Pessoa({ id, func }) {

    const [details, setDetails] = useState([])

    const fetch = require('node-fetch');

    const url = 'https://api.themoviedb.org/3/person/'+ id + '?language=en-US';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTJiZmZkMmY3YmJkZjc0Y2U2YTNhODA5NjYyMzM5NiIsInN1YiI6IjYxZTU5YWU5ZjVjODI0MDA2OGIxZDFlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RuyONjee4b3aJZSkU_kvqKLS1kKBgs6f8bBKbRdHFr8'
      }
    };

    useEffect(() => {
        fetch(url, options)
        .then(res => res.json())
        .then(json => setDetails(json))
        .catch(err => console.error('error:' + err));
    }, [])
    


    return (
        <>
        <img className='perfil' src={'https://image.tmdb.org/t/p/w500/' + details.profile_path} alt='' />
        <p>{details.name}</p>
        <p>{func}</p></>
    )
}