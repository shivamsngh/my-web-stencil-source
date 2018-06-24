import { Component, Prop } from '@stencil/core';
import { Portfolio } from '../../global/Portfolio';

@Component({
    tag: 'my-web-portfolio',
    styleUrl: 'app-portfolio.component.css'
})
export class MyWebPortfolio {
    @Prop() portfolio: Portfolio[] = [];


    render() {
        return (
            <section class="section" id="portfolio">
                <div class="container has-text-centered">
                    <h2 class="title">Portfolio</h2>
                    <hr class="light" />
                </div>
                <div class="columns">
                    {this.portfolio.map((item: Portfolio) =>
                        <div class="column">
                            <article class="message is-dark">
                                <div class="message-header">
                                    <p>{item.title}</p>
                                    {/* <button class="delete" aria-label="delete"></button> */}
                                </div>
                                <div class="message-body">
                                    <a href="#">
                                        {item.details.map((detail: String) =>
                                            <div class="project-name">
                                                {detail}
                                            </div>
                                        )}
                                    </a>
                                </div>
                            </article>
                        </div>
                    )}
                </div>
            </section>
        );
    }
}