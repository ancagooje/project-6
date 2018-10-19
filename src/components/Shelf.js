import React, {Component} from 'react'
// import * as BooksAPI from './BooksAPI'
import Book from "./Book";

class Shelf extends Component {
    state = {}

    render() {
        return (
            <div className="shelf">
                <h2 className="shelf-title">{this.props.shelf.name}</h2>
                <div className="shelf-books">
                    <ol className="books-grid">
                    {this
                            .props
                            .shelf
                            .books
                            .map(book => (
                                <li key={book.id}>
                                    <Book
                                        book={book}
                                        onChangeShelf={this.props.onChangeShelf}/>
                                </li>
                            ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Shelf;