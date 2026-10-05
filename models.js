class Student{
    constructor(id,name,courses){
        this.id=id;
        this.name=name;
        this.courses=courses;
        Object.defineProperty(this,"id",{
            value:id,
            writable:false,
            configurable:false
        });

    }
    addCourse(courseId,grade){
        this.courses.push({courseId,grade});
    }
    getAverage(){
        const total=this.courses.reduce((s, c) => s + c.grade, 0);
        return total/this.courses.length;
    }
}
export default Student;