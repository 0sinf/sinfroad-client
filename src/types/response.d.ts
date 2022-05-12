interface Post {
  id: string;
  title: string;
  contents: string;
  images: Array<string>;
  createdAt: string;
  updatedAt: string;
}

interface PostInList extends Omit<Post, "contents" | "images"> {
  image: string;
}

interface SuccessRes {}

interface createPostRes extends SuccessRes {
  postId: string;
}

interface PostsRes extends SuccessRes {
  posts: Array<PostInList>;
}

interface PostRes extends SuccessRes {
  post: Post;
}

interface FailRes {
  statusCode: number;
  message: string;
}
