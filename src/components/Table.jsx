import TableRow from "./TableRow";
import TaskRow from "./TaskRow";


function Table({tasks, students}){
    return (
        <div className="table_cont">
            <div className="table">

                <div className="fixed_row">
                    <TaskRow tasks={tasks}/>
                    <div className="grades"> 
                        <div className="grade_header">
                            <h5>Grade</h5>
                            <h6>weight 30</h6>
                        </div>  
                    </div>

                    <div className="student_names">
                        <h5>Students</h5>
                    </div>
                </div>

                <div className="rows">
                    <TableRow students={students}/>
                </div>
            </div>
        </div>
    );
}

export default Table;