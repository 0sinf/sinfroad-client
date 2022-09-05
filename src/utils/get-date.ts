const MILLI_SEC = 1000;
const SEC = 1;
const MINUTE = SEC * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const MONTH = DAY * 30;
const YEAR = MONTH * 12;

export default function getDatetime(dateString: string) {
  // TODO: Think using moment.js

  const date = new Date(dateString).getTime() / MILLI_SEC;
  const now = new Date().getTime() / MILLI_SEC;

  const diff = now - date;
  const inOneDay = diff < DAY;

  if (inOneDay) {
    if (diff < MINUTE) {
      return `${Math.floor(diff)}초 전`;
    } else if (diff < HOUR) {
      return `${Math.floor(diff / MINUTE)}분 전`;
    } else {
      return `${Math.floor(diff / HOUR)}시간 전`;
    }
  }

  if (diff < MONTH) {
    return `${Math.floor(diff / DAY)}일 전`;
  } else if (diff < YEAR) {
    return `${Math.floor(diff / MONTH)}달 전`;
  } else {
    return `${Math.floor(diff / YEAR)}년 전`;
  }
}
