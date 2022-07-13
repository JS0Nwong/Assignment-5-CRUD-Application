import { Component } from "react";
import { connect } from "react-redux";
import { editStudentThunk } from "../../store/thunks";
import { Redirect } from "react-router-dom";
import { BasicModal } from "../Modal";

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
    // if(this.state.redirect) {
    //   return (<Redirect to={`/student/${this.state.redirectId}`}/>)
    // }
    return (
      <div>
        <BasicModal />
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
