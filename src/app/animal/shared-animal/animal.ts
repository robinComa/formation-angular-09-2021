export enum Species {
    Cat = 'cat',
    Dog = 'dog'
}

export interface Owner {
    name: string;
    phone: string;
    email: string;
}

export interface Animal {
    id: number;
    name: string;
    species: Species;
    comment: string;
    lastVisit: Date;
    owner: Owner;
    image: string;
    chipped: boolean;
}
