import Button from "../components/Button";
import { Input } from "../components/Input";
import useAuthStore from "../store/useAuthStore";
import "./User.css";

export default function User() {
  const { user } = useAuthStore();

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
          disabled
        />
        <Button value="수정하기" className="user__button-modify" />
      </div>
    </main>
  );
}
