import arrow from "../assets/arrow-right.png"

function ClassNav({lessonNumber, creator}) {
    return (
        <div className="class_nav">
            <h4>lesson {lessonNumber}/ Course {creator}/ <span className="selected_view">My Space</span></h4>
            <img src={arrow} alt="" />
        </div>
    );
}

export default ClassNav;