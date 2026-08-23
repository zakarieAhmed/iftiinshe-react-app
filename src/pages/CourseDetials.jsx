import { FaArrowLeft, FaCode } from "react-icons/fa6";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this course?"
    );

    if (!confirmDelete) return;

    try {
      const res = await fetch(`http://localhost:3000/courses/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Course lama delete-gareyn");
      }

      alert("Course deleted successfully");
      navigate("/courses");
    } catch (error) {
      console.error(error);
      alert("Error deleting course");
    }
  };

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(`http://localhost:3000/courses/${id}`);

        if (!res.ok) {
          throw new Error("Course lama helin");
        }

        const data = await res.json();
        setCourse(data);
      } catch (error) {
        console.error(error);
        setError("Course-kan lama helin.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold">Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold text-red-500">{error}</h2>

        <Link
          to="/courses"
          className="inline-block mt-5 bg-indigo-500 text-white px-5 py-2 rounded-lg"
        >
          Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Back Button */}
      <section>
        <div className="container m-auto p-6">
          <Link
            to="/courses"
            className="text-indigo-500 hover:text-indigo-600 flex items-center gap-2"
          >
            <FaArrowLeft />
            Back to Courses
          </Link>
        </div>
      </section>

      {/* Course Information */}
      <section className="bg-indigo-50">
        <div className="container m-auto py-10 px-6 grid grid-cols-1 md:grid-cols-[7fr_4fr] gap-6">
          {/* Main Course Details */}
          <main>
            <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
              <p className="text-gray-500 mb-4">
                {course.type}
              </p>

              <h2 className="text-3xl font-bold mb-4">
                {course.title}
              </h2>

              <div className="text-orange-700 flex items-center justify-center md:justify-start gap-2">
                <FaCode />

                <span className="font-semibold">
                  {course.technology}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="mt-6 bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-lg font-bold mb-6">
                Course Description
              </h2>

              <p className="text-gray-700">
                {course.description}
              </p>

              <hr className="mt-6" />

              <div className="flex justify-between font-semibold text-indigo-500 my-4">
                <h3>
                  Duration: {course.duration}
                </h3>

                <h3>
                  Price: ${course.price}
                </h3>
              </div>
            </div>
          </main>

          {/* Instructor */}
          <aside>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-6">
                Instructor Info
              </h2>

              <h3 className="text-2xl font-semibold">
                {course.instructor?.name}
              </h3>

              <p className="mt-2 text-gray-700">
                {course.instructor?.description}
              </p>

              <hr className="my-4" />

              <h3 className="text-xl font-semibold">
                Contact Email
              </h3>

              <p className="font-bold p-2 bg-indigo-100 rounded my-2">
                {course.instructor?.contactEmail}
              </p>

              <h3 className="text-xl font-semibold">
                Contact Phone
              </h3>

              <p className="font-bold p-2 bg-indigo-100 rounded my-2">
                {course.instructor?.contactPhone}
              </p>
            </div>

            {/* Manage Course */}
            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-xl mb-6 font-semibold">
                Manage Course
              </h3>
{/*  hada */}
              <Link
                to={`/edit-course/${id}`}
                className="bg-indigo-500 rounded-full text-white text-center font-bold py-2 px-4 hover:bg-indigo-600 block w-full"
              >
                Edit Course
              </Link>

              <button
                type="button"
                onClick={handleDelete}
                className="bg-red-500 mt-4 rounded-full text-white text-center font-bold py-2 px-4 hover:bg-red-600 block w-full"
              >
                Delete Course
              </button>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default CourseDetails;