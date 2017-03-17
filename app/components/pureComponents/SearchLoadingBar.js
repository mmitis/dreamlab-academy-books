import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';


const SearchLoadingBar = ({isLoading}) => {
    return (<div className={classnames({'loader': true, 'loader-visible': isLoading})}>
        Loading!
    </div>);
};

const {bool} = PropTypes;
// how to define typed proptypes
SearchLoadingBar.propTypes = {
    isLoading: bool.isRequired
};

export default SearchLoadingBar;