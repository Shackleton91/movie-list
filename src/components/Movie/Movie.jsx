import React from 'react'

const Movie = (props) => {
  return (
    <div>
<h2>{}</h2>
<p>{props.movie.name}</p>
      <p>{props.movie.price}</p>
    </div>
  )
}

export default Movie
