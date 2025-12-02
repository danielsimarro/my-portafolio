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
            I’m a <b>Full Stack Software Engineer</b> with over <b>3 years of experience</b>, 
            building and improving digital products across <b>healthcare</b>, 
            <b>enterprise management</b> and <b>large-scale event platforms</b>.
          </Typography>

          <Typography variant="body1" paragraph>
            Throughout my journey, I’ve <b>modernised legacy systems</b> (PHP 5.6 → PHP 8), 
            developed <b>scalable APIs</b>, built <b>web and mobile apps</b>, and delivered 
            features used daily by hundreds of professionals.
          </Typography>

          <ul>
            <li>
              <Typography variant="body1">
                <b>Backend & APIs:</b> PHP, Laravel, Zend Framework 2, Node.js, REST, MVC, JWT.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <b>Frontend & Mobile:</b> React, JavaScript, Flutter, jQuery.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <b>Databases:</b> MySQL, MariaDB, query optimisation and schema design.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <b>Cloud & DevOps:</b> Git, Docker, Linux, deployments, AWS contributions.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <b>Digital transformation:</b> improving workflows and modernising platforms 
                used daily by healthcare and enterprise clients.
              </Typography>
            </li>
          </ul>

          <Typography variant="body1" paragraph>
            I love <b>working closely with teams</b>, contributing my best to every project and 
            creating <b>simple, scalable and meaningful solutions</b>.
          </Typography>

          <Typography variant="body1">
            Always learning, always improving — and always building things that make a real 
            impact on users and companies.
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
