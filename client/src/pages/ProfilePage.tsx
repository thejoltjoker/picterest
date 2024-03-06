import { useAuth0 } from "@auth0/auth0-react";
import InputTextField from "../components/InputTextField";

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
  return (
    <div className="mx-auto flex max-w-md flex-col gap-4">
      <div className="flex justify-center">
        <img
          src={user?.picture}
          alt=""
          className="max-w-32 rounded-full bg-none ring-2 ring-stone-300 ring-offset-2 ring-offset-stone-100"
        />
      </div>
      <div>
        <h4 className="ps-4 text-lg text-stone-500">Name</h4>
        <InputTextField value={user?.name} />
      </div>
      {user?.family_name && (
        <div>
          <h4 className="ps-4 text-lg text-stone-500">Family name</h4>
          <InputTextField value={user?.family_name} />
        </div>
      )}
      {user?.nickname && (
        <div>
          <h4 className="ps-4 text-lg text-stone-500">Nickname</h4>
          <InputTextField value={user?.nickname} />
        </div>
      )}
      {user?.email && (
        <div>
          <h4 className="ps-4 text-lg text-stone-500">Email</h4>
          <InputTextField value={user?.email} />
        </div>
      )}
      {false &&
        user &&
        Object.keys(user).map((key) => {
          return (
            <>
              <p className="font-bold">{key}</p>
              <p>{user[key]}</p>
            </>
          );
        })}
    </div>
  );
}

export default ProfilePage;
