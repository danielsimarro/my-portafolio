import { CommonProps } from "../App.props";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { projectData } from "../utils/data";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { BlueSpan } from "../styles/styledComponents";
import MotionCard from "../motion/MotionCard";
import { Variants, m } from "framer-motion";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const Projects = ({ secHeight, navID }: CommonProps) => {
  let imgVariants: Variants = {
    initial: { x: -100, opacity: 0 },
    whileInView: {
      x: 0,
      opacity: 1,
      rotate: [0, 10, 0],
      transition: { type: "spring" },
    },
  };
  let textVariants: Variants = {
    initial: { y: 100, opacity: 0 },
    whileInView: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id={navID}>
      <Grid
        container
        sx={{
          minHeight: secHeight,
          alignContent: "flex-start",
          mt: secHeight === "auto" ? { xs: 8, sm: 12, md: 16 } : 0,
          mb: secHeight === "auto" ? { xs: 8, sm: 12, md: 16 } : 0,
        }}
      >
        <Grid item xs={12} py={3}>
          <Typography variant="h4" textAlign={"center"}>
            Personal <BlueSpan>Projects</BlueSpan>
          </Typography>
        </Grid>
        <Grid item container spacing={5}>
          {projectData?.map(
            ({ name, description, githubURL, projectURL, imgURL, languages }, i) => (
              <Grid item key={name} xs={12} sm={6} md={4}>
                <MotionCard
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ staggerChildren: 0.5 }}
                  sx={{
                    display: "flex",
                    height: 1,
                    flexDirection: "column",
                    boxShadow: 3,
                    borderRadius: 3,
                    overflow: "hidden",
                    "&:hover": {
                      boxShadow: (theme) => `0px 0px 12px 6px ${theme.palette.primary.main}`,
                      transform: "scale(1.05)",
                      transition: "transform 0.3s ease-in-out",
                    },
                  }}
                >
                  <Box
                    component={m.img}
                    sx={{ width: 1, aspectRatio: "2.2", objectFit: "cover", height: 225 }}
                    title={name}
                    alt={name}
                    src={imgURL}
                    variants={imgVariants}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      component={m.h6}
                      variants={textVariants}
                      gutterBottom
                      variant="h6"
                    >
                      {name}
                    </Typography>
                    <Typography
                      component={m.p}
                      variants={textVariants}
                      variant="body2"
                      color="text.secondary"
                    >
                      {description}
                    </Typography>
                    <Stack
                      direction="row"
                      gap={1} // Aumenta el espaciado entre los elementos
                      mt={1}
                      flexWrap="wrap"
                      justifyContent="center" // Centra los elementos horizontalmente
                      alignItems="center" // Asegura que los elementos estén alineados verticalmente
                    >
                      {languages?.map((lang) => (
                        <Chip
                          key={lang}
                          label={lang}
                          variant="outlined"
                          color="primary"
                          size="small"
                          sx={{ mt: 1 }}
                        />
                      ))}
                    </Stack>

                  </CardContent>
                  <CardActions sx={{ justifyContent: "space-evenly", p: 2 }}>
                    <Button
                      disabled={!Boolean(projectURL)}
                      href={projectURL}
                      target="_blank"
                      rel="noopener"
                      color="primary"
                      startIcon={<OpenInNewIcon />}
                    >
                      Live Preview
                    </Button>
                    <Button
                      href={githubURL}
                      target="_blank"
                      rel="noopener"
                      color="primary"
                      startIcon={<GitHubIcon />}
                    >
                      View Code
                    </Button>
                  </CardActions>
                </MotionCard>
              </Grid>
            )
          )}
        </Grid>
      </Grid>
    </section>
  )
}

export default Projects
