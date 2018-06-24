import { Component, Prop } from '@stencil/core';
import firebase from 'firebase/app';
import { CardEvent } from '../../../global/CardEvent';


@Component({
    tag: 'my-web-header',
    styleUrl: 'header.component.css'
})
export class MyWebHeader {

    @Prop() backgroundImage: string;
    @Prop() textColor: string;
    @Prop() backgroundColor: string;
    @Prop() type: string = 'plain';
    @Prop() videoData = { location: '' };
    @Prop({ context: 'isServer' }) private isServer: boolean;

    private db = firebase.database();
    events: CardEvent[] = [];


    public getRecentEvents(): Promise<CardEvent[]> {
        return this.db.ref('/events').once('value').then((eventSnapshot: any) => {
            this.events = (eventSnapshot.val()) || [new CardEvent()]
            console.log("events", this.events);
            return this.events;
        });
    }

    componentWillLoad() {
        if (this.isServer === false) {
        return this.getRecentEvents();
        }
    }

    render() {
        const tagInlineStyle = {
            color: this.textColor,
            textTransform: 'uppercase',
            'font-size': '50px'
        }
        const quoteInineStyle = {
            color: 'black',
            transform: 'scale(-1)'
        }
        const headerInlineStyle = this.backgroundImage ? {

            'background-image': `url('${this.backgroundImage}')`
        } : {
                'background': this.backgroundColor
            }
        console.log("headerinstyle", headerInlineStyle)
        if (this.type === 'video') {
            return (
                <header class="hero is-fullheight video is-dark is-bold" id="home">
                    <div id="jumpvideo" class="hero-video" >
                        <video poster="assets/img/bungy/optimized/thesuspension_0.jpg" id="bgvid" playsinline muted autoplay loop>
                            <source src="assets/video/leapofaplutonian.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div class="hero-body">
                        <div class="container has-text-centered ">
                            <nav class="level ">
                                <div class="level-item has-text-centered">
                                    <div>
                                        <p class="heading has-text-white">Bucketlist</p>
                                        <p class="title has-text-white">Jump Number 1</p>
                                    </div>
                                </div>
                                <div class="level-item has-text-centered">
                                    <div>
                                        <p class="heading has-text-white">Height</p>
                                        <p class="title has-text-white">83 meters</p>
                                    </div>
                                </div>
                                <div class="level-item has-text-centered">
                                    <div>
                                        <a id="bungyloc" class="has-text-info" href={this.videoData.location} target="_blank">
                                            <span class="fas fa-4x fa-map-marker"></span>
                                        </a>
                                    </div>
                                </div>
                                <div class="level-item has-text-centered">
                                    <div>
                                        <p class="heading has-text-white">Place</p>
                                        <p class="title has-text-white">Rishikesh</p>
                                    </div>
                                </div>
                                <div class="level-item has-text-centered">
                                    <div>
                                        <p class="heading has-text-white">Feature</p>
                                        <p class="title has-text-white">Highest in India</p>
                                    </div>
                                </div>

                            </nav>
                        </div>
                    </div>
                </header>
            )
        }

        else {
            return (
                <header style={headerInlineStyle} class="hero is-fullheight" id="home">                {/* <!-- News, Events and Updates --> */}
                    <aside class="side-bar tile" id="eventsarea">
                        <div id="eventscreen">
                            {
                                this.events.map((event) =>
                                    <app-recent-event-card class="only-on-desktop" cardEvent={event} ></app-recent-event-card>
                                )
                            }
                        </div>

                    </aside>

                    {/* //   News, Events and Updates */}
                    <div class="hero-head">
                    </div>
                    <div class="hero-body">
                        <div class="container content has-text-centered">
                            <h1 class="title" style={tagInlineStyle} id="homeHeading">Shivam Singh</h1>
                            <hr />
                            <p>Researcher | Developer | Wanderer | Hobby Cook | Avid Reader</p>
                            <hr class="border" />
                            <a href="https://www.twitter.com/sshivamsngh" target="_blank" rel="noopener">
                                <span class="fab fa-4x fa-twitter"></span>
                            </a>
                            <a href="https://www.github.com/shivamsngh" target="_blank" rel="noopener">
                                <span class="fab fa-4x fa-github"></span>
                            </a>
                            <a href="https://www.linkedin.com/in/shivamsngh" target="_blank" rel="noopener" >
                                <span class="fab fa-4x fa-linkedin-in"></span>
                            </a>
                            <hr />
                            <p style={quoteInineStyle}>
                                <i class="fa fa-quote-left" aria-hidden="true"></i> Kitkat , Batman, Rayban...
            <i class="fa fa-quote-right" aria-hidden="true"></i>
                            </p>
                        </div>
                    </div>
                    <div class="hero-foot">
                    </div>

                </header >
            )

        }
    }
}
