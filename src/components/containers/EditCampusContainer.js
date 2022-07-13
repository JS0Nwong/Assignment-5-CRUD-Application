import { Component } from "react";
import { connect } from "react-redux";
import { editCampusThunk } from "../../store/thunks";
import BasicModal from "../Modal";

class EditCampusContainer extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      description: "",
      imageUrl: "",
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
      id: this.props.campus.id,
    };

    if (this.state.imageUrl === "") {
      delete campus.imageUrl;
    }

    console.log(campus);
    await this.props.editCampus(campus);

    this.setState({
      name: "",
      address: "",
      description: "",
      imageUrl: "",
    });
  };

  render() {
    return (
      <div>
        <BasicModal
          flag="campus"
          itemObj={this.props.campus}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
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
