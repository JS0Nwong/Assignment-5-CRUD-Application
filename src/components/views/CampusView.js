/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import {
  Box,
  Button,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { BskCard } from "../BskCard";
import EditCampusContainer from "../containers/EditCampusContainer";

// Take in props data to construct the component
const CampusView = (props) => {
  const { campus, refreshCampus } = props;

  // Render a single Campus view with list of its students
  return (
    <div>
      <Box>
        <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
            m: 3,
          }}
          src={campus.imageUrl}
          alt="university image"
        />

        <Typography variant="h3" component="h1">
          {campus.name}
        </Typography>
        <Typography variant="h6" component="h3" m="0.75em">
          Campus ID: {campus.id}
        </Typography>
        <Typography variant="h6" paragraph>
          {campus.address}
        </Typography>
        <Typography variant="h6" paragraph>
          {campus.description}
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="outlined"
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              props.deleteCampus(campus.id);
            }}
            sx={{ mr: "2em" }}
          >
            <Link to="/campuses" style={{ textDecoration: "none" }}>
              Delete Campus
            </Link>
          </Button>

          <EditCampusContainer campus={campus} refreshCampus={refreshCampus} />
        </Box>

        <Typography variant="h5" component="h2" mt="3em">
          Students
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {campus.students.map((student) => {
            let name = student.firstname + " " + student.lastname;
            return (
              <BskCard
                key={student.id}
                variant="outlined"
                sx={{ minWidth: "100px" }}
              >
                <CardActionArea to={`/student/${student.id}`} component={Link}>
                  <CardContent sx={{ padding: "1.25em" }}>
                    <Box sx={{ width: "100%" }}>{name}</Box>
                  </CardContent>
                </CardActionArea>
              </BskCard>
            );
          })}
        </Box>
      </Box>
    </div>
  );
};

export default CampusView;
