import { useAuth0 } from "@auth0/auth0-react";
import InputTextField from "../components/InputTextField";

function ProfilePage() {
  const { user } = useAuth0();

  return (
    <div className="mx-auto flex max-w-md flex-col gap-4">
      <div className="mx-auto flex size-32 justify-center object-cover">
        <img
          src={user?.picture}
          alt=""
          className="w-full rounded-full bg-none object-cover ring-2 ring-stone-300 ring-offset-2 ring-offset-stone-100 dark:ring-stone-500 dark:ring-offset-stone-900"
        />
      </div>
      <div>
        <h4 className="ps-4 text-lg text-stone-500">Name</h4>
        <InputTextField value={user?.name} disabled={true} />
      </div>
      {user?.family_name && (
        <div>
          <h4 className="ps-4 text-lg text-stone-500">Family name</h4>
          <InputTextField value={user?.family_name} disabled={true} />
        </div>
      )}
      {user?.nickname && (
        <div>
          <h4 className="ps-4 text-lg text-stone-500">Nickname</h4>
          <InputTextField value={user?.nickname} disabled={true} />
        </div>
      )}
      {user?.email && (
        <div>
          <h4 className="ps-4 text-lg text-stone-500">Email</h4>
          <InputTextField value={user?.email} disabled={true} />
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
