import ClassNav from "../components/ClassNav";
import LessonSelector from "../components/LessonSelector";
import Table from "../components/Table";
import ClassStatus from "../components/ClassStatus";
import ClassGeneralInfo from "../components/ClassGeneralInfo";
import BarChart from "../components/BarChart";
import Users from "../components/Users";


function Page({data}) {
    return(    
            <div>
                <ClassNav lessonNumber={data.lesson_number} creator={data.creator}/>
                <LessonSelector lessonNumber={data.lesson_number} teacher={data.teacher}/>
                <div className="align_table"> 
                    <div className="left_side">
                        <ClassStatus totalStudents ={data.total_students} finished={data.finished_the_class} ongoing={data.currently_in_class} failed={data.failed_the__Class} skipped={data.skipped_the_class}/>
                        <ClassGeneralInfo classAvg={data.class_avg} corrections={data.avarage_corrections}/>
                        <BarChart passed={data.total_passed} failed={data.total_failed}/>
                    </div>
                    <Table tasks={data.tasks} students={data.students}/>    
                </div> 
                <Users /> 
            </div>
    );
}

export default Page;