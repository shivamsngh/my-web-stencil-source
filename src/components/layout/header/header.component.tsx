import { Component } from '@stencil/core';
import firebase from 'firebase/app';
import { CardEvent } from '../../../global/CardEvent';


@Component({
    tag: 'my-web-header',
    styleUrl: 'header.component.css'
})
export class MyWebHeader {

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
        
        return this.getRecentEvents();
    }

    render() {
        const tagInlineStyle = {
            color: 'white'
        }
        const quoteInineStyle = {
            color: 'black',
            transform: 'scale(-1)'
        }
        return (
            <header>
                <div class="header-content">
                    <div class="header-content-inner">
                        <h1 id="homeHeading">Shivam Singh</h1>
                        <hr />
                        <p style={tagInlineStyle}>Researcher | Developer | Wanderer | Hobby Cook | Avid Reader</p>
                        <hr />
                        <a href="https://www.twitter.com/sshivamsngh" target="_blank" rel="noopener" class="btn btn-social-icon btn-twitter">
                            <span class="fa fa-4x fa-twitter"></span>
                        </a>
                        <a href="https://www.github.com/shivamsngh" target="_blank" rel="noopener" class="btn btn-social-icon btn-github">
                            <span class="fa fa-4x fa-github"></span>
                        </a>
                        <a href="https://www.linkedin.com/in/shivamsngh" target="_blank" rel="noopener" class="btn btn-social-icon btn-linkedin">
                            <span class="fa fa-4x fa-linkedin"></span>
                        </a>
                        <p></p>
                        <p style={quoteInineStyle}>
                            <i class="fa fa-quote-left" aria-hidden="true"></i> Kitkat , Batman, Rayban...
        <i class="fa fa-quote-right" aria-hidden="true"></i>
                        </p>
                    </div>
                </div>
                {/* <!-- News, Events and Updates --> */}
                <div class="side-bar" id="eventsarea">

                    <div id="eventscreen">
                        {
                            this.events.map((event) =>
                                <app-recent-event-card cardEvent={event} ></app-recent-event-card>)
                        }
                    </div>
                </div>
                {/* //   News, Events and Updates */}
            </header >
        )
    }
}