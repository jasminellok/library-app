import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAuthor} from '../../actions/author_actions';

class AuthorShow extends React.Component {
    constructor(props) {
        super(props)
    }
   
    componentDidMount() {
        this.props.fetchAuthor(this.props.match.params.authorId) 
    }

    render() { 
        if (!this.props.author) return null;
        let books = this.props.author.bookIds
        let authorBooks;

        if (books){
            authorBooks = books.map((book) => {
                return (<li key={`author-show-item${book.id}`}>{book.title}</li>)
            });  
        } else {
            authorBooks = null
        }


        return (<div>
            <Link to={`/`}>Go Back to Home</Link>
            
            <h1>Author: {this.props.author.full_name}</h1>

            <h2>Books written:</h2>
            <ul> 
                {authorBooks}
            </ul>
        </div>)
    }
}

const mstp = (state, ownProps) => {
    const author = state.entities.authors;
    const authorId = ownProps.match.params.authorId;
    return {
        author: author[authorId]
    }
}

const mdtp = dispatch => {
    return {
        fetchAuthor: (id) => dispatch(fetchAuthor(id))
    }
}

export default connect(mstp, mdtp)(AuthorShow);