import AbouteMe from "./components/AbouteMe";
import Habilities from "./components/Habilities";
import ProfileCard from "./components/ProfileCard";
import Projects from "./components/Projects";

function App() {
  return (
    <div className=" grid md:grid-rows-3 md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3 max-md:grid-rows-5 max-md:grid-cols-1 gap-3 gap-x-4 relative w-full max-w-[1366px] h-full">
      <ProfileCard />
      <Projects />
      <Habilities />
      <AbouteMe />
    </div>
  );
}

export default App;
