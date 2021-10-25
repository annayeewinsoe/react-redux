import AddPost from "./components/AddPost";
import AddOthers from "./components/AddOthers";
import Posts from "./components/Posts";
import Hobbies from "./components/Hobbies";
import Places from "./components/Places";

export default function App() {
  return (
    <>
      <h1 id="err-msg">Please use desktop or laptop screen size (at least 1000px) to view</h1>
      <div className="App">
        <AddPost />
        <AddOthers />
        <Posts />
        <Hobbies />
        <Places />
      </div>
    </>
  );
}

