/*==================================================
AllCampusesView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display all campuses.
================================================== */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Typography,
  Button,
  Box,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";
import { BskCard } from "../BskCard";

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
      <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {props.allCampuses.map((campus) => (
          <BskCard variant="outlined" key={campus.id}>
            <CardActionArea component={Link} to={`/campus/${campus.id}`}>
              <CardMedia
                component="img"
                height="auto"
                image={campus.imageUrl}
                alt="university photo"
              />

              <CardContent>
                <Typography variant="h4" component="h2">
                  {campus.name}
                </Typography>

                <Typography variant="h6" component="h4">
                  Campus ID: {campus.id}
                </Typography>
                <Typography variant="h6" component="p" fontSize="17px">
                  {campus.address}
                </Typography>
                <Typography component="p" fontSize="15px" m="0.5em">
                  {campus.description}
                </Typography>

                <Button
                  variant="outlined"
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    props.deleteCampus(campus.id);
                  }}
                >
                  Delete
                </Button>
              </CardContent>
            </CardActionArea>
          </BskCard>
        ))}
      </Box>

      <Button
        variant="contained"
        component={Link}
        to="/newcampus"
        sx={{ m: "2.5em" }}
      >
        Add New Campus
      </Button>
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;
