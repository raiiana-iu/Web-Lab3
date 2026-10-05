import { fetchStudents } from "./database.js";
import Student from "./models.js";
import {
    calculateClassAverage,
    findTopStudent,
    filterStudents
} from "./analytics.js";
fetchStudents(rawData => {
    console.log("Data received!");
    const students=rawData.map(
        student =>new Student(
            student.id,
            student.name,
            student.courses
        )
    );
    console.log("\nTesting Immutability:");
    console.log(`Original ID: ${students[0].id}`);
    console.log("Attempting to change ID to 999...");
try {
    students[0].id = 999;
} catch (error) {
    console.log("ID is read-only, so it could not be changed.");
}
console.log(`Final ID: ${students[0].id} (Success: ID did not change)`);
    console.log("\n--- Analytics Report ---");
    const classAverage = calculateClassAverage(students, 101);
    console.log(
        `Class Average for Course 101: ${classAverage.toFixed(2)}`
    );
    const topStudent=findTopStudent(students);
    console.log(
        `Top Student: ${topStudent.name} (Average: ${topStudent.getAverage()})`
    );
    const course102Students=filterStudents(
        students,
        student => student.courses.some(
            course => course.courseId===102
        )
    );
    console.log(
        `Students in Course 102: ${course102Students
            .map(student => student.name)
            .join(", ")}`
    );
});