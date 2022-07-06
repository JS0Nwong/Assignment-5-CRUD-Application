/*==================================================
NewStudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the new student page.
================================================== */

import {
  Typography,
  Button,
  styled,
  useTheme,
  TextField,
  Box,
  FormControl,
} from "@mui/material";

// Create styling for the input form
// const useStyles = makeStyles( () => ({
//   formContainer:{
//     width: '500px',
//     backgroundColor: '#f0f0f5',
//     borderRadius: '5px',
//     margin: 'auto',
//   },
//   title: {
//     flexGrow: 1,
//     textAlign: 'left',
//     textDecoration: 'none'
//   },
//   customizeAppBar:{
//     backgroundColor: '#11153e',
//     shadows: ['none'],
//   },
//   formTitle:{
//     backgroundColor:'#c5c8d6',
//     marginBottom: '15px',
//     textAlign: 'center',
//     borderRadius: '5px 5px 0px 0px',
//     padding: '3px'
//   },
// }));

const FormContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
}));

const StudentInfoField = styled(TextField)(({ theme }) => ({
  margin: "2em",
}));

const NewStudentView = (props) => {
  const { handleChange, handleSubmit } = props;
  // const classes = useStyles();

  // Render a New Student view with an input form
  return (
    // <div>
    //   <h1>New Student</h1>

    //   <div className={classes.root}>
    //     <div className={classes.formContainer}>
    //       <div className={classes.formTitle}>
    //         <Typography
    //           style={{
    //             fontWeight: "bold",
    //             fontFamily: "Courier, sans-serif",
    //             fontSize: "20px",
    //             color: "#11153e",
    //           }}
    //         >
    //           Add a Student
    //         </Typography>
    //       </div>
    //       <form
    //         style={{ textAlign: "center" }}
    //         onSubmit={(e) => handleSubmit(e)}
    //       >
    //         <label style={{ color: "#11153e", fontWeight: "bold" }}>
    //           First Name:{" "}
    //         </label>
    //         <input
    //           type="text"
    //           name="firstname"
    //           onChange={(e) => handleChange(e)}
    //         />
    //         <br />
    //         <br />

    //         <label style={{ color: "#11153e", fontWeight: "bold" }}>
    //           Last Name:{" "}
    //         </label>
    //         <input
    //           type="text"
    //           name="lastname"
    //           onChange={(e) => handleChange(e)}
    //         />
    //         <br />
    //         <br />

    //         <label style={{ color: "#11153e", fontWeight: "bold" }}>
    //           Campus Id:{" "}
    //         </label>
    //         <input
    //           type="text"
    //           name="campusId"
    //           onChange={(e) => handleChange(e)}
    //         />
    //         <br />
    //         <br />

    //         <Button variant="contained" color="primary" type="submit">
    //           Submit
    //         </Button>
    //         <br />
    //         <br />
    //       </form>
    //     </div>
    //   </div>

    // </div>

    <FormContainer>
      <Box
        sx={{
          backgroundColor: "#045de9",
          backgroundImage: "linear-gradient(315deg, #045de9 0%, #09c6f9 40%)",
          borderRadius: "1.25em",
          m: "2em",
          p: "2em",
          minWidth: "260px",
        }}
      >
        <Typography
          component="h2"
          sx={{
            fontSize: "20px",
            color: "#11153e",
          }}
        >
          Add a Student
        </Typography>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <StudentInfoField
            variant="outlined"
            label="First Name"
            InputLabelProps={{ required: false }}
            required
          />
          <StudentInfoField
            variant="outlined"
            label="Last Name"
            InputLabelProps={{ required: false }}
            required
          />
          <StudentInfoField
            variant="outlined"
            type="number"
            label="Campus ID"
            InputLabelProps={{ required: false }}
            sx={{
              "[type=number]::-webkit-outer-spin-button": {
                "-webkit-appearance": "none",
              },
              "[type=number]::-webkit-inner-spin-button": {
                "-webkit-appearance": "none",
              },
            }}
            required
          />

          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </Box>
    </FormContainer>
  );
};

export default NewStudentView;
