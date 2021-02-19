import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllAuthors } from '../../actions/author_actions';
 
const AuthorIndexItem = props => {
    return (<li>
        <Link to={`/authors/${props.author.id}`}>{props.author.full_name}</Link>
    </li>)
}

class AuthorIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllAuthors();
    }

    render() {
        const authors = this.props.authors;
        let allAuthors = authors.map((author) => {
            return (<AuthorIndexItem author={author} key={`author-index-item${author.id}`}/>)
        });

        return (<div>
            <h1> All the awesome authors</h1>
            <ul>
                {allAuthors}
            </ul>
        </div>);
    };

};

const mstp = (state) => {
    return {
        authors: Object.values(state.entities.authors)
    };
};

const mdtp = dispatch => {
    return {
        fetchAllAuthors: () => dispatch(fetchAllAuthors())
    }
};


export default connect(mstp, mdtp)(AuthorIndex);