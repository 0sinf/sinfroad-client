export interface Image {
  id: string;
  url: string;
}

export interface IPost {
  id: string;
  title: string;
  contents: string;
  address: string;
  images: Image[];
  created: string;
  updated: string;
}
