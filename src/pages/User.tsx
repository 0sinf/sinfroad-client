import useAuthStore from "../store/useAuthStore";
import Loading from "../components/Loading";
import Profile from "../components/Profile";

export default function User() {
  const { user } = useAuthStore();

  if (!user) {
    return <Loading />;
  }

  return (
    <main role="main" className="main">
      <Profile user={user} />
    </main>
  );
}
