import { useEffect, useState } from 'react';

const useTvShowsApi = (url) => {
    const [tvShows, setTvShows] = useState([]);
    useEffect(() => {
            fetch(url)
            .then(response => response.json())
            .then(data => setTvShows(data));
    }, []);
    return tvShows;
};

export default useTvShowsApi;