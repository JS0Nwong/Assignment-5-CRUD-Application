/*==================================================
NewStudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the new student page.
================================================== */

import {
  Typography,
  Button,
  styled,
  TextField,
  Box,
  Grid,
} from "@mui/material";

const FormContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
}));

const StudentInfoField = styled(TextField)(() => ({
  margin: ".5rem",
  fontWeight: "bold"
}));

const NewStudentView = (props) => {
  const { handleChange, handleSubmit } = props;

  // Render a New Student view with an input form
  return (
    <FormContainer>
      <Box
        sx={{
          backgroundColor: "#eec0c6",
          backgroundImage: "linear-gradient(315deg, #eec0c6 30%, #7ee8fa 85%)",
          borderRadius: "1.25em",
          m: "2em",
          p: "2em",
          minWidth: "460px",
          maxWidth: "900px",
          boxShadow:
            "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",
        }}
      >
        <Typography
          component="h2"
          sx={{
            fontSize: "30px",
            color: "#11153e",
            fontWeight: "bold",

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
            padding: "2em",
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <StudentInfoField
                variant="standard"
                label="First Name"
                name="firstname"
                InputLabelProps={{ required: false }}
                inputProps={{
                  pattern: "[a-zA-Z]+",
                  title: "Only alphabetic characters are allowed.",
                }}
                onChange={handleChange}
                required
                sx={{width: "100%"}}
              />
            </Grid>

            <Grid item xs={6}>
              <StudentInfoField
                variant="standard"
                label="Last Name"
                name="lastname"
                inputProps={{
                  pattern: "[a-zA-Z]+",
                  title: "Only alphabetic characters are allowed.",
                }}
                InputLabelProps={{ required: false }}
                onChange={handleChange}
                required
                sx={{width: "100%"}}
              />
            </Grid>

            <Grid item xs={6}>
              <StudentInfoField
                variant="standard"
                label="GPA"
                name="gpa"
                type="number"
                InputLabelProps={{ required: false }}
                sx={{
                  "[type=number]::webkit-outer-spin-button": {
                    WebkitAppearance: "none",
                  },
                  "[type=number]::-webkit-inner-spin-button": {
                    WebkitAppearance: "none",
                  },
                  width: "100%",
                }}
                inputProps={{
                  min: "0",
                  max: "4",
                  step: "0.01",
                }}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={6}>
              <StudentInfoField
                variant="standard"
                type="number"
                name="campusId"
                label="Campus ID"
                InputLabelProps={{ required: false }}
                onChange={handleChange}
                sx={{
                  "[type=number]::webkit-outer-spin-button": {
                    WebkitAppearance: "none",
                  },
                  "[type=number]::-webkit-inner-spin-button": {
                    WebkitAppearance: "none",
                  },
                  width: "100%",
                }}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <StudentInfoField
                variant="standard"
                label="Email"
                name="email"
                type="email"
                InputLabelProps={{ required: false }}
                onChange={handleChange}
                required
                sx={{width: "100%"}}
              />
            </Grid>
            <Grid item xs={12}>
              <StudentInfoField
                variant="standard"
                type="url"
                name="imageUrl"
                label="Image URL"
                onChange={handleChange}
                sx={{width: "100%"}}
              />
            </Grid>
          </Grid>
          

          <Button type="submit" variant="contained" sx={{ mt: "2em", width: "100%" }}>
            Submit
          </Button>
        </form>
      </Box>
    </FormContainer>
  );
};

export default NewStudentView;
