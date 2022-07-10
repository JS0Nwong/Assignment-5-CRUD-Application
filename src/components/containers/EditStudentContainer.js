import { Component } from "react";
import { connect } from "../../../../backend/routes";
import { editStudentThunk } from "../../store/thunks";

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

  render() {}
}

const mapDispatch = (dispatch) => {
  return {
    editStudent: (student) => dispatch(editStudentThunk(student)),
  };
};

export default connect(null, mapDispatch)(EditStudentContainer);
