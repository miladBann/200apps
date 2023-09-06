import PIC from "../assets/pic.png";
import bell from "../assets/bell.png";
import calendar from "../assets/calendar.png";
import my_space from "../assets/my_space.png";
import monitor from "../assets/monitor.png";

function Navigation() {
    return (
        <div className="main_nav">
            
            <div className="left_el">
                <img src={PIC} alt="" />
                <img src={bell} alt="" />
            </div>

            <div className="center_el">
                <div className="nav_el_container">
                    <img src={monitor} alt="" className="nav_pic"/>
                    <h5>Building Systems</h5>
                </div>

                <div className="nav_el_container">
                    <img src={calendar} alt="" className="nav_pic"/>
                    <h5>My Diary</h5>
                </div>

                <div className="nav_el_container">
                    <img src={my_space} alt="" className="nav_pic selected"/>
                    <h5>My Space</h5>
                </div>
            </div>


        </div>

    );
}


export default Navigation;