import CourseCard from "./CourseCard";
import { useEffect, useState } from "react";

const Courses = ({ isHome = false }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        setError("");

        const apiURL = isHome
          ? "http://localhost:3000/courses?_limit=3"
          : "http://localhost:3000/courses";

        const res = await fetch(apiURL);

        if (!res.ok) {
          throw new Error("Courses lama soo qaadi karin");
        }

        const data = await res.json();

        setCourses(data);
      } catch (error) {
        console.error(error);
        setError("Courses lama soo qaadi karin.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [isHome]);

  if (loading) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold">Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-500">
        <h2 className="text-xl font-bold">{error}</h2>
      </div>
    );
  }

  return (
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
  );
};

export default Courses;