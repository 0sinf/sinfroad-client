import { useState } from "react";
import Button from "../components/Button";
import { Input } from "../components/Input";
import useAuthStore from "../store/useAuthStore";
import Loading from "../components/Loading";
import "./User.css";

export default function User() {
  const { user } = useAuthStore();

  if (!user) {
    return <Loading />;
  }

  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [username, setUsername] = useState<string>(user.name);

  // TODO: Update username

  return (
    <main role="main" className="main">
      <form className="user__container">
        <Input
          name="email"
          value={user?.email}
          className="input user__email"
          disabled
        />
        <Input
          name="username"
          defaultValue={username}
          className="input user__username"
          onChange={(event) => setUsername(event.target.value)}
          disabled={!isUpdating}
        />
        {isUpdating ? (
          <>
            <Button
              type="submit"
              value="수정하기"
              className="user__button-modify"
            />
            <Button
              value="취소하기"
              className="user__button-delete"
              btnStyle="secondary"
              onClick={() => setIsUpdating(false)}
            />
          </>
        ) : (
          <Button
            value="수정하기"
            className="user__button-modify"
            onClick={() => {
              setIsUpdating(true);
            }}
          />
        )}
      </form>
    </main>
  );
}
