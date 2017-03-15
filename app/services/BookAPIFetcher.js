const API_KEY = 'AIzaSyDxCFeANmvlpoGzj7x5KgxUZtqmkFNqjCg';

/**
 * API got from GOOGLE BOOK API
 * @type {{searchBooks: BookAPIFetcher.searchBooks}}
 */
const BookAPIFetcher = {

    searchBooks: function (query) {
        // exit when query is already empty
        if(!query){
            return Promise.resolve([]);
        }
        return fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${API_KEY}`)
            // get response from the fetch
            .then((response) => {
                return response.json();
            })
            // transform data to "out format"
            .then((result) => {
                return result.items ? result.items.map(transformImages) : [];
            })

    }
}


const transformImages = (bookItem) => {
    const book = bookItem.volumeInfo;
    return {
        id: bookItem.id,
        title : book.title,
        subtitle: book.subtitle,
        description: book.description,
        author: book.authors ? book.authors[0] : 'Unknown',
        image : book.imageLinks ? book.imageLinks.thumbnail : 'http://books.google.com/books/content?id=PXa2bby0oQ0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
    }
}


export default BookAPIFetcher;

