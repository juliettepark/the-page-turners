import { useState, useEffect } from 'react';
import { supabase } from '../client'
import BookCard from '../components/BookCard';

const Homepage = () => {

    const [allBooks, setAllBooks] = useState([]);
    const [showBooks, setShowBooks] = useState([]);
    useEffect(() => {
        fetchMembers();
    }, []);

    const fetchMembers = async () => {
        try {
            const {data} = await supabase
            .from('books')
            .select()
            .order('created_at', { ascending: true });
            // set state of posts
            setAllBooks(data);
            setShowBooks(data);
        } catch(error) {
            alert("Failed to fetch books");
        }
    }

    const searchBooks = (criteria) => {
        setShowBooks(allBooks.filter((book) => {
          return book.title.toLowerCase().includes(criteria);
        }));
    }

    const byRecent = () => {
        // console.log(allBooks.sort((book1, book2) => {
        //   if (book1.created_at <= book2.created_at) {
        //     return -1;
        //   } else {
        //     return 1;
        //   }
        // }));
        let copyBooks = [...allBooks];
        copyBooks.sort((book1, book2) => -1 * (new Date(book1.created_at) - new Date(book2.created_at)));
        setShowBooks(copyBooks);

        // console.log(showBooks);
    }

    const getSortedRecent = () => {
        let copyBooks = [...allBooks];
        copyBooks.sort((book1, book2) => -1 * (new Date(book1.created_at) - new Date(book2.created_at)));
        if (copyBooks.length > 0) {
            return copyBooks[0]
        }
        return null;
    }

    const byRating = () => {
        let copyBooks = [...allBooks];
        copyBooks.sort((book1, book2) => {
          return -1 * (book1.likes - book2.likes);
        });
        setShowBooks(copyBooks);
    }
    let currRead = getSortedRecent();
    return (
        <div className='home-content'>
            {currRead && <div className='current-read'>
                {/* <p>{`Current Read: ${currRead.title}`}</p> */}
            </div>}
            {/* <h1 className='bookshelf'>Bookshelf</h1> */}
            <h1 className='bookshelf'>The Bookshelf</h1>
            <div className='search'>
                <div className='filterButtons'>
                    <button className='press-button' onClick={byRecent}>Order by Recent</button>
                    <button className='press-button' onClick={byRating}>Order by Highest Rating</button>
                </div>
                
                <input className='text-field'
                    type="text"
                    placeholder="Search..."
                    onChange={(inputString) => searchBooks(inputString.target.value.toLowerCase())}
                />
            </div>
            
            
            
            <ul className='display-books'>
                {showBooks && showBooks.length > 0 ?
                showBooks.map((book,index) => 
                   <BookCard key={book.id} id={book.id} title={book.title} author={book.author} publish_year={book.publish_year} genre={book.genre} image={book.image} likes={book.likes}/>
                ) : <h2>{'No Books Yet'}</h2>}
            </ul>
        </div>
        
    );
}

export default Homepage;