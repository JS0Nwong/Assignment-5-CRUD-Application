import axios from "axios";
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
      redirect: false,
      redirectId: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const newCampus = await this.props.addCampus({ ...this.state });

    this.setState({
      campusName: "",
      campusId: null,
      redirect: true,
      redirectId: newCampus.id,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  componentWillUnmount() {
    this.setState({ redirect: false, redirectId: null });
  }

  render() {
    return (
      <NewCampusView
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    addCampus: (campus) => dispatch(addCampusThunk(campus)),
  };
};

export default connect(null, mapDispatch)(NewCampusContainer);
