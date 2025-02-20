import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { BlueSpan } from "../../styles/styledComponents";
import { Player } from "@lottiefiles/react-lottie-player";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const AboutMe = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Let Me <BlueSpan>Introduce Myself</BlueSpan>
      </Typography>

      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={8}>
          <Typography variant="body1" paragraph>
            I am a <b>passionate Software Developer</b> with over a year of experience in the industry.
          </Typography>

          <Typography variant="body1" paragraph>
            Throughout my career, I have worked with a diverse set of technologies, specializing in:
          </Typography>

          <ul>
            <li>
              <Typography variant="body1">
                <b>Backend development</b> with <b>PHP, Laravel, and Zend Framework 2</b>.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <b>Frontend development</b> using <b>React and JavaScript</b>.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <b>Database management</b> with <b>MySQL and MariaDB</b>.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <b>Mobile application development</b> in <b>Flutter</b>, including <b>enterprise management software</b>.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <b>Version control</b> with <b>Git</b> and deploying applications to production environments.
              </Typography>
            </li>
          </ul>

          <Typography variant="body1" paragraph>
            I thrive on <b>learning new technologies</b> and staying up-to-date with modern development practices.
          </Typography>

          <Typography variant="body1">
            <b>Collaboration</b> is key to success, and I enjoy <b>working in a team</b> to create <b>efficient and innovative solutions</b>.
          </Typography>
        </Grid>
        
        {!isSmallScreen && (
          <Grid item xs={12} md={4}>
            <Player
              src="https://lottie.host/49f9657b-0967-40e8-a5cf-4a8835262ff8/3DV7zJE7j0.json"
              autoplay
              loop
              className="lottie-player"
              style={{ maxWidth: "100%" }}
            />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default AboutMe;
