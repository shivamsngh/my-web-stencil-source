import { Component, Prop } from '@stencil/core'
import { Photo } from '../../../global/BucketList';

@Component({
    tag: 'my-web-photo-gallery',
    styleUrl: 'photo-gallery.component.css'
})
export class MyWebPhotoGallery {
    @Prop() photos: Photo[];

    render() {
        const photoInlineStyle = {
            photoGrid: { background: '' },
            photoDetailOrder: (i) => { return { 'order': i % 2 === 0 ? '1' : '2' } }
        }
        return (
            this.photos.map((photo: Photo, index: number) =>
                <div class="columns is-gapless is-marginless is-mobile has-background-light has-text-dark is-bold" style={photoInlineStyle.photoGrid}>
                    <div class="column" style={photoInlineStyle.photoDetailOrder(index)}>
                        <article class="message">
                            <div class="message-body">
                                <p class="subtitle">{photo.caption}</p>
                                <p>
                                    <i class="fa fa-quote-left" aria-hidden="true"></i>
                                    <i> {photo.quote} </i>
                                    <i class="fa fa-min fa-quote-right" aria-hidden="true"></i>
                                </p>
                                <p>{photo.detail}</p>
                                <sub>{photo.timeStamp}</sub>
                            </div>

                        </article>

                    </div>
                    <div class="column" style={photoInlineStyle.photoDetailOrder(index + 1)}>
                        <figure class="image is-16by9">
                            <img src={`assets/img/bungy/optimized/${photo.photoId}`} />
                        </figure>
                    </div>
                </div>
            )
        )

    }
}