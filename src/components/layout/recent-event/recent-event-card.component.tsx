import { Component, Prop, Watch } from '@stencil/core';
import { CardEvent } from '../../../global/CardEvent'


@Component({
    tag: 'app-recent-event-card',
    styleUrl: 'recent-event-card.component.css'
})
export class RecentEventCard {
    @Prop() cardEvent: CardEvent;
    @Watch('cardEvent')
    watchHandler(newValue: CardEvent, oldValue: CardEvent) {
        console.log('The new value of activated is: ', newValue, 'oldvalue', oldValue);
    }
    render() {
        const eventBubbleInlineStyle = {
            float: 'right'
        }
        return (

            <div class="event-bubble  bg-primary left-top">
                <div class="eventtext" >
                    <a href="#">
                        <span class="glyphicon glyphicon-bookmark" style={eventBubbleInlineStyle}></span>
                    </a>
                    <div class="eventtext-header">
                        <h4 class="recent-card-header">{this.cardEvent.eventName}</h4>
                    </div>
                    <p class="recent-card-body">{this.cardEvent.details}</p>
                    <div class="recent-card-footer">
                        <span> {this.cardEvent.startDate}</span>
                        <a href='{{event.link}}' class='btn btn-xs' target="_blank" rel="noopener">Details</a>
                    </div>
                </div >
            </div >
        );
    }
}

