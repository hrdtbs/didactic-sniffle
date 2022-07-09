import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <button
        className="mt-4 w-60 rounded-full bg-green-500 py-2 px-4 font-bold text-white hover:bg-green-700"
        onClick={() => {
          fetch("/api/user", { method: "POST" });
        }}
      >
        Insert User
      </button>
    </div>
  );
};

export default Home;
