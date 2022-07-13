/*==================================================
AllStudentsView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the all students view page.
================================================== */
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import {
  Typography,
  Button,
  Box,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";
import { BskCard } from "../BskCard";
import EditStudentContainer from "../containers/EditStudentContainer";

const AllStudentsView = (props) => {
  const { students, deleteStudent } = props;
  // If there is no student, display a message
  if (!students.length) {
    return (
      <>
        <Typography paragraph sx={{ m: "2em" }}>
          There are currently no students
        </Typography>
        <Button
          variant="contained"
          component={Link}
          to="/newstudent"
          sx={{ m: "2em" }}
        >
          Add New Student
        </Button>
      </>
    );
  }

  // If there is at least one student, render All Students view
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {students.map((student) => {
          let name = student.firstname + " " + student.lastname;
          return (
            <BskCard variant="outlined" key={student.id}>
              <CardActionArea
                component={Link}
                to={`/student/${student.id}`}
                sx={{ height: "100%" }}
              >
                <CardMedia
                  component="img"
                  height="150"
                  image={student.imageUrl}
                  alt="student photo"
                />

                <CardContent sx={{ padding: "1.25em" }}>
                  <h2>{name}</h2>

                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      variant="outlined"
                      onMouseDown={(e) => e.stopPropagation()}
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        deleteStudent(student.id);
                      }}
                      sx={{
                        mr: "2em",
                      }}
                    >
                      <FaTrash />
                    </Button>
                    <EditStudentContainer student={student} />
                  </Box>
                </CardContent>
              </CardActionArea>
            </BskCard>
          );
        })}
      </Box>

      <Button variant="contained" component={Link} to={`/newstudent`}>
        Add New Student
      </Button>
    </div>
  );
};

export default AllStudentsView;
