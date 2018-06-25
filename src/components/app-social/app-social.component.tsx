import { Component, Prop, State } from "@stencil/core";
import { Books } from "../../global/Books";
import firebase from 'firebase/app';

@Component({
    tag: 'my-web-social',
    styleUrl: 'app-social.component.css'
})
export class MyWebSocial {

    private db = firebase.database();
    @State() books: Books[];
    @State() currentBook: Books;
    @Prop({ context: 'isServer' }) private isServer: boolean;

    async componentWillLoad() {
        if (this.isServer === false) {
            console.log("this server is false", this.isServer)
            this.getBooksLibrary();
        }

    }

    public async getBooksLibrary() {
        const booksSnapshot = await this.db.ref('/books').once('value');
        this.books = (booksSnapshot.val()) || [new Books()]
        console.log("books", this.books);
        this.books.forEach(x => {
            if (!x.read) {
                this.currentBook = x;
            }
        });
    }

    render() {
        const blogData = {
            url: `https://www.googleapis.com/blogger/v3/blogs/4562383522539686383/posts`,
            key: `AIzaSyBgiSne19z3sYYRp-KC7HZajqT4SSR9iDM`
        };
        return (
            <section id="social" class="section">
                <div class="container has-text-centered">
                    <h2 class="title">Social</h2>
                    <hr class="light" />
                </div>
                <div class="columns">
                    {/* <!-- Blog --> */}
                    <div class="column">
                        <my-web-blog blogUrl={blogData.url} blogApiKey={blogData.key}></my-web-blog>
                    </div>
                    {/* // <!-- /Blog --> */}

                    {/* // <!-- Twitter --> */}
                    <div class="column">
                        <my-web-twitter></my-web-twitter>
                    </div>
                    {/* <!-- /Twitter --> */}

                    {/* <!-- Books --> */}
                    <div class="column">
                        <my-web-book-library books={this.books} currentBook={this.currentBook}></my-web-book-library>
                    </div>
                    {/* <!-- /Books --> */}
                </div>
            </section>
        );
    }
}
