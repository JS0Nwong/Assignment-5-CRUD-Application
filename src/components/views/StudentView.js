import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

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
        
          <Button
            variant="outlined"
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              props.deleteStudent(student.id);
            }}
          >
            <Link to="/students" style={{ textDecoration: 'none'}}>
            Delete
            </Link>
          </Button>
        
      </Box>
    </div>
  );
};

export default StudentView;
