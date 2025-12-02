import React from "react"
import { CommonProps } from "../App.props"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Chip from "@mui/material/Chip"
import Avatar from "@mui/material/Avatar"
import WorkIcon from '@mui/icons-material/Work'
import MotionCard from "../motion/MotionCard"
import { m, Variants } from "framer-motion"
import { useTheme } from "@mui/material/styles"
import { experienceData } from "../utils/data"
import { BlueSpan } from "../styles/styledComponents"
import CodeIcon from '@mui/icons-material/Code';
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone"
import CelebrationIcon from "@mui/icons-material/Celebration"
import LaptopIcon from '@mui/icons-material/Laptop';
import RestaurantIcon from "@mui/icons-material/Restaurant"


const icons = {
  code: <CodeIcon />,
  phone: <PhoneIphoneIcon />,
  event: <CelebrationIcon />,
  laptop: <LaptopIcon />,
  restaurant: <RestaurantIcon />,
}

const Experience = ({ secHeight, navID }: CommonProps) => {
  const theme = useTheme()
  return (
    <section id={navID}>
      <Box sx={{ minHeight: secHeight, py: { xs: 6, md: 10 } }}>
        <Typography variant="h4" textAlign="center" mb={4}>
          <BlueSpan>Experience</BlueSpan> Showcase
        </Typography>
        <VerticalTimeline {...({ lineColor: theme.palette.primary.main } as any)}>
          {(() => {
            // theme available from outer scope

            const imgVariants: Variants = {
              initial: { x: -100, opacity: 0 },
              whileInView: {
                x: 0,
                opacity: 1,
                rotate: [0, 6, 0],
                transition: { type: "spring" },
              },
            }
            const textVariants: Variants = {
              initial: { y: 40, opacity: 0 },
              whileInView: { y: 0, opacity: 1 },
            }

            return experienceData.map((item) => (
              <VerticalTimelineElement
                key={item.id}
                date={`${item.start ?? ""} - ${item.end ?? ""}`}
                icon={icons[item.icon]}
                contentStyle={{ background: 'transparent', boxShadow: 'none', padding: 0 }}
                contentArrowStyle={{ borderRight: `7px solid ${theme.palette.primary.main}` }}
                iconStyle={{ background: theme.palette.primary.main, color: '#fff' }}
              >
                <MotionCard
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ staggerChildren: 0.2 }}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: 3,
                    borderRadius: 3,
                    overflow: 'hidden',
                    '&:hover': {
                      boxShadow: (theme) => `0px 0px 12px 6px ${theme.palette.primary.main}`,
                      transform: 'scale(1.03)',
                      transition: 'transform 0.25s ease-in-out',
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      component={m.h6}
                      variants={textVariants}
                      gutterBottom
                      variant="h6"
                      sx={{ color: theme.palette.text.primary }}
                    >
                      {item.role}
                    </Typography>

                    <Typography
                      component={m.p}
                      variants={textVariants}
                      variant="body2"
                      sx={{ color: theme.palette.text.primary }}
                    >
                      {item.company} {item.location ? `· ${item.location}` : ""}
                    </Typography>

                    {item.description && (
                      <Typography mt={1} sx={{ color: theme.palette.text.primary }}>
                        {item.description}
                      </Typography>
                    )}

                    {item.bullets && (
                      <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                        {item.bullets.map((b, i) => (
                          <li
                            key={i}
                            style={{ color: theme.palette.text.primary, marginBottom: 6 }}
                          >
                            {b}
                          </li>
                        ))}
                      </Box>
                    )}

                    {item.skills && (
                      <Stack direction="row" gap={1} mt={1} flexWrap="wrap">
                        {item.skills.map((s) => (
                          <Chip
                            key={s}
                            label={s}
                            variant="outlined"
                            color="primary"
                            size="small"
                            sx={{ mt: 1 }}
                          />
                        ))}
                      </Stack>
                    )}
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'space-between', p: 2 }}>
                    <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                      {item.employmentType ?? ''} {item.duration ? `· ${item.duration}` : ''}
                    </Typography>
                    {item.remote && (
                      <Button size="small" color="primary" variant="outlined" disabled>
                        {item.remote}
                      </Button>
                    )}
                  </CardActions>
                </MotionCard>
              </VerticalTimelineElement>
            ))
          })()}
        </VerticalTimeline>
      </Box>
    </section>
  )
}

export default Experience
