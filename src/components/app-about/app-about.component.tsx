import { Component } from '@stencil/core';


@Component({
    tag: 'my-web-about',
    styleUrl: 'app-about.component.css'
})
export class MyWebAbout {

    render() {
        return (
            <section class="bg-primary" id="about" >
                <div class="container" >
                    <div class="row" >
                        <div class="col-lg-8 col-lg-offset-2 text-center" >
                            <h2 class="section-heading" > about.heading
                                </h2>
                            <hr class="light" />
                            <p class="text-faded" > about.introText </p>
                            <p class="text-faded" > about.abtPassionText </p>
                            <a href="#services" class="page-scroll btn btn-default btn-xl sr-button" > Know More! </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}