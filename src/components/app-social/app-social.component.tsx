import { Component } from "@stencil/core";
import { Books } from "../../global/Books";
import firebase from 'firebase/app';

@Component({
    tag: 'my-web-social',
    styleUrl: 'app-social.component.css'
})
export class MyWebSocial {

    private db = firebase.database();
    books: Books[] = [];
    currentBook: Books;

    componentWillLoad() {
        return this.getBooksLibrary();
    }

    public getBooksLibrary() {
        return this.db.ref('/books').once('value').then((booksSnapshot: any) => {
            this.books = (booksSnapshot.val()) || [new Books()]
            console.log("books", this.books);
            this.books.forEach(x => {
                if (!x.read) {
                    this.currentBook = x;
                }
            });
            return this.books;
        });
    }

    render() {
        return (
            <section id="services">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <h2 class="section-heading">Social</h2>
                            <hr class="primary" />
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        {/* <!-- Blog --> */}
                        <div class="col-lg-4 col-md-8 text-center">
                            <div class="service-box">
                                <app-blog></app-blog>
                            </div>
                        </div>
                        {/* // <!-- /Blog --> */}

                        {/* // <!-- Twitter --> */}
                        <div class="col-lg-4 col-md-8 text-center">
                            <div class="service-box">
                                <app-twitter></app-twitter>
                            </div>
                        </div>
                        {/* <!-- /Twitter --> */}

                        {/* <!-- Books --> */}
                        <div class="col-lg-4 col-md-8 text-center">
                            <div class="service-box">
                                <my-web-book-library books={this.books} currentBook={this.currentBook}></my-web-book-library>
                            </div>
                        </div>
                        {/* <!-- /Books --> */}
                    </div>
                </div>
            </section>
        );
    }
}
