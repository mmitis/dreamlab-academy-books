import React, {Component, PropTypes} from 'react';
import _ from 'lodash';

export class SearchInputNavigation extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.delayedCallback = _.debounce((event)=> {
            //emit event to parent new value
            this.props.onPhraseChanged(this.inputRef.value);
        }, 300);
    }

    onChange(event) {
        event.persist();
        this.delayedCallback(event);
    }

    render() {
        return (
            <div className="form-group">
                <label>Phrase to search</label>
                <input className="form-control" type="text" defaultValue={this.props.initialPhrase} placeholder="Please write here searched phrase" ref={(ref) => { this.inputRef = ref}} onChange={this.onChange}/>
            </div>
        );
    }
}

const {func, string} = PropTypes;
// how to define typed proptypes
SearchInputNavigation.propTypes = {
    initialPhrase : string.isRequired,
    onPhraseChanged: func.isRequired
};
export default SearchInputNavigation;