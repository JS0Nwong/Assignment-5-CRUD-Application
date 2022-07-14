import { Box, TextField, Typography, Button, styled } from "@mui/material";

const FormContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
}));

const CampusInfoField = styled(TextField)(() => ({
  margin: "1em",
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
          minWidth: "460px",
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
          Add a Campus
        </Typography>

        <form onSubmit={handleSubmit}>
          <Box sx={{ display: "flex", flexDirection: "row", width: "100%"}}>
            <CampusInfoField
              variant="standard"
              name="name"
              label="Campus Name"
              inputProps={{
                pattern: "[a-zA-Z ]+",
                title: "Only alphabetic characters are allowed.",
              }}
              InputLabelProps={{ required: false }}
              required
              onChange={handleChange}
            />
            <CampusInfoField
              variant="standard"
              name="address"
              label="Address"
              InputLabelProps={{ required: false }}
              onChange={handleChange}
              required
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CampusInfoField
              variant="standard"
              type="url"
              label="Image URL"
              name="imageUrl"
              onChange={handleChange}
              sx={{ width: "100%" }}
            />

            <CampusInfoField
              variant="outlined"
              name="description"
              label="Description"
              multiline
              rows={4}
              onChange={handleChange}
              sx={{ width: "100%" }}
            />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button type="submit" variant="contained" sx = {{width: "100%", padding: ".5rem"}}>
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </FormContainer>
  );
};

export default NewCampusView;
