import { useState } from "react";
import { Header, Search, User } from "./components";
import { GlobalStyles } from "./components/styles/GlobalStyles";
import ThemeProvider from "./context/ThemeContext";
import UserService from "./Services/UserService";
import octocat from "./octocat.json"

const App = () => {
  const [user, setUser] = useState(octocat);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  const getUser = async (e) => {
    setIsLoading(true)
    e.preventDefault();
    const response = await UserService.getUserByName(searchQuery);
    setUser(response);
    setIsLoading(false)
  };

  return (
    <ThemeProvider>
      <GlobalStyles />
      <header>
        <Header />
      </header>
      <main>
        <Search
          getUser={getUser}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <User user={user} isLoading={isLoading} />
      </main>
    </ThemeProvider>
  );
};

export default App;
