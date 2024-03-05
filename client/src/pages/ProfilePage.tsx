import { useAuth0 } from "@auth0/auth0-react";

function ProfilePage() {
  const { user } = useAuth0();

  // if (isLoading) {
  //   return <div>Loading ...</div>;
  // }

  // return (
  //   isAuthenticated && (
  //     <div>
  //       <img src={user.picture} alt={user.name} />
  //       <h2>{user.name}</h2>
  //       <p>{user.email}</p>
  //     </div>
  //   )
  // );
  return <>{JSON.stringify(user, null, 2)}</>;
}

export default ProfilePage;
