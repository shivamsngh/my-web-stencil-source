import { Component } from '@stencil/core';
import firebase from 'firebase';
import { firebaseConfig } from '../../global/helper';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  componentWillLoad() {
    this.configureFirebase();
  }

  configureFirebase() {
    firebase.initializeApp(firebaseConfig);
    console.log('Firebase Configured!', firebase);
  }

  render() {
    return (
      <div class="stencil-root-container">
        {/* <header>
          <h1>Stencil App Starter</h1>
        </header> */}
        <my-web-nav></my-web-nav>
        <my-web-header></my-web-header>
        <main>
          {/* <stencil-router>
            <stencil-route url='/' component='app-home' exact={true}>
            </stencil-route>

            <stencil-route url='/profile/:name' component='app-profile'>
            </stencil-route>
          </stencil-router> */}
          <my-web-about></my-web-about>
          <my-web-social></my-web-social>
          <my-web-portfolio></my-web-portfolio>
          <my-web-more></my-web-more>
          <my-web-contact></my-web-contact>
        </main>
      </div>
    );
  }
}
