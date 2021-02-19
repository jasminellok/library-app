import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllBooks } from '../../actions/book_actions';
 
const BookIndexItem = props => {
    return (<li>
        <Link to={`/books/${props.book.id}`}>{props.book.title}</Link>
    </li>)
}

class BookIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllBooks();
    }

    render() {
        const books = this.props.books;
        let allBooks = books.map((book) => {
            return (<BookIndexItem book={book} key={`book-index-item${book.id}`}/>)
        });

        return (<div>
            <h1> All the awesome books</h1>
            <ul>
                {allBooks}
            </ul>
        </div>);
    };

};

const mstp = (state) => {
    return {
        books: Object.values(state.entities.books)
    };
};

const mdtp = dispatch => {
    return {
        fetchAllBooks: () => dispatch(fetchAllBooks())
    }
};


export default connect(mstp, mdtp)(BookIndex);