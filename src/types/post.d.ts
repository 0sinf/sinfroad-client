export interface Post {
  id: string;
  title: string;
  contents: string;
  address: string;
  created: string;
  updated: string;
}

export interface PostListRes {
  statusCode: number;
  data: Post[];
}
