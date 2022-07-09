import { rest } from "msw";
import { IPost } from "../../@types/posts";

const listOfPost = [
  {
    id: "28e7cdd1-cf5b-453c-bb7c-291a4f2ca3b9",
    title: "title-1",
    contents: "contents-1",
    address: "address-1",
    images: [
      {
        id: "mock-image-id1",
        url: "https://mp-seoul-image-production-s3.mangoplate.com/360830/1640124_1616941786815_18237?fit=around|738:738&crop=738:738;*,*&output-format=jpg&output-quality=80",
      },
      {
        id: "mock-image-id2",
        url: "https://thumbs.dreamstime.com/b/closeup-internet-url-address-10171215.jpg",
      },
    ],
    created: new Date().toString(),
    updated: new Date().toString(),
  },
  {
    id: "6fc16d1d-5aec-4f43-a914-ce1ea8b29afc",
    title: "title-2",
    contents: "contents-2",
    address: "address-2",
    images: [
      {
        id: "mock-image-id2",
        url: "https://thumbs.dreamstime.com/b/closeup-internet-url-address-10171215.jpg",
      },
    ],
    created: new Date().toString(),
    updated: new Date().toString(),
  },
  {
    id: "7c4fbb75-8ce7-435c-8cf0-742f6d16993f",
    title: "title-3",
    contents: "contents-3",
    address: "address-3",
    images: [
      {
        id: "mock-image-id1",
        url: "https://mp-seoul-image-production-s3.mangoplate.com/360830/1640124_1616941786815_18237?fit=around|738:738&crop=738:738;*,*&output-format=jpg&output-quality=80",
      },
    ],
    created: new Date().toString(),
    updated: new Date().toString(),
  },
  {
    id: "8e208cad-a7c3-49ea-b0de-d333314c0f90",
    title: "title-4",
    contents: "contents-4",
    address: "address-4",
    images: [
      {
        id: "mock-image-id1",
        url: "https://mp-seoul-image-production-s3.mangoplate.com/360830/1640124_1616941786815_18237?fit=around|738:738&crop=738:738;*,*&output-format=jpg&output-quality=80",
      },
    ],
    created: new Date().toString(),
    updated: new Date().toString(),
  },
  {
    id: "72f142a3-7ce3-42d4-b079-441d458937ef",
    title: "title-5",
    contents: "contents-5",
    address: "address-5",
    images: [
      {
        id: "mock-image-id1",
        url: "https://mp-seoul-image-production-s3.mangoplate.com/360830/1640124_1616941786815_18237?fit=around|738:738&crop=738:738;*,*&output-format=jpg&output-quality=80",
      },
    ],
    created: new Date().toString(),
    updated: new Date().toString(),
  },
  {
    id: "b85bfe6a-ce6e-4576-8b6f-aa295e3d2442",
    title: "title-6",
    contents: "contents-6",
    address: "address-6",
    images: [
      {
        id: "mock-image-id1",
        url: "https://mp-seoul-image-production-s3.mangoplate.com/360830/1640124_1616941786815_18237?fit=around|738:738&crop=738:738;*,*&output-format=jpg&output-quality=80",
      },
    ],
    created: new Date().toString(),
    updated: new Date().toString(),
  },
  {
    id: "7f264534-168b-418b-9746-9ab2188be5e5",
    title: "title-7",
    contents: "contents-7",
    address: "address-7",
    images: [
      {
        id: "mock-image-id1",
        url: "https://mp-seoul-image-production-s3.mangoplate.com/360830/1640124_1616941786815_18237?fit=around|738:738&crop=738:738;*,*&output-format=jpg&output-quality=80",
      },
    ],
    created: new Date().toString(),
    updated: new Date().toString(),
  },
  {
    id: "48ed160d-b361-4cb5-8760-1249d02d6f2f",
    title: "title-8",
    contents: "contents-8",
    address: "address-8",
    images: [
      {
        id: "mock-image-id1",
        url: "https://mp-seoul-image-production-s3.mangoplate.com/360830/1640124_1616941786815_18237?fit=around|738:738&crop=738:738;*,*&output-format=jpg&output-quality=80",
      },
    ],
    created: new Date().toString(),
    updated: new Date().toString(),
  },
  {
    id: "45c8cc8e-e512-4e4e-b59e-a7644e558c4e",
    title: "title-9",
    contents: "contents-9",
    address: "address-9",
    images: [
      {
        id: "mock-image-id1",
        url: "https://mp-seoul-image-production-s3.mangoplate.com/360830/1640124_1616941786815_18237?fit=around|738:738&crop=738:738;*,*&output-format=jpg&output-quality=80",
      },
    ],
    created: new Date().toString(),
    updated: new Date().toString(),
  },
  {
    id: "f8ff87fe-0550-42d7-b61b-cbf684a93693",
    title: "title-10",
    contents: "contents-10",
    address: "address-10",
    images: [
      {
        id: "mock-image-id1",
        url: "https://mp-seoul-image-production-s3.mangoplate.com/360830/1640124_1616941786815_18237?fit=around|738:738&crop=738:738;*,*&output-format=jpg&output-quality=80",
      },
    ],
    created: new Date().toString(),
    updated: new Date().toString(),
  },
  {
    id: "98a66f5b-80e7-4cc1-9334-6f7b7849413c",
    title: "title-11",
    contents: "contents-11",
    address: "address-11",
    images: [
      {
        id: "mock-image-id1",
        url: "https://mp-seoul-image-production-s3.mangoplate.com/360830/1640124_1616941786815_18237?fit=around|738:738&crop=738:738;*,*&output-format=jpg&output-quality=80",
      },
    ],
    created: new Date().toString(),
    updated: new Date().toString(),
  },
  {
    id: "ab2e35d2-bf78-47a8-8dac-0b4d6102b9a8",
    title: "title-12",
    contents: "contents-12",
    address: "address-12",
    images: [
      {
        id: "mock-image-id1",
        url: "https://mp-seoul-image-production-s3.mangoplate.com/360830/1640124_1616941786815_18237?fit=around|738:738&crop=738:738;*,*&output-format=jpg&output-quality=80",
      },
    ],
    created: new Date().toString(),
    updated: new Date().toString(),
  },
];

