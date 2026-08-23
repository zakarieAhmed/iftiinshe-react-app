import Card from "./Card";
import { Link } from "react-router-dom";

const HomeCards = () => {
  return (
    <div>
      <section className="py-4">
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Card 1 */}
            <Card bg="bg-gray-100">
              <h2 className="text-2xl font-bold">
                For Learners
              </h2>

              <p className="mt-2 mb-4">
                Browse our courses and start learning today.
              </p>

              <Link
                to="/courses "
                className="bg-black text-white w-38 text-center rounded-lg px-4 py-2 hover:bg-gray-700 inline-block">
                Browse Courses
              </Link>
            </Card>

            {/* Card 2 */}
            <Card bg="bg-indigo-100">
              <h2 className="text-2xl font-bold">
                For Instructors
              </h2>

              <p className="mt-2 mb-4">
                Create a course and start teaching today.
              </p>

              <Link
                to="/add-course"
                className="bg-indigo-700 text-white w-38 text-center rounded-lg px-4 py-2 hover:opacity-90 inline-block"
              >
                Add Course
              </Link>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeCards;