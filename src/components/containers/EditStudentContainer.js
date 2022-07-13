import { Component } from "react";
import { connect } from "react-redux";
import { editStudentThunk } from "../../store/thunks";
import BasicModal from "../Modal";

class EditStudentContainer extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      imageUrl: "",
      gpa: null,
      campusId: null,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault(); // Prevent browser reload/refresh after submit.
    let student = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      imageUrl: this.state.imageUrl,
      gpa: this.state.gpa,
      campusId: this.state.campusId,
    };

    if (this.state.imageUrl === "") {
      delete student.imageUrl;
    }

    if (this.state.gpa === null) {
      delete student.gpa;
    }

    // Add new student in back-end database
    await this.props.editStudent(student);

    // Update state, and trigger redirect to show the new student
    this.setState({
      firstname: "",
      lastname: "",
      email: "",
      imageUrl: "",
      gpa: null,
      campusId: null,
    });
  };

  render() {
    return (
      <div>
        <BasicModal
          flag="student"
          itemObj={this.props.student}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    editStudent: (student) => dispatch(editStudentThunk(student)),
  };
};

export default connect(null, mapDispatch)(EditStudentContainer);
