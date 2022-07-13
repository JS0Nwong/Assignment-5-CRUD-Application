import * as React from "react";
import Modal from "@mui/material/Modal";
import { Box, Button } from "@mui/material";
import { editCampusThunk, editStudentThunk } from "../store/thunks";
import { connect } from "react-redux";
import { FaPen } from "react-icons/fa";
import NewCampusView from "./views/NewCampusView";
import ClearIcon from "@mui/icons-material/Clear";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 1000,
//   height: 700,
//   bgcolor: "background.paper",
//   border: "1px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

const BasicModal = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { handleSubmit, handleChange, itemObj } = props;

  return (
    <div>
      <Button
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          handleOpen();
          // props.editStudent(dbItem.id);
        }}
        variant="outlined"
      >
        <FaPen />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onClick={(e) => {
          e.stopPropagation();
        }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button variant="contained" onClick={handleClose}>
              <ClearIcon />
            </Button>
          </Box>

          <NewCampusView
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            campus={itemObj}
          />
        </div>
      </Modal>
    </div>
  );
};

const mapDispatch = (dispatch) => {
  return {
    editStudent: (id, student) => dispatch(editStudentThunk(id, student)),
    editCampus: (id, campus) => dispatch(editCampusThunk(id, campus)),
  };
};

export default connect(null, mapDispatch)(BasicModal);
