import React from "react";
import Header from "../componets/Header";
import Search from "../componets/Search";
import Categories from "../componets/Categories";
import Carousel from "../componets/Carousel";
import CarouselItem from "../componets/CarouselItem";
import Footer from "../componets/Footer";

import '../assets/styles/App.scss';

const App = () => (
    <div className="App">
        <Header/>
        <Search/>
        <Categories title="Mi lista">
            <Carousel>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
            </Carousel>
        </Categories>

        <Categories title="Tendencias">
            <Carousel>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
            </Carousel>
        </Categories>

        <Categories title="Originales">
            <Carousel>
                <CarouselItem/>
                <CarouselItem/>
            </Carousel>
        </Categories>

        <Footer/>
    </div>
);
export default App;