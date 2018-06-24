import { Component, Prop } from '@stencil/core';
import { ContactDetails } from '../../global/ContactDetails';


@Component({
    tag: 'my-web-contact',
    styleUrl: 'app-contact.component.css'
})
export class MyWebContact {

    @Prop() contact: ContactDetails;
    render() {
        return (
            <section id="contact" class="hero is-dark is-bold">
                <div class="hero-body">
                    <div class="has-text-centered">
                        <h2 class="title">{this.contact.heading} </h2>
                        <hr class="primary" />
                        <h3 class="subtitle" >{this.contact.text}</h3>
                        <span></span>
                    </div>
                    <div class="columns">
                        <div class="column has-text-centered">
                        <div class="content">
                        <i class="fa fa-phone fa-3x sr-contact"></i>
                            <p > {this.contact.phone} </p>
                        </div>
                            
                        </div>
                        <div class="column has-text-centered">
                            <i class="fa fa-envelope fa-3x" ></i>
                            <p>
                                <a href="mailto:{{contact.email}}"> {this.contact.email}</a>
                            </p>
                           
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}