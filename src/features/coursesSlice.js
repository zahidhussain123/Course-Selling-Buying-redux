import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
export const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    courses: [
      {
        id: uuidv4(),
        name: "Make money as a developer",
        description: "Learn to make money with instagram",
        price: 50,
        by: "Zahid Hussain",
        rating: 4,
      },
      {
        id: uuidv4(),
        name: "Become a better Developer",
        description: "Tips for developers",
        price: 25,
        by: "James",
        rating: 3,
      },
    ],
  },
  reducers: {
    setCourses: (state, action) => {
      state.courses.push(action.payload);
    },
  },
});

export const getSelectCourses = (state) => state.courses.courses;
export const { setCourses } = coursesSlice.actions;
export default coursesSlice.reducer;
