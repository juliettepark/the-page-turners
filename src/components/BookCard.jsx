import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const BookCard = (props) =>  {

  return (
      <div className="BookCard">
          <Link className='bookcard-link' to={'/books/'+ props.id}>
          <div className="title">{props.title}</div>
          <p className="author">{`${props.author} (${props.publish_year})`}</p>
          <p className='card-likes author'>{`♥️ (${props.likes})`}</p>
          {/* <p className="publish_year">{props.publish_year}</p> */}
          {/* <p className="genre">{props.genre}</p> */}
          {/* <button className="betButton" onClick={updateCount} >👍 Bet Count: {count}</button> */}
          {/* <p className='card-likes'>{props.likes}</p> */}
          </Link>
          <img className='card-image' src={props.image} />
          <p className='card-likes'>{props.likes}</p>
      </div>
  );
};

export default BookCard;