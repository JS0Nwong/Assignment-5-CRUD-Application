import { Box, TextField, Typography, Button, styled } from "@mui/material";

const FormContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
}));

const CampusInfoField = styled(TextField)(() => ({
  margin: "2em",
}));

const NewCampusView = (props) => {
  const { handleSubmit, handleChange } = props;

  return (
    <FormContainer>
      <Box
        sx={{
          backgroundColor: "#eec0c6",
          backgroundImage: "linear-gradient(315deg, #eec0c6 30%, #7ee8fa 85%)",
          borderRadius: "1.25em",
          m: "2em",
          p: "2em",
          minWidth: "260px",
          boxShadow:
            "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",
        }}
      >
        <Typography
          component="h2"
          sx={{
            fontSize: "20px",
            color: "#11153e",
          }}
        >
          Add a Campus
        </Typography>

        <form onSubmit={handleSubmit}>
          <Box sx={{ width: "100%" }}>
            <CampusInfoField
              variant="outlined"
              name="campusName"
              label="Campus Name"
              inputProps={{
                pattern: "[a-zA-Z]+",
                title: "Only alphabetic characters are allowed.",
              }}
              InputLabelProps={{ required: false }}
              required
              onChange={handleChange}
            />
            <CampusInfoField
              variant="outlined"
              name="campusId"
              label="Campus ID"
              type="number"
              sx={{
                "[type=number]::webkit-outer-spin-button": {
                  WebkitAppearance: "none",
                },
                "[type=number]::-webkit-inner-spin-button": {
                  WebkitAppearance: "none",
                },
              }}
              InputLabelProps={{ required: false }}
              onChange={handleChange}
              required
            />
          </Box>

          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </Box>
    </FormContainer>
  );
};

export default NewCampusView;
