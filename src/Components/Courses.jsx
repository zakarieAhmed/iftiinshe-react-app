import CourseCard from "./CourseCard";
import { useState, useEffect } from "react";

const Courses = ({ isHome }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const apiURL = isHome
        ? "http://localhost:3000/courses?_limit=3"
        : "http://localhost:3000/courses";

      try {
        const data = await (await fetch(apiURL)).json();
        setCourses(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCourses();
  }, [isHome]);

  return (
    <div>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h1 className="text-3xl font-bold text-center text-indigo-500 mb-6">
            {isHome ? "Recent Courses" : "All Courses"}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;