import Button from "../components/Button";
import { Input } from "../components/Input";
import useAuthStore from "../store/useAuthStore";
import "./User.css";
import { useState } from "react";

export default function User() {
  const { user } = useAuthStore();
  const [isUpdating, setIsUpdating] = useState<boolean>(false);

  // FIXME: Manage state for username
  // TODO: Update username

  return (
    <main role="main" className="main">
      <div className="user__container">
        <Input
          name="email"
          value={user?.email}
          className="input user__email"
          disabled
        />
        <Input
          name="username"
          value={user?.name}
          className="input user__username"
          disabled={!isUpdating}
        />
        {isUpdating ? (
          <>
            <Button value="수정하기" className="user__button-modify" />
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
      </div>
    </main>
  );
}
