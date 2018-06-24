import { Component, Prop } from '@stencil/core';
import { BlogData, BlogResponse } from '../../../global/BlogData';

@Component({
    tag: 'my-web-blog',
    styleUrl: 'blog.component.css'
})
export class MyWebBlog {
    @Prop() blogUrl: string;
    @Prop() blogApiKey: string;
    blogs: BlogData[] = [];

    componentWillLoad() {
        return this.getBlogData();
    }

    public getBlogData() {
        // let param = new HttpParamm();
        console.log("I am getblodata")
        return fetch(`${this.blogUrl}?key=${this.blogApiKey}`)
            .then(res => res.json())
            .then((blogData: BlogResponse) => this.blogs = blogData.items)
            .catch(err => { throw new Error(err) })
    }

    render() {
        return (<div class="has-text-centered">
            <i class="fa fa-4x fa-rss text-primary sr-icons"></i>
            <h3>Blog</h3>
            {this.blogs.map((blog: BlogData) =>
                <div class="notification">
                    <a href={blog.url} target="_blank" rel='noopener'>{blog.title}</a>
                    <br />
                    <span innerHTML={blog.content}></span>
                </div>
            )}
        </div>
        )
    }
}
