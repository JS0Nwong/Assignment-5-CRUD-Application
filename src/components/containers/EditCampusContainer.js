import { Component } from "react";
import { connect } from "react-redux";
import { editCampusThunk } from "../../store/thunks";
import { Redirect } from "react-router-dom";
import BasicModal from "../Modal";

class EditCampusContainer extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      description: "",
      imageUrl: "",
      redirect: false,
      redirectId: null,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const campus = {
      name: this.state.name,
      address: this.state.address,
      description: this.state.description,
      imageUrl: this.state.imageUrl,
    };

    if (this.state.imageUrl === "") {
      delete campus.imageUrl;
    }

    const newCampus = await this.props.addCampus(campus);

    this.setState({
      name: "",
      address: "",
      description: "",
      imageUrl: null,
      redirect: true,
      redirectId: newCampus.id,
    });
  };

  componentWillUnmount() {
    this.setState({
      redirect: false,
      redirectId: null,
    });
  }

  render() {
    // if (this.state.redirect) {
    //   return <Redirect to={`/campus/${this.state.redirectId}`} />;
    // }
    return (
      <div>
        <BasicModal editFunc={this.props.editCampus} flag="campus" />
      </div>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    editCampus: (campus) => dispatch(editCampusThunk(campus)),
  };
};

export default connect(null, mapDispatch)(EditCampusContainer);
