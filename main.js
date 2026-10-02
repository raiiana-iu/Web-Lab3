import { fetchStudent } from "./database.js";

fetchStudent((students_data) => {
    console.log(students_data)
});