export interface Post {
  id: string;
  title: string;
  contents: string;
  address: string;
  created: string;
  updated: string;
  images?: Image[];
  image?: string;
}

export interface Image {
  url: string;
}

export interface PostListRes {
  statusCode: number;
  data: Post[];
}

export interface PostRes {
  statusCode: number;
  data: Post;
}