export const posts = [
  rest.get(`${import.meta.env.VITE_API_SERVER_URI}/posts`, (req, res, ctx) => {
    const page = Number(req.url.searchParams.get("page")) || 1;
    const perPage = 10;
    const total = listOfPost.length;
    const start = (page - 1) * perPage;
    const end = start + perPage <= total ? start + perPage : total;
    const hasNext = start + perPage < total;
    const posts = listOfPost.slice(start, end);

    const pagination = {
      page,
      hasNext,
    };

    return res(ctx.status(200), ctx.json({ posts, pagination }));
  }),

  rest.get(
    `${import.meta.env.VITE_API_SERVER_URI}/posts/:postId`,
    (req, res, ctx) => {
      const { postId } = req.params;

      const post = listOfPost.find((p) => p.id === postId);

      return res(ctx.status(200), ctx.json({ post }));
    }
  ),

  rest.post(`${import.meta.env.VITE_API_SERVER_URI}/posts`, (req, res, ctx) => {
    if (req.headers.get("authorization")?.split("Bearer ")[1] === "undefined") {
      return res(ctx.status(401));
    }

    return res(
      ctx.status(201),
      ctx.json({ id: "28e7cdd1-cf5b-453c-bb7c-291a4f2ca3b9" })
    );
  }),

  rest.patch(
    `${import.meta.env.VITE_API_SERVER_URI}/posts/:postId`,
    (req, res, ctx) => {
      if (
        req.headers.get("authorization")?.split("Bearer ")[1] === "undefined"
      ) {
        return res(ctx.status(401));
      }

      const { postId } = req.params;
      const { title, contents, address } = req.body as IPost;

      listOfPost.map((p) => {
        if (p.id === postId) {
          p.title = title;
          p.contents = contents;
          p.address = address;
        }
      });

      return res(ctx.status(200), ctx.json({}));
    }
  ),

  rest.delete(
    `${import.meta.env.VITE_API_SERVER_URI}/posts/:postId`,
    (req, res, ctx) => {
      const { postId } = req.params;
      const idx = listOfPost.findIndex((p) => p.id === postId);
      listOfPost.splice(idx, 1);

      return res(ctx.status(200), ctx.json({}));
    }
  ),
];
