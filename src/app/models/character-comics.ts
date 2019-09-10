import {Price} from './price';

export class CharacterComics{
    id: number;
    digitalId: number;
    title: string;
    issueNumber: number;
    variantDescription: string;
    description: string;
    modified: string;
    isbn: string;
    upc: string;
    diamondCode: string;
    ean: string;
    issn: string;
    format: string;
    pageCount: number;
    textObjects: [];
    resourceURI: string;
    urls: [];
    series: {};
    variants: [];
    collections: [];
    collectedIssues: [];
    dates: [];
    prices: Price[];
    thumbnail: {};
    images: [];
    creators: {};
    characters: {};
    stories: {};
    events: {};
} 