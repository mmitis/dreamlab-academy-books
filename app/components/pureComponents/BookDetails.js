import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const BookDetails = ({title, author, image, description}) => {

    return (<div className="list-group-item card row">
        <div className="col-12 mb-2">
            <Link to={'/'} className="btn btn-primary">Return to results</Link>
        </div>
        <div className="col-3">
            <img src={image} style={{width: '100%'}} alt={title}/>
        </div>

        <div className="col-9 align-self-baseline">
            <h4>{title}</h4>
            <h5>{author}</h5>
            <p>{description}</p>
        </div>
    </div>);

};

const {string} = PropTypes;
// how to define typed proptypes
BookDetails.propTypes = {
    title: string.isRequired,
    subtitle: string,
    author: string,
    image: string,
    description: string
};

export default BookDetails;
