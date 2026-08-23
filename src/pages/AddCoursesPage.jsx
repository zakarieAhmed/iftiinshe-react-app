import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [technology, setTechnology] = useState("");
  const [price, setPrice] = useState("");
  const [instructorName, setInstructorName] = useState("");
  const [instructorDescription, setInstructorDescription] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newCourse = {
      title,
      type,
      description,
      duration,
      technology,
      price,

      instructor: {
        name: instructorName,
        description: instructorDescription,
        contactEmail,
        contactPhone,
      },
    };

    try {
      const res = await fetch("http://localhost:3000/courses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCourse),
      });

      if (!res.ok) {
        throw new Error("Course lama darin");
      }

      alert("Course successfully added");
      navigate("/courses");
    } catch (error) {
      console.error(error);
      alert("Error adding course");
    }
  };

  return (
    <div className="bg-indigo-50 min-h-screen py-10">
      <div className="container m-auto max-w-2xl px-6">
        <div className="bg-white rounded-lg shadow-md p-6">

          <h1 className="text-3xl font-bold text-center text-indigo-500 mb-6">
            Add Course
          </h1>

          <form onSubmit={handleSubmit}>

            {/* Course Type */}
            <div className="mb-4">
              <label className="block font-semibold mb-2">
                Course Type
              </label>

              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="border rounded-lg w-full px-4 py-2"
                required
              >
                <option value="">Select Course Type</option>
                <option value="Full Stack">Full Stack</option>
                <option value="Front End">Front End</option>
                <option value="Back End">Back End</option>
                <option value="Database">Database</option>
                <option value="Programming Language">
                  Programming Language
                </option>
              </select>
            </div>

            {/* Course Title */}
            <div className="mb-4">
              <label className="block font-semibold mb-2">
                Course Title
              </label>

              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border rounded-lg w-full px-4 py-2"
                placeholder="Enter course title"
                required
              />
            </div>

            {/* Description */}
            <div className="mb-4">
              <label className="block font-semibold mb-2">
                Description
              </label>

              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border rounded-lg w-full px-4 py-2"
                placeholder="Enter course description"
                rows="4"
                required
              ></textarea>
            </div>

            {/* Duration */}
            <div className="mb-4">
              <label className="block font-semibold mb-2">
                Duration
              </label>

              <input
                type="text"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="border rounded-lg w-full px-4 py-2"
                placeholder="e.g. 3 months"
                required
              />
            </div>

            {/* Technologies */}
            <div className="mb-4">
              <label className="block font-semibold mb-2">
                Technologies
              </label>

              <input
                type="text"
                value={technology}
                onChange={(e) => setTechnology(e.target.value)}
                className="border rounded-lg w-full px-4 py-2"
                placeholder="e.g. React, JavaScript"
                required
              />
            </div>

            {/* Price */}
            <div className="mb-4">
              <label className="block font-semibold mb-2">
                Price
              </label>

              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="border rounded-lg w-full px-4 py-2"
                placeholder="Enter course price"
                required
              />
            </div>

            {/* Instructor Name */}
            <div className="mb-4">
              <label className="block font-semibold mb-2">
                Instructor Name
              </label>

              <input
                type="text"
                value={instructorName}
                onChange={(e) => setInstructorName(e.target.value)}
                className="border rounded-lg w-full px-4 py-2"
                placeholder="Prof: Zakaria Ahmed Nur"
                required
              />
            </div>

            {/* Instructor Description */}
            <div className="mb-4">
              <label className="block font-semibold mb-2">
                Instructor Description
              </label>

              <textarea
                value={instructorDescription}
                onChange={(e) =>
                  setInstructorDescription(e.target.value)
                }
                className="border rounded-lg w-full px-4 py-2"
                placeholder="Enter instructor description"
                rows="4"
                required
              ></textarea>
            </div>

            {/* Contact Email */}
            <div className="mb-4">
              <label className="block font-semibold mb-2">
                Contact Email
              </label>

              <input
                type="email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                className="border rounded-lg w-full px-4 py-2"
                placeholder="Enter contact email"
                required
              />
            </div>

            {/* Contact Phone */}
            <div className="mb-6">
              <label className="block font-semibold mb-2">
                Contact Phone
              </label>

              <input
                type="tel"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
                className="border rounded-lg w-full px-4 py-2"
                placeholder="Enter contact phone"
                required
              />
            </div>

            {/* Add Course */}
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-lg px-5 py-3 w-full"
            >
              Add Course
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;