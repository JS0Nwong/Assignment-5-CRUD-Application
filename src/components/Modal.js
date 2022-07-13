import * as React from 'react';
import Modal from '@mui/material/Modal';
import { Box, TextField, Typography, Button, styled } from "@mui/material";
import { editCampusThunk, editStudentThunk } from '../store/thunks';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  height: 700,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

const FormContainer = styled("div")(() => ({
    display: "flex",
    justifyContent: "center",
  }));
  
  const CampusInfoField = styled(TextField)(() => ({
    margin: "2em",
  }));
  

export const BasicModal = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { handleSubmit, handleChange } = props;

  return (
    <div>
      <Button onClick={handleOpen}>Edit Details</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Typography component="h2" variant='h2' sx = {{paddingLeft: 4,}}>Edit {props.title}</Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
            <CampusInfoField
              variant="outlined"
              name="name"
              label = {props.name}
              inputProps={{
                pattern: "[a-zA-Z ]+",
                title: "Only alphabetic characters are allowed.",
              }}
              InputLabelProps={{ required: false }}
              required
              onChange={handleChange}
              sx={{ width: "33%" }}
            />
            <CampusInfoField
              variant="outlined"
              name="address"
              label= {props.address}
              InputLabelProps={{ required: false }}
              onChange={handleChange}
              required
              sx={{ width: "33%" }}
            />
            <CampusInfoField
              variant="outlined"
              name="image"
              label= {props.label}
              InputLabelProps={{ required: false }}
              onChange={handleChange}
              sx={{ width: "33%" }}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CampusInfoField
              variant="outlined"
              name="description"
              label= {props.description}
              multiline
              rows={4}
              onChange={handleChange}
              sx={{ width: "100%" }}
            />
          </Box>
        </form>
        <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

const mapDispatch = (dispatch) => {
    return { editStudent: (id, student) => dispatch(editStudentThunk(id, student)), 
                editCampus: (id, campus) => dispatch(editCampusThunk(id, campus)) }
}

export default BasicModal;