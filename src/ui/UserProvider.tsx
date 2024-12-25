import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "../feature/login/useCurrentUser";

interface UserProviderPropType {
  children: ReactNode;
}

const UserProvider = ({ children }: UserProviderPropType) => {
  const navigate = useNavigate();
  const { user, isLoading } = useCurrentUser();
  useEffect(() => {
    if (!user && !isLoading) navigate("/");
  }, [user, navigate, isLoading]);

  return <>{children}</>;
};

export default UserProvider;
