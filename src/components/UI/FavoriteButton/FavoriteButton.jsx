import React from "react";
import MySVG from "../../MySVG/MySVG";
import Favorite from "../../../utils/Favorite";

const FavoriteButton = ({ isFavorite, changeFavorite}) => {

    return (
        <div>
            {isFavorite ? (
                <div onClick={changeFavorite}><MySVG name="favoriteSVG_active" /></div>
                
            ) : (
                <div onClick={changeFavorite}><MySVG name="favoriteSVG" /></div>
            )}
        </div>
    );
};

export default FavoriteButton;
