import { useState, useEffect } from "react";
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
  UserWrapper,
} from "./styles/User.styled";
import { format, parse } from "fecha";

export const User = ({ user, isLoading }) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const { themeName } = useTheme();

  const getJoiningDate = () => {
    if (user?.created_at) {
      const createdDateWithoutZ = user?.created_at.replace("Z", "");
      const parsedDate = parse(createdDateWithoutZ, "YYYY-MM-DDTHH:mm:ss");
      return format(parsedDate, "D MMM YYYY");
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 60em)");
    setIsDesktop(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsDesktop(event.matches);
    };
    mediaQuery.addListener(handleMediaQueryChange);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

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
            {isDesktop && <UserImage alt={user?.name} src={user?.avatar_url} />}
            <UserWrapper>
              <UserHeader>
                {!isDesktop && <UserImage alt={user?.name} src={user?.avatar_url} />}
                <UserContent>
                  <UserNames>
                    <UserName>{user?.name}</UserName>
                    <UserHandle href={`https://github.com/${user?.login}`}>
                      @{user?.login}
                    </UserHandle>
                  </UserNames>

                  <UserJoiningDate>Joined {getJoiningDate()}</UserJoiningDate>
                </UserContent>
              </UserHeader>
              <UserBody $unavailable={!user?.bio}>
                {user?.bio || "This profile has no bio"}
              </UserBody>
              <Stats user={user} />
              <Links user={user} />
            </UserWrapper>
          </>
        )}
      </UserContainer>
    </Container>
  );
};
