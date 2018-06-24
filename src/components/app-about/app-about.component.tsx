import { Component, Prop } from '@stencil/core';
import { About } from '../../global/About';


@Component({
    tag: 'my-web-about',
    styleUrl: 'app-about.component.css'
})
export class MyWebAbout {

    @Prop() aboutYou: About;
    render() {
        return (
            <section class="section" id="about" >
                <div class="container has-text-centered content" >
                        <div class="column text-center" >
                            <h2 class="title" > {this.aboutYou.heading}
                            </h2>
                            <hr class="light" />
                            <p class="text-faded" > {this.aboutYou.introText} </p>
                            <p class="text-faded" > {this.aboutYou.abtPassionText} </p>
                            <a href="#services" class="page-scroll btn btn-default btn-xl sr-button" > Know More! </a>
                        </div>
                </div>
            </section>
        );
    }
}