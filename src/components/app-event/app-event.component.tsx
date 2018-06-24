import { Component, Prop } from '@stencil/core';
import firebase from 'firebase/app';
import { CardEvent } from '../../global/CardEvent';


@Component({
    tag: 'my-web-event',
    styleUrl: 'app-event.component.css'
})
export class MyWebEvent {

    private db = firebase.database();
    events: CardEvent[] = [];
    @Prop({ context: 'isServer' }) private isServer: boolean;


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
        return (
            this.events.map((event: CardEvent) =>
                <app-recent-event-card cardEvent={event} ></app-recent-event-card>
            )
        )
    }
}