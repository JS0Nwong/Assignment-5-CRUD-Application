import { Box, Typography } from "@mui/material";

/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
const StudentView = (props) => {
  const { student } = props;

  // Render a single Student view
  return (
    <div>
      <Box>
        <Typography component="h1" variant="h4" m="0.5em">
          {student.firstname + " " + student.lastname}
        </Typography>

        <Typography component="h2" variant="h5" m="0.5em">
          {student.campus.name}
        </Typography>
      </Box>
    </div>
  );
};

export default StudentView;
