import React from "react";
import Header from "../componets/Header";
import '../assets/styles/App.scss'
import Search from "../componets/Search";
import Categories from "../componets/Categories";
import Carousel from "../componets/Carousel";
import CarouselItem from "../componets/CarouselItem";

const App = () => (
    <div className="App">
        <Header/>
        <Search/>
        <Categories>
            <Carousel>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
            </Carousel>
        </Categories>
    </div>
);
export default App;