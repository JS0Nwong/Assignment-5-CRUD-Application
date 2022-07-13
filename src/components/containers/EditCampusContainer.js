import { Component } from "react";
import { connect } from "react-redux";
import { editCampusThunk, fetchCampusThunk } from "../../store/thunks";
import { EditCampusView } from "../views";
import { Redirect } from "react-router-dom";
import Heading from "../Heading";

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

  render() {
    if(this.state.redirect) {
      return (<Redirect to={`/campus/${this.state.redirectId}`}/>)
    }
    return (
      <div>
        <Heading>Edit Campus</Heading> 
          <EditCampusView 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          campus={this.props.campus}
          editCampus={this.props.editCampus}
          fetchCampus={this.props.fetchCampus}
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
