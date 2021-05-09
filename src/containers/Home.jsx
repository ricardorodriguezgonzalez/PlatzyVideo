import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";
import useTvShowsApi from "../hooks/useTvShowsApi.js";

import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState';

const Home = () => {
    const initialState = useTvShowsApi(API);
    return initialState.length === 0 ? <h1>Loading...</h1> : (
        <>
            <Search/>
            {initialState.mylist.length > 0 &&
            <Categories title="Mi lista">
                <Carousel>
                    {initialState.mylist.map(item => <CarouselItem key={item.id} {...item}/>)}
                </Carousel>
            </Categories>
            }
            <Categories title="Tendencias">
                <Carousel>
                    {initialState.trends.map(item => <CarouselItem key={item.id} {...item}/>)}
                </Carousel>
            </Categories>
            <Categories title="Originales">
                <Carousel>
                    {initialState.originals.map(item => <CarouselItem key={item.id} {...item}/>)}
                </Carousel>
            </Categories>
        </>
    );
}
export default Home;