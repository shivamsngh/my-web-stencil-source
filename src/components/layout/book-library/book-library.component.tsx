import { Component, Prop, Element, State } from '@stencil/core';
import { Books } from '../../../global/Books';

@Component({
    tag: 'my-web-book-library',
    styleUrl: 'book-library.component.css'
})
export class MyWebBookLibrary {
    @Prop() books: Books[] = [];
    totalBooks: number;
    @Prop() currentBook: Books = { title: '', author: '', read: false, myrating: 0 };
    @Element() element: HTMLElement;
    @State() book2dArr: Books[][] = [[]];

    @State() modal: HTMLElement;
    @Prop() card = { image: 'assets/img/book-default.svg' };

    componentDidLoad() {
        // this.books = this.books.reverse();
        this.modal = this.element.querySelector('#myModal');
        const propArr = [...this.books].reverse();
        const newArr = [];
        while (propArr.length) newArr.push(propArr.splice(0, 3));
        this.book2dArr = newArr;
    }

    openModal(ev: UIEvent) {
        console.log("element", this.element);
        console.log("event", ev);
        this.modal.classList.add('is-active')
    }

    closeModal(ev: UIEvent) {
        console.log("element", this.element);
        console.log("event", ev);
        this.modal.classList.remove('is-active');
    }

    render() {
        const bookInlineStyle = {
            currentReading: { color: 'green' },
            myRating: { color: 'green' }
        }

        return (
            <div >

                <div class="has-text-centered">
                    <i class="fa fa-4x fa-book ">
                    </i>
                    <h3>Latest Reads</h3>
                </div>

                <div class="card">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-96x96">
                                    <img src={this.card.image} alt="Placeholder image" />
                                </figure>
                            </div>
                            <div class="media-content">
                                {/* // <!--Book Card--> */}
                                <p id="currentBook" class="title is-4">{this.currentBook.title} </p>
                                <p id="currentAuthor" class="subtitle is-6">By- {this.currentBook.author}</p>
                                <span id="currentRead" class="tag is-primary is-medium">Now Reading</span>
                            </div>
                        </div>

                        <div class="content">
                            <hr />
                            <span style={bookInlineStyle.currentReading} id="currentRating">My Rating: {this.currentBook.myrating}</span>
                            {/* <!-- Trigger the modal with a button --> */}
                        </div>
                        <hr />
                        <p id="bookcount" class="is-pulled-lefthas-text-centered">Book Count: {this.books.length}</p>
                        <button type="button" class="button is-pulled-right" data-toggle="modal" data-target="#myModal" onClick={(event: UIEvent) => this.openModal(event)} > View All Reads</button>
                    </div>
                </div>

                {/* // <!--/Book Card--> */}

                {/* // <!--Modal Start--> */}
                {/* <!-- Modal --> */}
                <div class="modal fade" id="myModal" role="dialog" data-reveal>
                    <div class="modal-background"></div>

                    {/* <!-- Modal content--> */}
                    <div class="modal-card">
                        <header class="modal-card-head">
                            <h4 class="modal-card-title">Books so far</h4>
                            <button class="delete" aria-label="close" onClick={(event: UIEvent) => this.closeModal(event)}>&times;</button>
                        </header>
                        <section class="modal-card-body">
                            {
                                this.book2dArr.map((bookArr: Books[]) =>
                                    <div class="columns">
                                        {
                                            bookArr.map((book: Books) =>
                                                <div class="column">
                                                    <div class="card">
                                                        <div class="card-content">
                                                            <div class="media">
                                                                <div class="media-content">
                                                                    {/* // <!--Book Card--> */}
                                                                    <p id="currentBook" class="title is-4">{book.title} </p>
                                                                    <p id="currentAuthor" class="subtitle is-6">By- {book.author}</p>

                                                                </div>
                                                            </div>
                                                            <h5 class="tag is-info">{book.read ? 'Completed' : 'Reading'}</h5>
                                                            <p style={bookInlineStyle.myRating} id="myrating"><sub>My Rating</sub></p>
                                                            <progress class="progress is-small is-warning" value={book.myrating} max="10">45%</progress>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                )
                            }

                        </section>
                        <footer class="modal-card-foot">
                            <button class="button" onClick={(event: UIEvent) => this.closeModal(event)}>Close</button>
                        </footer>
                    </div>

                </div>
            </div>
        )
    }

}