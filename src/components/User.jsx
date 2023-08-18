import { useTheme } from "../context/ThemeContext";
import { Container } from "./styles/Container.styled";
import { Stats, Links } from "../components";
import {
  UserBody,
  UserContainer,
  UserContent,
  UserHandle,
  UserHeader,
  UserImage,
  UserJoiningDate,
  UserName,
  UserNames,
} from "./styles/User.styled";
import { format, parse } from "fecha";

export const User = ({ user, isLoading }) => {
  const { themeName } = useTheme();
  const getJoiningDate = () => {
    if (user?.created_at) {
      const createdDateWithoutZ =
        user?.created_at && user?.created_at.replace("Z", "");
      const parsedDate = parse(createdDateWithoutZ, "YYYY-MM-DDTHH:mm:ss");
      return format(parsedDate, "D MMM YYYY");
    }
  };
  return (
    <Container>
      <UserContainer
        style={isLoading ? { textAlign: "center" } : {}}
        $themeName={themeName}
      >
        {isLoading ? (
          <i
            className="fa-solid fa-spinner fa-spin-pulse fa-2xl"
            aria-label="loading..."
          ></i>
        ) : (
          <>
            {" "}
            <UserHeader>
              <UserImage src={user?.avatar_url} />
              <UserContent>
                <UserNames>
                  <UserName>{user?.name}</UserName>
                  <UserHandle href="#">@{user?.login}</UserHandle>
                </UserNames>

                <UserJoiningDate>Joined {getJoiningDate()}</UserJoiningDate>
              </UserContent>
            </UserHeader>
            <UserBody>{user?.bio}</UserBody>
            <Stats user={user} />
            <Links user={user} />
          </>
        )}
      </UserContainer>
    </Container>
  );
};
