import { Component } from '@stencil/core';

@Component({
    tag: 'my-web-more',
    styleUrl: 'app-more.component.css'
})
export class MyWebMore {
    render() {
        return (
            <aside class="bg-dark">
                <div class="container text-center">
                    <div class="call-to-action">
                        {/* <!-- <h2></h2> --> */}
                        {/* <!-- <a href="#" class="btn btn-default btn-xl sr-button"></a> --> */}
                    </div>
                </div>
            </aside>
        );
    }

}