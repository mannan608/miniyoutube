import TagItems from "../component/tagitems/TagItems";
import VideoItems from "../component/videoitems/VideoItems";

const Home = () => {
  return (
    <div className="wrapper">
      <div className="container-fluid">
        <TagItems />
        <VideoItems />
      </div>
    </div>
  );
};

export default Home;
