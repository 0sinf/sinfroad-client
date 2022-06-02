const time = 3000;

export default function toast(msg: string) {
  const div = document.createElement("div");

  div.classList.add("toast");
  div.innerText = msg;

  document.body.append(div);

  setTimeout(() => {
    div.remove();
  }, time);
}
