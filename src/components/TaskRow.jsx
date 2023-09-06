import pencil from "../assets/pencil.png";
import closedQuestion from "../assets/closed_question.png";
import openQuestion from "../assets/Opened Question.png";
import contentMission from "../assets/Content Mission.png";

function TaskRow({tasks}) {
    return (
        <div className="tasks">

            {
                tasks.map((task, index) => {
                    let pic = null;
                    if (task.type === "open Question") {
                        pic = openQuestion;
                    }else if (task.type === "closed Question"){
                        pic = closedQuestion;
                    }else if (task.type === "content"){
                        pic = contentMission;
                    }

                    return <>
                        <div className="task" key={index}>
                            <img src={pic} alt=""/>
                            <h5>{task.name}</h5>
                            <h6><img src={pencil} alt="" />num of points</h6>
                        </div>
                    </>
                })
            }          
        </div>      
    );
}

export default TaskRow;