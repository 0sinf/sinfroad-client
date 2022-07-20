import "../css/toast.css";

export default function toast(message: string) {
  const toast = document.createElement("div");
  const TOAST_TIMEOUT = 3000;

  toast.classList.add("toast");
  toast.innerText = message;

  document.body.append(toast);
  toast.style.transform = "translate(0, -120%)";

  setTimeout(() => {
    toast.addEventListener(
      "transitionend",
      () => {
        toast.remove();
      },
      { once: true }
    );
    toast.removeAttribute("style");
  }, TOAST_TIMEOUT);
}
