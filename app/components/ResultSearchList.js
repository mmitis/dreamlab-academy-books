import React from 'react';
import PropTypes from 'prop-types';
import ResultSearchItem from './pureComponents/ResultSearchItem';

export class ResultSearchList extends React.Component {
    constructor(props) {
        super(props);
    }

    handleNoEntries(nodes, items) {
        if (items.length === 0) {
            return (
                <div className="list-group-item ">
                    <div className="text-center w-100">No books found.</div>
                </div>
            )
        }
        return nodes;
    }

    render() {
        const books = this.props.items;
        return (
            <div>
                <div>
                    <label>Search Results</label>
                    <span className="float-right">Total entries: {books.length}</span>
                </div>
                <div className="list-group">
                    {/*How to iterate elements inside template*/}
                    {this.handleNoEntries(books.map((item) => (
                        <ResultSearchItem key={item.id}
                                          id={item.id}
                                          title={item.title}
                                          subtitle={item.subtitle}
                                          image={item.image}/>
                    )), books)}
                </div>
            </div>
        );
    }
}

const {arrayOf, shape, string} = PropTypes;

// how to define typed proptypes
ResultSearchList.propTypes = {
    items: arrayOf(shape({
        id: string.isRequired,
        title: string.isRequired,
        subtitle: string,
        author: string,
        image: string
    }))
};
export default ResultSearchList;
