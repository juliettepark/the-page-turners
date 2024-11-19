import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from '../client';

const DetailView = () => {
    const { bookID } = useParams();

    // Old fields
    const [data, setData] = useState({});
    const [reviews, setReviews] = useState([]);
    const [currReview, setCurrReview] = useState("");
    const [likes, setLikes] = useState(0);
    useEffect(() => {
        fetchBook();
    }, []);

    const fetchBook = async () => {
        try {
            const {data} = await supabase
            .from('books')
            .select()
            .eq('id', bookID);
            // set state of posts
            console.log(data[0]);
            setData(data[0]);
            setReviews(data[0].reviews);
            setLikes(data[0].likes);
        } catch(error) {
            alert("Failed to fetch book details");
        }
    }

    // New fields
    const handleChange = (event) => {
        const {name, value} = event.target;
        setData( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }
    const updatePost = async (event) => {
        event.preventDefault();
      
        await supabase
          .from('books')
          .update({title: data.title, author: data.author, publish_year: data.publish_year, genre: data.genre, reviews: reviews})
          .eq('id', bookID);
      
        window.location = "/";
    }

    const handleReview = (event) => {
        setCurrReview(event.target.value);
        console.log(currReview);
    }

    const addReview = async (event) => {
        event.preventDefault();
        setReviews([...reviews, currReview]);
        await supabase
          .from('books')
          .update({title: data.title, author: data.author, publish_year: data.publish_year, genre: data.genre, reviews: [...reviews, currReview], likes: likes})
          .eq('id', bookID);

        // alert("New review added");
        setCurrReview("");
    }

    const handleLike = async () => {
        await supabase
          .from('books')
          .update({title: data.title, author: data.author, publish_year: data.publish_year, genre: data.genre, reviews: reviews, likes: likes + 1})
          .eq('id', bookID);
        setLikes(likes + 1);
    }

    const deleteBook = async (event) => {
        event.preventDefault();
      
        await supabase
          .from('books')
          .delete()
          .eq('id', bookID); 
      
        window.location = "/";
    }

    return (
        <div className="detailView">
            {/* DISPLAY CURRENT INFO */}
            {/* <h1>{memberID}</h1> */}
            <div className="memberDescription">
                {/* <h1>{data.name}</h1>
                <h3>Color: {data.color}, Age: {data.age}</h3>
                <p>Description: {data.description}</p> */}
            </div>

            
            <div className="detailContent">
                <div>
                    <p className="book-title">{`${data.title}`}</p>
                    <img className="book-image" alt="cover of book" src={data.image}/>
                </div>
                
                
                {/* UPDATE INFO */}
                
                <div className="updateForm">
                    <h2 id="update-info" className="bookshelf">Update Information:</h2>
                    <form className="book-form">
                        <div>
                        <label className="label" htmlFor="title">Title</label> <br />
                        <input className="description-text-field" type="text" id="title" name="title" value={data.title} onChange={handleChange} /><br />
                        {/* <br/> */}

                        <label className="label" htmlFor="author">Author</label><br />
                        <input className="description-text-field" type="text" id="author" name="author" value={data.author} onChange={handleChange} /><br />
                        <br/>
                        </div>
                        
                        <div>
                        <label className="label" htmlFor="publish_year">Published</label><br />
                        <input className="description-text-field" type="text" id="publish_year" name="publish_year" value={data.publish_year} onChange={handleChange} />
                        <br/>
 
                        <label className="label" htmlFor="genre">Genre</label><br />
                        <input className="description-text-field" type="text" id="genre" name="genre" value={data.genre} onChange={handleChange} />
                        <br/>
                        </div>
                        
                        
                    </form> 
                    <input id="submit-update" className="press-button" type="submit" value="Submit" onClick={updatePost} />
                    <button className="press-button" onClick={handleLike}>{`Love this book (${likes}) ♥️`}</button>
                </div>
                
            </div>

            <h2 className="bookshelf">Reviews</h2>
            <ul className="review-list">
                {reviews.map((rev,index) => 
                    <li className="review">{rev}</li>
                )}
            </ul>
            <form className="review-list">
                <label className="label" htmlFor="review">Add a Review</label> <br />
                <input className="text-field" type="text" id="review" name="review" value={currReview} onChange={handleReview} /><br />
                <button className="press-button" type="submit" onClick={addReview}>Submit</button>
            </form>
            <button id="delete-book" className="press-button" onClick={deleteBook}>Delete Book</button>

            
            
        </div>
    );
}

export default DetailView;