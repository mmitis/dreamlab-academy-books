import React, {PropTypes, Component} from 'react';
import { Link } from 'react-router-dom';

const ResultSearchItem = ({id, title, subtitle, author, image}) => {

    return (<div className="list-group-item card">
        <img className="card-img-left" src={image} style={{width: 100}} alt={title}/>
        <div className="card-block">
            <h4 className="card-title">{title.substr(0, 20)}</h4>
            <p className="card-text">{subtitle}</p>
            <Link to={id} className="btn btn-primary">View Details</Link>
        </div>
    </div>);

};

const {string} = PropTypes;
// how to define typed proptypes
ResultSearchItem.propTypes = {
    id: string.isRequired,
    title: string.isRequired,
    subtitle: string,
    author: string,
    image: string
};

export default ResultSearchItem;