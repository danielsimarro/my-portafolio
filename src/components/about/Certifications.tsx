import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { aboutData } from "../../utils/data";
import { Link } from "@mui/material";

const Certifications = () => {
  return (
    <Box sx={{ flex: 1 }}>
      <Paper variant="outlined" sx={{ p: 2, height: 1 }}>
        <Box sx={{ display: "inline-flex", gap: 0.5, alignItems: "center"}}>
          <WorkspacePremiumIcon color="primary" fontSize="large" />
          <Typography variant="h6">Certifications</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "start", 
            alignItems: "center",
            marginTop: 1,
          }}
        >
          {aboutData?.badges?.map(({ imgURL }, i) => (
            <Link
              key={i}
              underline="none"
              target="_blank"
              rel="noopener"
            >
              <Box
                component={"img"}
                sx={{
                  width: 100,
                  height: "auto",
                }}
                src={imgURL}
                alt={imgURL?.split(".")?.[0]}
              />
            </Link>
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

export default Certifications;
