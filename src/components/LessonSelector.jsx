import right from "../assets/chevron-right.png";
import left from "../assets/chevron-left.png";

function LessonSelector({lessonNumber, teacher}) {
    return(
        <div className="selctors">

            <div className="lesson_preview">
                <img src={left} alt="" />
                <h3>Lesson preview</h3>
            </div>

            <div className="lesson_selector">
                <img src={left} alt="" />
                <h3>{teacher}'s Relations - Lesson {lessonNumber}</h3>
                <img src={right} alt="" />
            </div>
            
        </div>
    );
}

export default LessonSelector;