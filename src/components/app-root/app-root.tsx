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
        <my-web-nav></my-web-nav>
        <main>
          <stencil-router>
            <stencil-route url='/' component='my-web-home' exact={true}>
            </stencil-route>
            <stencil-route url='/bucketlist' component='my-web-bucketlist'>
            </stencil-route>
            <stencil-route url='/event' component='my-web-event'>
            </stencil-route>
          </stencil-router>
        </main>
      </div>
    );
  }
}
