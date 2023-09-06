import closedLesson from "../assets/closed_lesson.png";
import checked from "../assets/checked.png";
import ongoing from "../assets/ongoing.png";
import unchecked from "../assets/unchecked.png";


function TableRow({students}){
    console.log(students)
    return(

        <>
            {
                students.map((student, index) => {
                    return <>
                        <div className="row" key={index}>
                            <div className="student_tasks">
                                {
                                    student.tasks.map((task, index) => {
                                        if (task.status === "failed") {
                                            return <div className="student_task"><h4 className="failed">{task.grade}</h4></div>
                                        } else if (task.status === "perfect") {
                                            return <div className="student_task"><h4 className="perfect">{task.grade}</h4></div>
                                        } else if (task.status === "mid") {
                                            return <div className="student_task"><h4 className="mid">{task.grade}</h4></div>
                                        } else if (task.status === "checked") {
                                            return <div className="student_task"><img src={checked} alt="" /></div>
                                        } else if (task.status === "unchecked") {
                                            return <div className="student_task"><img src={unchecked} alt="" /></div>
                                        } else if (task.status === "ongoing") {
                                            return <div className="student_task"><img src={ongoing} alt="" /></div>
                                        } else if (task.status === "empty") {
                                            return <div className="student_task"><img src={closedLesson} alt="" /></div>
                                        }
                                    })
                                }
                            </div>
                            <div className="student_grade">
                                <h3>{student.grade}</h3>
                            </div>
                            <div className="student_name">
                                <h4>{student.name}</h4>
                                <h5>completed {student.finished}%</h5>
                            </div>
                        </div>
                    </>
                })
            }
        </>
        
    );
}

export default TableRow;