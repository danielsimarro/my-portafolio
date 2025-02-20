import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import SchoolIcon from "@mui/icons-material/School";
import { BlueSpan } from "../../styles/styledComponents";

const Education = () => {
  return (
    <Box sx={{ flex: 1 }}>
      <Paper variant="outlined" sx={{ p: 2, height: 1 }}>
        <Box sx={{ display: "inline-flex", gap: 1, alignItems: "center" }}>
          <SchoolIcon color="primary" fontSize="large" />
          <Typography variant="h6">Education</Typography>
        </Box>

        <Typography fontWeight="bold" gutterBottom marginTop={1}>
          Superior Degree in Web Applications Development | <BlueSpan>IES Zaidín Vergeles</BlueSpan>
        </Typography>
        <Typography>Granada, Spain (2020 - 2022)</Typography>

        <Typography fontWeight="bold" gutterBottom mt={2}>
          Medium Degree in Microcomputer Systems and Networks | <BlueSpan>IES Salduba</BlueSpan>
        </Typography>
        <Typography>Marbella, Spain (2018 - 2020)</Typography>
      </Paper>
    </Box>
  );
};

export default Education;
