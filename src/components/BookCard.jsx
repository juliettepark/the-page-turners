import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const BookCard = (props) =>  {
  let date = new Date(props.created)
  
  return (
      <div className="BookCard">
          <Link className='bookcard-link' to={'/books/'+ props.id}>
          <div className="title">{props.title}</div>
          <p className="author">{`${props.author} (${props.publish_year})`}</p>
          <p className='card-likes author'>{`Read on ${date.toLocaleDateString()} 
          ♥️ (${props.likes})`}</p>
          {/* <p className="publish_year">{props.publish_year}</p> */}
          {/* <p className="genre">{props.genre}</p> */}
          {/* <button className="betButton" onClick={updateCount} >👍 Bet Count: {count}</button> */}
          {/* <p className='card-likes'>{props.likes}</p> */}
          </Link>
          <img className='card-image' src={props.image} />
      </div>
  );
};

export default BookCard;