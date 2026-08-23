import NavBar from "./Components/NavBar";
import CourseDetials from "./pages/CourseDetials";
import CoursesPage from "./pages/CoursesPage";
import EditCoursePage from "./pages/EditCoursePage";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import AddCoursesPage from "./pages/AddCoursesPage";

const App = () => {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:id" element={<CourseDetials />} />
        <Route path="/add-course" element={<AddCoursesPage />} />
        <Route path="/edit-course/:id" element={<EditCoursePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;