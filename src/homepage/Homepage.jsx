import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="w-full h-screen p-3 flex justify-start items-center flex-col  bg-blue-200 ">
      <h1 className="w-auto h-auto  font-mono text-3xl">
        Hi there i'm deepankar and here is my some projects 😁
      </h1>

      <div className="w-full h-full flex items-center gap-8 p-4 border-grey-300">
        <Link className="w-[200px] h-[100px] flex items-center justify-center rounded-2xl bg-red-300" to="/todo">
          Todo
        </Link>
        <Link className="w-[200px] h-[100px] flex items-center justify-center rounded-2xl bg-red-300" to="/todo">
          Todo
        </Link>
      </div>
    </div>
  );
};
export default Homepage;
