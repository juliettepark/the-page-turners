import { useState } from 'react';
import { supabase } from '../client';

const NewRead = () => {

    const [book, setBook] = useState({title: "", author: "", publish_year: "", genre: "", image: ""})
    const handleChange = (event) => {
        const {name, value} = event.target;
        setBook( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const createBook = async (event) => {
        event.preventDefault();
        
        try {
          await supabase
          .from('books')
          .insert({title: book.title, author: book.author, publish_year: book.publish_year, genre: book.genre, image: book.image})
          .select();
      
            alert("Book added");
            setBook({title: "", author: "", publish_year: "", genre: "", image: ""});

            window.location = "/";  
        } catch(error) {
            alert("Oops! Something went wrong with that query, let's try again!");
        } 
      }

    return (
        <div className="updateForm">
                <h2 id="update-info" className="bookshelf">Create New Read:</h2>
                <form className="new-book">
                    <div>
                    <label className="label" htmlFor="title">Title</label> <br />
                    <input className="description-text-field" type="text" id="title" name="title" onChange={handleChange} /><br />
                    <br/>

                    <label className="label" htmlFor="author">Author</label><br />
                    <input className="description-text-field" type="text" id="author" name="author" onChange={handleChange} /><br />
                    <br/>

                    <label className="label" htmlFor="publish_year">Published</label><br />
                    <input className="description-text-field" type="text" id="publish_year" name="publish_year" onChange={handleChange} />
                    <br/>

                    <label className="label" htmlFor="genre">Genre</label><br />
                    <input className="description-text-field" type="text" id="genre" name="genre" onChange={handleChange} />
                    <br/>

                    <label className="label" htmlFor="image">Image</label><br />
                    <input className="description-text-field" type="text" id="image" name="image" onChange={handleChange} />
                    <br/>
                    <input id='new-book-button' className="press-button" type="submit" value="Submit" onClick={createBook} />
                    </div>
                </form>
            </div>
    );
};

export default NewRead;