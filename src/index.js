import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Corpo from "./Corpo";
import FundoMobile from "./FundoMobile";

function Instagram() {
    return (
        <div>
        <Navbar />
        <Corpo />
        <FundoMobile />
        </div>
    );
}


ReactDOM.render(<Instagram />, document.querySelector(".root"));
