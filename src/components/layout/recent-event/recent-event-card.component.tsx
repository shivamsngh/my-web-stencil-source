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
            float: ''
        }
        return (
            <div class="min-margin">
                <div class="message is-dark">
                    <div class="message-header" >
                        <p>{this.cardEvent.eventName}</p>
                        <a href="#" class="icon">
                            <span class="" style={eventBubbleInlineStyle}></span>
                        </a>
                    </div >
                    <div class="message-body">
                        {this.cardEvent.details}
                        <hr/>
                       <span><date class="is-pulled-left"> {this.cardEvent.startDate}</date></span> 
                        <a href={this.cardEvent.link} class="is-pulled-right" target="_blank" rel="noopener">Details</a>
                        <hr class="is-invisible"/>
                    </div>

                </div >
            </div>

        );
    }
}

