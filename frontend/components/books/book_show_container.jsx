import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBook} from '../../actions/book_actions';

class BookShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
   
    componentDidMount() {
        this.props.fetchBook(this.props.match.params.bookId) 
    }

    render() { 
        if (!this.props.book) return null;
        let authors = this.props.book.authorId
        let bookAuthors;

        if (authors){
            bookAuthors = authors.map((author) => {
                return (<li key={`book-show-author${author.id}`}>{author.full_name}</li>)
            });  
        } else {
            bookAuthors = null
        }

        return (<div>
            <Link to={`/`}>Go Back to Home</Link>
            
            <h1>Book: {this.props.book.title}</h1>

            <h2>Book written by:</h2>
            <ul> 
                {bookAuthors}
            </ul>

            <h2>Book also known as:</h2>


        </div>)
    }
}

const mstp = (state, ownProps) => {
    const book = state.entities.books;
    const bookId = ownProps.match.params.bookId;
    return {
        book: book[bookId]
    }
}

const mdtp = dispatch => {
    return {
        fetchBook: (id) => dispatch(fetchBook(id))
    }
}

export default connect(mstp, mdtp)(BookShow);