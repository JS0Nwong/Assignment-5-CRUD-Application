/*==================================================
AllCampusesView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display all campuses.
================================================== */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Typography, Button, Box } from "@mui/material";

const AllCampusesView = (props) => {
  // If there is no campus, display a message.
  if (!props.allCampuses.length) {
    return (
      <div>
        <Typography paragraph sx={{ m: "2em" }}>
          There are currently no campuses
        </Typography>
        <Button
          variant="contained"
          component={Link}
          to="/newcampus"
          sx={{ m: "2em" }}
        >
          Add New Campus
        </Button>
      </div>
    );
  }

  // If there is at least one campus, render All Campuses view
  return (
    <div>
      {props.allCampuses.map((campus) => (
        <Box key={campus.id}>
          <Link to={`/campus/${campus.id}`}>
            <h2>{campus.name}</h2>
          </Link>
          <h4>campus id: {campus.id}</h4>
          <p>{campus.address}</p>
          <p>{campus.description}</p>
        </Box>
      ))}

      <Button variant="contained" component={Link} to="/newcampus">
        Add New Campus
      </Button>
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;
