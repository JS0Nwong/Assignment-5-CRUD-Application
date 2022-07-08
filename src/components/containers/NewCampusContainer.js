import { Component } from "react";
import { connect } from "react-redux";
import { addCampusThunk } from "../../store/thunks";
import NewCampusView from "../views/NewCampusView";

class NewCampusContainer extends Component {
  constructor() {
    super();
    this.state = {
      campusName: "",
      campusId: null,
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return <NewCampusView />;
  }
}

const mapDispatch = (dispatch) => {
  return {
    addCampus: (campus) => dispatch(addCampusThunk(campus)),
  };
};

export default connect(null, mapDispatch)(NewCampusContainer);
