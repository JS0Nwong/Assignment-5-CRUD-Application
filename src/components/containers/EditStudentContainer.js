import { Component } from "react";
import { connect } from "react-redux";
import { editStudentThunk } from "../../store/thunks";
import { EditStudentView } from "../views";
import { Redirect } from "react-router-dom";

class EditStudentContainer extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      redirect: false,
      redirectId: null,
    };
  }

  componentWillUnmount() {
    this.setState({
      redirect: false,
      redirectId: null,
    });
  }

  render() {
    if(this.state.redirect) {
      return (<Redirect to={`/student/${this.state.redirectId}`}/>)
    }
    return (
      <EditStudentView 
        student = {this.props.student}
        editStudent = {this.props.editStudent}
        deleteStudent = {this.props.deleteStudent}
        fetchStudent = {this.props.fetchStudent}
        handleChange = {this.handleChange} 
        handleSubmit = {this.handleSubmit}      
      />
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    editStudent: (student) => dispatch(editStudentThunk(student)),
  };
};

export default connect(null, mapDispatch)(EditStudentContainer);
