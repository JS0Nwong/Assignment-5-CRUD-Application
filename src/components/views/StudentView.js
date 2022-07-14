import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import EditStudentContainer from "../containers/EditStudentContainer";

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
        <Box
          component="img"
          sx={{
            height: 300,
            width: 350,
          }}
          src={student.imageUrl}
          alt="student photo"
        />

        <Typography component="h1" variant="h4" m="0.5em">
          {student.firstname + " " + student.lastname}
        </Typography>

        <Typography component="h5" variant="h5">
          {student.email}
        </Typography>

        <Typography component="h5" variant="h5" m="0.5em">
          {student.campus.name}
        </Typography>
        {student.gpa === -1 ? (
          <></>
        ) : (
          <Typography component="h5" variant="h5">
            GPA: {student.gpa}
          </Typography>
        )}

        <br />
        <br />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="outlined"
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              props.deleteStudent(student.id);
            }}
            component={Link}
            to="/students"
            sx={{ mr: "2em" }}
          >
            <FaTrash />
          </Button>

          <EditStudentContainer student={student} />
        </Box>
      </Box>
    </div>
  );
};

export default StudentView;
