import { Component } from '@stencil/core';

@Component({
    tag: 'my-web-twitter',
    styleUrl: 'twitter.component.css'
})
export class MyWebTwitter {
    render() {
        return (<div>
            <div class="has-text-centered">
                <i class="fab fa-4x fa-twitter"></i>
                <h3>Tweets</h3>
            </div>
            {/* <!--Twitter Feed--> */}
            <div class="card twitter-box">
                <a class="twitter-timeline" href="https://twitter.com/sshivamsngh?ref_src=twsrc%5Etfw">Tweets by Shivam</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </div>
        </div>

        )
    }
}