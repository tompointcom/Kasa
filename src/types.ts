export interface Logement {
    id: string;
    title: string;
    location: string;
    tags: string[];
    pictures: string[];
    cover: string;
    host: {
      name: string;
      picture: string;
    };
    rating: number;
    description: string;
    equipments: string[];
  }