import {Thumbnail} from './thumbnail';
import { Comic } from './comic';

export class Character{
    id: number;
    name: string;
    description: string;
    modified: string;
    thumbnail: Thumbnail;
    resourceURI: string;
    comics: Comic;
    series: {};
    stories: {};
    events: {};
    urls: [];
}