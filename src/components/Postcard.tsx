export default function Postcard({
  title,
  created,
  image,
}: {
  title: string;
  created: string;
  image: string;
}) {
  const date = new Date(created).toLocaleDateString("ko-KR");

  return (
    <div className="post">
      <figure className="post__img">
        <img src={image} alt={title} />
      </figure>
      <h2 className="post__title">{title}</h2>
      <div className="post__created">{date}</div>
    </div>
  );
}
