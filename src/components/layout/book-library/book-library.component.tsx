import { Component, Prop } from '@stencil/core';
import { Books } from '../../../global/Books';

@Component({
    tag: 'my-web-book-library',
    styleUrl: 'book-library.component.css'
})
export class MyWebBookLibrary {
    @Prop() books: Books[] = [];
    totalBooks: number;
    @Prop() currentBook: Books;

    render() {
        const bookInlineStyle = {
            currentReading: { color: 'green' },
            myRating: { color: 'green' }
        }

        return (
            <div>
                <i class="fa fa-4x fa-book text-primary sr-icons">
                </i>
                <h3>Latest Reads</h3>
                {/* // <!--Book Card--> */}
                <div class="card text-center">
                    <div class="card-header" >
                        <h4 id="currentBook">{this.currentBook.title}</h4>
                    </div>
                    <div class="card-block">
                        <h5 class="text-muted" id="currentAuthor">By- {this.currentBook.author}</h5>
                        <h5 class="card-text" id="currentRead">Now Reading</h5>
                        <h6 style={bookInlineStyle.currentReading} id="currentRating">My Rating: {this.currentBook.myrating}</h6>
                        {/* <!--<a href="#" class="btn btn-primary">View All Reads</a>--> */}
                        {/* <!-- Trigger the modal with a button --> */}
                        <button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#myModal">View All Reads</button>
                    </div>
                    <div class="card-footer text-muted">
                        <p id="bookcount">Book Count: {this.books.length}</p>
                    </div>
                </div>
                {/* // <!--/Book Card--> */}

                {/* // <!--Modal Start--> */}
                <div class="container">
                    {/* <!-- Modal --> */}
                    <div class="modal fade" id="myModal" role="dialog">
                        <div class="modal-dialog">

                            {/* <!-- Modal content--> */}
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    <h4 class="modal-title">Books so far</h4>
                                </div>
                                <div class="modal-body">
                                    <div id="card-template">
                                        {
                                            this.books.map((book: Books) =>
                                                <div class="card text-center">
                                                    <div class="card-header">
                                                        <h4 class="bookname">{book.title}</h4>
                                                    </div>
                                                    <div class="card-block">
                                                        <h5 class="text-muted" id="author">By- {book.author}</h5>
                                                        <h5 class="card-text">{book.read ? 'Completed' : 'Reading'}</h5>
                                                        <h6 style={bookInlineStyle.myRating} id="myrating">MyRating: {book.myrating}</h6>
                                                    </div>
                                                    <div class="card-footer text-muted">
                                                        <p id="bookcount"></p>
                                                    </div>
                                                </div>
                                            )
                                        }

                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }

}