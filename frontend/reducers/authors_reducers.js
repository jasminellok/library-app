import { REC_AUTHOR, REC_ALL_AUTHORS } from '../actions/author_actions';

const authorsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case REC_AUTHOR:
            return Object.assign({}, state, { [action.author.id]: action.author })
        case REC_ALL_AUTHORS:
            return action.authors;
        default:
            return state;
    }
};

export default authorsReducer;