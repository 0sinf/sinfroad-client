import { useState, FormEvent } from "react";
import { IUser } from "../@types/users";
import { Input } from "./Input";
import { updateUsername } from "../api/users";
import toast from "../utils/toast";
import useAuthStore from "../store/useAuthStore";
import Button from "./Button";
import "./Profile.css";

export default function Profile({ user }: { user: IUser }) {
  const { setUser } = useAuthStore();

  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const { name, email } = user;
  const [username, setUsername] = useState<string>(name);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const { response } = await updateUsername(username);

    if (!response.ok) {
      toast("유저 정보를 수정할 수 없습니다.");
    }

    setUser({ ...user, name: username });
    setIsUpdating(false);
  };

  return (
    <form className="user__container" onSubmit={handleSubmit}>
      <Input
        name="email"
        value={email}
        className="input user__email"
        disabled
      />
      <Input
        name="username"
        value={username}
        className="input user__username"
        setValue={setUsername}
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
            onClick={() => {
              setIsUpdating(false);
              setUsername(user.name);
            }}
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
  );
}
