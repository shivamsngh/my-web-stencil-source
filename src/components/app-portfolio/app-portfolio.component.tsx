import { Component } from '@stencil/core';

@Component({
    tag: 'my-web-portfolio',
    styleUrl: 'app-portfolio.component.css'
})
export class MyWebPortfolio {
    render() {
        return (
            <section class="no-padding" id="portfolio">
                <div class="container-fluid">
                    <div class="row no-gutter">
                        <div class="col-lg-4 col-sm-6">
                            <a href="#" class="portfolio-box">
                                <img src="assets/img/portfolio/thumbnails/{{item.thumbnail}}" class="img-responsive" alt="portfolio" />
                                <div class="portfolio-box-caption">
                                    <div class="portfolio-box-caption-content">
                                        <div class="project-category text-faded">
                                            item.title
							</div>
                                        <div class="project-name">
                                            detail
							</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}