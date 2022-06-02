import "../css/toast.css";

const time = 3000;

export default function toast(msg: string) {
  const div = document.createElement("div");

  div.classList.add("toast");
  div.innerText = msg;

  document.body.append(div);

  div.style.transform = "translate(0, -100%)";
  setTimeout(() => {
    div.addEventListener(
      "transitionend",
      () => {
        div.remove();
      },
      { once: true }
    );
    div.removeAttribute("style");
  }, time);
}
