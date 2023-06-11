import React from 'react'
import MySVG from '../../MySVG/MySVG'

const FavoriteButton = ({isFavorite}) => {
  return (
    <div>
        {isFavorite ? <MySVG name="favoriteSVG_active"/>:<MySVG name="favoriteSVG"/>}
    </div>
  )
}

export default FavoriteButton