

function ClassGeneralInfo({classAvg, corrections}) {
    return (
        <div className="info_cont">
            <div className="left_cont">
                <h1>{classAvg}</h1>
                <h4>Avarage Grade</h4>
            </div>

            <div className="right_cont">
                <h5>Average with corrections</h5>
                <h1>{corrections}</h1>
            </div>
        </div>
    );
}

export default ClassGeneralInfo;