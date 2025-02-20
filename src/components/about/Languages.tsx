import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Language } from "@mui/icons-material";

const Languages = () => {
    return (
        <Box sx={{ flex: 1 }}>
            <Paper variant="outlined" sx={{ p: 2, height: 1 }}>
                <Box sx={{ display: "inline-flex", gap: 0.5, alignItems: "center" }}>
                    <Language color="primary" fontSize="large" />
                    <Typography variant="h6">Languages</Typography>
                </Box>
                <Typography variant="body1" paragraph marginTop={1}>
                    <b>Spanish</b> - Native level.
                </Typography>
                <Typography variant="body1">
                    <b>English</b> - Conversational level.
                </Typography>
            </Paper>
        </Box>
    );
};

export default Languages;

