


function ClassStatus({totalStudents, finished, ongoing, failed, skipped}) {
    return (
        <div className="status_cont">
            <div className="status_content">
                <h2>Class Status</h2>

                <div className="status">
                    <h3 className="green">Finished the Class {finished}/{totalStudents}</h3>
                    <h3 className="blue">Currently in Class {ongoing}/{totalStudents}</h3>
                    <h3 className="red">Failed the Class {failed}/{totalStudents}</h3>
                    <h3 className="purple">Skipped the Class {skipped}/{totalStudents}</h3>
                </div>

            </div>
        </div>
    );
}


export default ClassStatus;