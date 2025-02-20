import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import { CommonProps } from "../../App.props"
import { Variants, m } from "framer-motion"
import useMediaQuery from "@mui/material/useMediaQuery"
import { Theme } from "@mui/material/styles"
import AboutMe from "./AboutMe"
import Certifications from "./Certifications"
import Education from "./Education"
import Languages from "./Languages"

const About = ({ secHeight, navID }: CommonProps) => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  )
  let variants: Variants = isSmallScreen
    ? {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
      }
    : {
        initial: { opacity: 0, x: 50 },
        whileInView: {
          opacity: 1,
          x: 0,
          transition: { delay: 0.3 },
        },
      }
  return (
    <section id={navID}>
      <Grid container sx={{ minHeight: secHeight, alignContent: "flex-start" }}>
        <Grid item xs={12} py={3}>
          <AboutMe />
        </Grid>

        <Stack direction={{ xs: "column", md: "row" }} gap={{ xs: 2, md: 3 }} pt={2}>
          <Education />
          <Languages />
          <Certifications />
        </Stack>
      </Grid>
    </section>
  );
};

export default About;
