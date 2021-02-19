import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBook} from '../../actions/book_actions';

class BookShow extends React.Component {
    constructor(props) {
        super(props)
        this.duplicate = this.duplicate.bind(this);
    }
   
    componentDidMount() {
        this.props.fetchBook(this.props.match.params.bookId) 
    }

    duplicate(arr) {
        if(!arr || arr.length===0) return
        const list = arr.map((book) => {
            return (<li key={`book-dup-ref-item${book.id}`}>
                {book.title}
            </li>)
        })

        return list;
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

        let parent = this.props.book.parent;
        let refOrDup;

        refOrDup = parent ? parent.title : this.duplicate(this.props.book.children)

        return (<div>
            <Link to={`/`}>Go Back to Home</Link>
            
            <h1>Book: {this.props.book.title}</h1>

            <h2>Book written by:</h2>
            <ul> 
                {bookAuthors}
            </ul>

            <h2>{parent ? "Reference Original Title:" : "Duplicate Titles:"}</h2>
            <ul>
                {refOrDup}
            </ul>
            

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