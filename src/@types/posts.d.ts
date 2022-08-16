export interface Image {
  id: string;
  url: string;
}

export interface IPost {
  id: string;
  title: string;
  contents: string;
  address: string;
  likes: number;
  beliked: boolean;
  images: Image[];
  created: string;
  updated: string;
}
