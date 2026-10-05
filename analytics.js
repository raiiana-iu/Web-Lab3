function calculateClassAverage(students,courseId){
    const grades=students.map(student =>{
        const course=student.courses.find(c => c.courseId === courseId);
        return course.grade;
    });
    const total=grades.reduce((sum,grade) => sum + grade, 0);
    return total/grades.length;
}
function findTopStudent(students){
    return students.reduce((topStudent,currentStudent)=>{
        if(currentStudent.getAverage()> topStudent.getAverage()){
            return currentStudent;
        }
        return topStudent;
    });
}
function filterStudents(students,criteriaFn){
    return students.filter(criteriaFn);
}
export {
    calculateClassAverage,
    findTopStudent,
    filterStudents
};