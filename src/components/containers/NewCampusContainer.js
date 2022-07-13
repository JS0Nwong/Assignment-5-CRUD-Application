import { Component } from "react";
import { connect } from "react-redux";
import { addCampusThunk } from "../../store/thunks";
import { Redirect } from "react-router-dom";
import NewCampusView from "../views/NewCampusView";

class NewCampusContainer extends Component {
  constructor() {
    super();
    this.state = {
      campusName: "",
      address: "",
      description: "",
      imageUrl: null,
      redirect: false,
      redirectId: null,
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const newCampus = await this.props.addCampus({
      name: this.state.campusName,
      address: this.state.address,
      description: this.state.description,
      imageUrl: this.state.imageUrl,
    });

    this.setState({
      campusName: "",
      address: "",
      description: "",
      imageUrl: null,
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
    if (this.state.redirect) {
      return <Redirect to={`/campus/${this.state.redirectId}`} />;
    }

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
