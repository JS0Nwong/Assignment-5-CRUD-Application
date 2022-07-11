import { Component } from "react";
import { connect } from "react-redux";
import { editCampus } from "../../store/actions/actionCreators";
import { editCampusThunk } from "../../store/thunks";

class EditCampusContainer extends Component {
  constructor() {
    super();
    this.state = {
      campusName: "",
      address: "",
      description: "",
      redirect: false,
      redirectId: null,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSave = async (e) => {
    const campus = {
      campusName: this.state.campusName,
      address: this.state.address,
      description: this.state.description,
    };

    let editedCampus = await this.props.editCampus(campus);

    this.setState({
      campusName: "",
      address: "",
      description: "",
      redirect: true,
      redirectId: editedCampus.id,
    });
  };

  componentWillUnmount() {
    this.setState({
      redirect: false,
      redirectId: null,
    });
  }

  render() {}
}

const mapDispatch = (dispatch) => {
  return {
    editCampus: (campus) => dispatch(editCampusThunk(campus)),
  };
};

export default connect(null, mapDispatch)(EditCampusContainer);
