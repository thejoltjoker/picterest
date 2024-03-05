import { withAuthenticationRequired } from "@auth0/auth0-react";
import PageLoading from "./PageLoading";
interface AuthenticationGuardProps {
  component: React.FC;
}
export const AuthenticationGuard = ({
  component,
}: AuthenticationGuardProps) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div>
        <PageLoading />
      </div>
    ),
  });

  return <Component />;
};
