import {AppRootState} from "../../store/redux-store";
import {connect} from "react-redux";
import {Navbar} from "./Navbar";

const mapStateToProps = (state: AppRootState) => {
    return {
        friends: state.sidebar.friends
    }
}

export const NavbarContainer = connect(mapStateToProps)(Navbar)