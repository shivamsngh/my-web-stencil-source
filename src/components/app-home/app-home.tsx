import { Component } from '@stencil/core';
import { ContactDetails } from '../../global/ContactDetails';
import { Portfolio } from '../../global/Portfolio';
import { About } from '../../global/About';


@Component({
  tag: 'my-web-home',
  styleUrl: 'app-home.css'
})
export class MyWebHome {

  contact: ContactDetails = {
    heading: `Let's Get In Touch!`,
    text: `Up for a discussion? That's great! Give a call or send an email and I will get back to you as soon as possible!`,
    phone: `+91 9696644017`,
    email: `shivamsngh@hotmail.com`
  }


  portfolio: Portfolio[] = [{
    title: 'Publications',
    details: ['Human Computer Interaction', 'Internet of Things', 'Artificial Intelligence'],
    thumbnail: '1.jpg'
  },
  {
    title: 'Applications',
    details: ['https://github.com/shivamsngh'],
    thumbnail: '2.jpg'
  },
  {
    title: 'Projects',
    details: ['AI, ML, Human Computer Interacion, IoT, Virtual and Augmented reality'],
    thumbnail: '3.jpg'
  }
  ];

  about: About = {
    heading: `A little about me!`,
    introText: `Human Computer Interaction, Internet of Things, Open Source Innovation, AI, Machine Learning, Modern Web Development,
    Progressive Web Apps.`,
    // tslint:disable-next-line:max-line-length
    abtPassionText: `I wander, try to jump from highest peaks in the world (Last jump was 160 M), take keen interest in Defence and Strategy discussions.`
  };

  render() {
    return (
      <div>
        <my-web-header backgroundColor="whitesmoke" textColor="black"></my-web-header>
        <my-web-about aboutYou={this.about}></my-web-about>
        <my-web-social></my-web-social>
        <my-web-portfolio portfolio={this.portfolio}></my-web-portfolio>
        <my-web-more></my-web-more>
        <my-web-contact contact={this.contact}></my-web-contact>
      </div>
    );
  }
}
