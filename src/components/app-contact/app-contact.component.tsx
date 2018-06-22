import { Component } from '@stencil/core';


@Component({
    tag: 'my-web-contact',
    styleUrl: 'app-contact.component.css'
})
export class MyWebContact {

    render() {
        return (
            <section id="contact">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-lg-offset-2 text-center">
                            <h2 class="section-heading">contact.heading </h2>
                            <hr class="primary" />
                            <p>contact.text</p>
                        </div>
                        <div class="col-lg-4 col-lg-offset-2 text-center">
                            <i class="fa fa-phone fa-3x sr-contact"></i>
                            <p> contact.phone </p>
                        </div>
                        <div class="col-lg-4 text-center">
                            <i class="fa fa-envelope-o fa-3x sr-contact" ></i>
                            <p>
                                <a href="mailto:{{contact.email}}"> contact.email</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}