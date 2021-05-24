import React from "react";
import {connect} from "react-redux";
import propTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import {setFavorite, deleteFavorite} from "../actions";
import removeIcon from '../assets/static/remove-icon.png';
import {Link} from "react-router-dom";

const CarouselItem = (props) => {
    const {id, cover, title, year, contentRating, duration, isList} = props;
    const handleSetFavorite = () => {
        props.setFavorite({
            id, cover, title, year, contentRating, duration
        })
    }
    const handleDeleteFavorite = (itemId) => {
        props.deleteFavorite(itemId);
    }
    return (
        <div className="carousel-item">
            <img className="carousel-item__img" src={cover} alt={title}/>
            <div className="carousel-item__details">
                <div>
                    <Link to={`/player/${id}`}>
                        <img
                            className="carousel-item__details--img"
                            src={playIcon}
                            alt="Play Icon"
                        />
                    </Link>
                    {
                        isList ?
                            <img className="carousel-item__details--img"
                                 src={removeIcon}
                                 alt="Delete Icon"
                                 onClick={() => handleDeleteFavorite(id)}
                            /> :
                            <img className="carousel-item__details--img"
                                 src={plusIcon}
                                 alt="Plus Icon"
                                 onClick={handleSetFavorite}
                            />
                    }
                </div>
                <p className="carousel-item__details--title">{title}</p>
                <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</p>
            </div>
        </div>
    );
}
CarouselItem.propTypes = {
    cover: propTypes.string,
    title: propTypes.string,
    year: propTypes.number,
    contentRating: propTypes.string,
    duration: propTypes.number,
    id: propTypes.number
}
const mapDispatchToProps = {
    setFavorite,
    deleteFavorite,
}
export default connect(null, mapDispatchToProps)(CarouselItem)