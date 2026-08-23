import Courses from "../Components/Courses";
import Hero from "../Components/Hero";
import HomeCards from "../Components/HomeCards";
import ViewAllCourses from "../Components/ViewAllCourses";

const HomePage = ()  => {
  return (
    <div>
      <Hero
        title="Become a Full-stack Developer"
        subtitle="Learn the skills you need to become a full-stack developer"
      />
      <HomeCards />
      {/* Recent Courses */}
      <Courses isHome={true} />
      <ViewAllCourses />
    </div>
  );
};
export default HomePage;