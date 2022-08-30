const MILLI_SEC = 1000;
const SEC = 60;
const MINUTE = SEC * 60;
const DAY = 30;
const MONTH = DAY * 12;

export default function getDatetime(dateString: string) {
  // TODO: Think using moment.js

  const date = new Date(dateString);
  const now = new Date();

  const diffOfTime = Math.floor((now.getTime() - date.getTime()) / MILLI_SEC);
  const diffOfDate = Math.floor(now.getDate() - date.getDate());

  if (diffOfDate) {
    if (diffOfDate < DAY) {
      return `${diffOfDate}일 전`;
    } else if (diffOfDate < MONTH) {
      return `${Math.floor(diffOfDate / DAY)}달 전`;
    } else {
      return `${Math.floor(diffOfDate / MONTH)}년 전`;
    }
  }

  if (diffOfTime < SEC) {
    return `${diffOfTime}초 전`;
  } else if (diffOfTime < MINUTE) {
    return `${Math.floor(diffOfTime / SEC)}분 전`;
  } else {
    return `${Math.floor(diffOfTime / MINUTE)}시간 전`;
  }
}
