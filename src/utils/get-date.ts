const MILLI_SEC = 1000;
const SEC = 60;
const MINUTE = 60;
const HOUR = 24;
const DAY = 30;
const MONTH = 12;

export default function getDate(dateString: string) {
  // TODO: Think using moment.js

  const date = new Date(dateString);
  const now = new Date();

  const diffOfTime = Math.floor((now.getTime() - date.getTime()) / MILLI_SEC);
  const diffOfDate = Math.floor(now.getDate() - date.getDate());

  if (diffOfDate) {
    if (diffOfDate < DAY) {
      return `${diffOfDate}일 전`;
    } else if (diffOfDate < MONTH * DAY) {
      return `${Math.floor(diffOfDate / DAY)}달 전`;
    } else {
      return `${Math.floor(diffOfDate / (DAY * MONTH))}년 전`;
    }
  }

  if (diffOfTime < SEC) {
    return `${diffOfTime}초 전`;
  } else if (diffOfTime < SEC * MINUTE) {
    return `${Math.floor(diffOfTime / SEC)}분 전`;
  } else {
    return `${Math.floor(diffOfTime / (SEC * HOUR))}시간 전`;
  }
}
