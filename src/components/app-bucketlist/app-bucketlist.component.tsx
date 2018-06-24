import { Component, Prop, State } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import { Photo } from '../../global/BucketList';
import firebase from 'firebase/app';

@Component({
  tag: 'my-web-bucketlist',
  styleUrl: 'app-bucketlist.component.css'
})
export class MyWebBucketList {

  @Prop() match: MatchResults;
  @State() photos: Photo[] = [];
  @State() videoData = { location: '' };
  @Prop({ context: 'isServer' }) private isServer: boolean;
  private db = firebase.database();

  componentWillLoad() {
    if (this.isServer === false) {
      this.getPhotosLibrary();
    }
  }

  public getPhotosLibrary() {
    return this.db.ref('/listItems').once('value').then((photosSnapshot: any) => {
      console.log("photo snap", photosSnapshot.val())
      const photoData = (photosSnapshot.val()) || [];
      this.photos = photoData[0].jumpsStats[0].allPhotoBlogData;
      this.videoData.location = photoData[0].jumpsStats[0].mapLocation;
      console.log("photos", this.photos);
      return this.photos;
    });
  }

  render() {
    console.log("my-web0bucketlist rendering from comp", this.match, this.match.params.name);
    return (<div>
      <my-web-header type='video' videoData={this.videoData}></my-web-header>
      <my-web-photo-gallery photos={this.photos}></my-web-photo-gallery>
    </div>
    );
  }
}

