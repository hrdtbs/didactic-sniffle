import { css } from "@emotion/react";
import type { NextPage } from "next";
import { useAuth } from "../domain/api/auth";

const Home: NextPage = () => {
  const { currentUser, login, logout } = useAuth();
  return (
    <div>
      <header
        css={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        <h1>Scrap</h1>
        {currentUser ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button onClick={login}>Login</button>
        )}
      </header>
      <section>Hello, World</section>
    </div>
  );
};

export default Home;
