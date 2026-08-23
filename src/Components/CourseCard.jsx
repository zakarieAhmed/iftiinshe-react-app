import { FaCode } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-xl shadow-md relative">

      <div className="p-4">

        <div className="mb-6">
          <span className="text-gray-600">
            {course.type}
          </span>

          <h3 className="text-xl font-bold">
            {course.title}
          </h3>
        </div>

        <div className="mb-5 line-clamp-2">
          {course.description}
        </div>

        <div className="flex justify-between mb-5">
          <h3 className="text-indigo-500">
            Duration: {course.duration}
          </h3>

          <h3 className="text-indigo-500">
            Price: ${course.price}
          </h3>
        </div>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex justify-between items-center gap-3">

          <span className="text-orange-700 flex gap-2 items-center">
            <FaCode />
            {course.technology}
          </span>

          <Link
            to={`/courses/${course.id}`}
            className="text-center bg-indigo-500 hover:bg-indigo-600 rounded-lg px-4 py-2 text-white"
          >
            Read More
          </Link>

        </div>

      </div>

    </div>
  );
};

export default CourseCard;