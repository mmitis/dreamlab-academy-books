import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import ResultSearchList from './ResultSearchList';
import SearchInputNavigation from './SearchInputNavigation';
import BookAPIFetcher from './../services/BookAPIFetcher';
import SearchLoadingBar from './pureComponents/SearchLoadingBar';
import BookDetails from './pureComponents/BookDetails';

export class BookSearchApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchLoading: false,
            searchedPhrase: localStorage.searchedPhrase || '' // use the value from the history
        };
        //bindings
        this.updateSearchedPhrase = this.updateSearchedPhrase.bind(this);
        this.renderDetailsPage = this.renderDetailsPage.bind(this);
        this.renderPageList = this.renderPageList.bind(this);

    }

    // all actions did on mount
    componentDidMount() {
        // initial search
        this.performSearch();
    }

    performSearch() {
        this.setState({
            searchLoading: true
        });
        //searched for books with saved data in state
        BookAPIFetcher.searchBooks(this.state.searchedPhrase)
            .then((books) => {
                this.setState({
                    books,
                    searchLoading: false
                })
            });
    }

    updateSearchedPhrase(phrase) {
        // update state with the new value
        this.setState({
            searchedPhrase: phrase
        }, () => {
            //update results on callback
            localStorage.searchedPhrase = phrase;
            this.performSearch();
        })
    }

    renderPageList() {
        return (<div>
            <SearchLoadingBar isLoading={this.state.searchLoading}/>
            <SearchInputNavigation onPhraseChanged={this.updateSearchedPhrase}
                                   initialPhrase={this.state.searchedPhrase}/>
            <ResultSearchList items={this.state.books}/>
        </div>);
    }

    renderDetailsPage(router) {
        const {bookId} = router.match.params;
        const bookIndex = this.state.books.findIndex(item => item.id === bookId);
        const bookFound = this.state.books[bookIndex];
        if(bookFound) {
            return (<BookDetails title={bookFound.title}
                                 subtitle={bookFound.subtitle}
                                 description={bookFound.description}
                                 author={bookFound.author}
                                 image={bookFound.image}
            />);
        } else {
            // safe escape
            return this.renderPageList();
        }
    }

    render() {
        return (
            <div className="container">
                <h1>Book Search - Dreamlab Academy</h1>
                <Router>
                    <div>
                        {/*defined by render method */}
                        <Route exact path='/' render={this.renderPageList}/>
                        <Route exact path='/:bookId' render={this.renderDetailsPage}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default BookSearchApp;