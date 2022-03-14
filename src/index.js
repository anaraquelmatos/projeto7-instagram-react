import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Corpo from "./Corpo";

function Instagram() {
    return (
        <div>
        <Navbar />
        <Corpo />
        </div>
    );
}


ReactDOM.render(<Instagram />, document.querySelector(".root"));
