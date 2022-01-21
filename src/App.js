import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getSelectCourses } from "./features/coursesSlice";
import Course from "./components/Course"
import IndCourse from "./components/IndCourse"
import AddCourse from "./components/AddCourse"

function App() {
  const courses =useSelector(getSelectCourses)
  return (
    <Router>
      <div className="app">
        <div className="header">
          <h1>A Place to sell your Courses online!</h1>
          <Link to="/addcourse" className="header__button">
            Sell a Course
          </Link>
        </div>
        </div>

        <Routes>
          <Route path="/"element={<>
            <div className="courses">
              {courses &&
                courses.map((course) => (
                  <Link className="link" to={`/${course.id}`}>
                    <Course data={course} />
                  </Link>
                ))}
            </div>
          </>} />
     
          
          <Route path="/addcourse" element={<AddCourse />} />
          <Route path="/:id" element={<IndCourse />} />
        </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;
