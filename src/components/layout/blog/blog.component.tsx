import { Component } from '@stencil/core';

@Component({
    tag: 'my-web-blog',
    styleUrl: 'blog.component.css'
})
export class MyWebBlog {
    render() {
        return (<div>
            <i class="fa fa-4x fa-rss text-primary sr-icons"></i>
            <h3>Blog</h3>
            <div class="text-muted">
                <ul class="rss-items">
                    <li class="rss-item">
                        <a href="{{blog.url}}" target="_blank" rel='noopener'>blog.title</a>
                        <br />
                        <span></span>
                    </li>
                </ul>
            </div >
        </div>

        )
    }
}
