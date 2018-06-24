export class BucketList{
    name: string;
    location: string;
    link: string;
    jumpStats:Array<JumpStats>;
    completed:boolean;
   
}

export interface JumpStats{
    height: string;
    allPhotoBlogData:Array<Photo>;
    mapLocation: string;
    place: string;
    jumpDate: string;
    blogFile: any;
}
export interface Photo {
    caption: string;
    quote: string;
    photoName: string;
    photoId: string
    detail: string;
    timeStamp: string;
    videoUrl: string;
}